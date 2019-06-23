import { Component, Inject } from "@angular/core";
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
export class EditEventPopUpComponent {
  options: FormGroup;
  remindMeSwitch: String;
  description: String;
  event;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditEventPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EventData
  ) {
    this.description = data.description;
    this.options = fb.group({
      name: "",
      startDate: "",
      endDate: "",
      notes: "",
      location: "",
      calendarType: "",
      eventType: "",
      remindType: "",
      remindDate: "",
      eventId: ""
    });
    if (data.event)
      if (Object.values(data.event).length)
        this.options = this.fb.group({
          ...this.options.controls,
          ...this.data.event
        });
    if (data.date) {
      this.options = this.fb.group({
        ...this.options.controls,
        startDate: new Date(data.date)
      });
    }
  }

  ngOnInit() {
    const startAt = new Date();
  }

  changeDateFormat(name) {
    if (this.options.get(name).value.length > 0) {
      this.options
        .get(name)
        .setValue(
          `${new Date(this.options.get(name).value).getFullYear()}/${new Date(
            this.options.get(name).value
          ).getMonth()}/${new Date(this.options.get(name).value).getDate()}`
        );
    }
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.changeDateFormat("startDate");
    this.changeDateFormat("endDate");
    this.changeDateFormat("remindDate");
    this.dialogRef.close({
      mode: "edit",
      data: this.options
    });
  }

  delete() {
    this.changeDateFormat("startDate");
    this.changeDateFormat("endDate");
    this.changeDateFormat("remindDate");
    this.dialogRef.close({
      mode: "delete",
      data: this.options.value.eventId
    });
  }
}
