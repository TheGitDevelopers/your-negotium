import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnChanges
} from "@angular/core";
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

@Component({
  selector: "app-event-form",
  templateUrl: "./event-form.component.html",
  styleUrls: ["./event-form.component.scss"],
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
export class EventFormComponent implements OnInit, OnChanges {
  @Input() myEvent;
  @Output() formEvent: EventEmitter<any> = new EventEmitter();

  options: FormGroup;
  remindMeSwitch: String;

  constructor(private fb: FormBuilder) {
    this.options = fb.group({
      name: "",
      startDate: "",
      endDate: "",
      notes: "",
      location: "",
      calendarType: "",
      eventType: "",
      remindType: "",
      remindDate: ""
    });
  }

  ngOnChanges() {
    if (Object.values(this.myEvent).length) {
      delete this.myEvent.eventId;
      this.options = this.fb.group({
        ...this.options.controls,
        ...this.myEvent
      });
    }
  }
  ngOnInit() {
    const startAt = new Date();
  }
  submitEvent(event) {
    event.value.remindDate = `${event.value.remindDate.getFullYear()}/${event.value.remindDate.getMonth()}/${event.value.remindDate.getDate()}`;
    event.value.startDate = `${event.value.startDate.getFullYear()}/${event.value.startDate.getMonth()}/${event.value.startDate.getDate()}`;
    event.value.endDate = `${event.value.endDate.getFullYear()}/${event.value.endDate.getMonth()}/${event.value.endDate.getDate()}`;
    this.formEvent.emit(event.value);
  }
}
