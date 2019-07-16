import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";
import { GoogleAuthService } from "src/app/services/googleauth.service";
export interface EventData {
  event: any;
  description: string;
  date;
}

@Component({
  selector: "app-edit-event-pop-up",
  templateUrl: "./edit-event-pop-up.component.html",
  styleUrls: ["./edit-event-pop-up.component.scss"],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class EditEventPopUpComponent implements OnInit {
  options: FormGroup;
  remindMeSwitch: String;
  description: String;
  event;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditEventPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EventData,
    private googleAuth: GoogleAuthService
  ) {
    this.description = data.description;
    this.options = fb.group({
      _id: "",
      name: "",
      location: "",
      calendarType: "",
      eventType: "",
      remindType: "",
      remindDate: "",
      created: "",
      creator: this.fb.group({
        email: googleAuth.userEmail(),
        self: true
      }),
      description: "",
      end: this.fb.group({
        dateTime: 0
      }),
      extendedProperties: this.fb.group({
        private: {
          everyoneDeclinedDismissed: ""
        }
      }),
      htmlLink: "",
      iCalUID: "",
      id:
        "_" +
        Math.random()
          .toString(36)
          .substr(2),
      kind: "",
      organizer: this.fb.group({
        email: googleAuth.userEmail(),
        self: true
      }),
      reminders: this.fb.group({
        useDefault: true
      }),
      sequence: "",
      start: this.fb.group({
        dateTime: 0
      }),
      status: "",
      summary: "",
      updated: ""
    });
    if (data.event && Object.values(data.event).length) {
      let tempEvents = data.event;
      tempEvents.start = this.fb.group({
        dateTime: new Date(tempEvents.start.dateTime)
      });
      tempEvents.end = this.fb.group({
        dateTime: new Date(tempEvents.end.dateTime)
      });
      this.options = fb.group({
        ...this.options.controls,
        ...tempEvents
      });
    }
    if (data.date) {
      this.options
        .get("start")
        .get("dateTime")
        .setValue(new Date(data.date));
    }
  }

  ngOnInit() {
    const startAt = new Date();
  }

  changeDateFormat(name) {
    if (this.options.get(name)) {
      this.options
        .get(name)
        .get("dateTime")
        .setValue(
          new Date(this.options.get(name).get("dateTime").value).getTime()
        );
    }
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.changeDateFormat("start");
    this.changeDateFormat("end");
    this.changeDateFormat("remind");
    this.dialogRef.close({
      mode: "edit",
      data: this.options.value
    });
  }

  delete() {
    this.changeDateFormat("start");
    this.changeDateFormat("end");
    this.changeDateFormat("remind");
    this.dialogRef.close({
      mode: "delete",
      data: this.options.get("_id").value
    });
  }
}
