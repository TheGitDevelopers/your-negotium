import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnChanges
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
// import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
  selector: "app-event-form",
  templateUrl: "./event-form.component.html",
  styleUrls: ["./event-form.component.scss"]
})
export class EventFormComponent implements OnInit, OnChanges {
  @Input() myEvent;
  @Output() formEvent: EventEmitter<any> = new EventEmitter();

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
  options: FormGroup;
  remindMeSwitch: String;
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
    this.formEvent.emit(event);
  }
}
