import { Component, Input } from "@angular/core";
import { EventOperationsService } from "src/app/services/event-operations.service";

@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.scss"]
})
export class DayComponent {
  @Input() actualMode;
  @Input() convertedDays;
  @Input() week;
  @Input() monthName;
  @Input() day;
  @Input() index;
  constructor(protected EventOperations: EventOperationsService) {}
  addEvent(event, date) {
    event.stopPropagation();
    this.EventOperations.addEvent(date);
  }
}
