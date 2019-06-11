import { Component, Input } from "@angular/core";

@Component({
  selector: "app-calendar-header",
  templateUrl: "./calendar-header.component.html",
  styleUrls: ["./calendar-header.component.scss"]
})
export class CalendarHeaderComponent {
  @Input() actualMode;
  @Input() convertedDaysOfWeek;
  @Input() week;
  @Input() monthName;
  @Input() day;
  @Input() index;
  constructor() {}
}
