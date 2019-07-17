import { Component, OnChanges, Input } from "@angular/core";
import { EventOperationsService } from "src/app/services/event-operations.service";
import { FilterEventsPipe } from "src/app/pipes/filter-events.pipe";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"]
})
export class EventComponent implements OnChanges {
  @Input() actualMode;
  @Input() events;
  @Input() week;
  convertedHours = [];
  constructor(
    protected EventOperations: EventOperationsService,
    public filterEvents: FilterEventsPipe
  ) {}

  filterEventsCheck(hour, actualMode) {
    return this.filterEvents.transform(this.events, hour, actualMode);
  }

  checkOutdated(time) {
    return new Date(time).getTime() < new Date().getTime() &&
      this.actualMode === "day"
      ? true
      : false;
  }
  checkIncoming(time) {
    return new Date(time).getTime() > new Date().getTime() &&
      this.actualMode === "day"
      ? true
      : false;
  }

  ngOnChanges() {
    this.convertedHours = [];
    if (this.actualMode === "day") {
      for (
        let i = new Date(
          new Date(this.week).getFullYear(),
          new Date(this.week).getUTCMonth(),
          new Date(this.week).getDate(),
          0
        );
        i <=
        new Date(
          new Date(this.week).getFullYear(),
          new Date(this.week).getUTCMonth(),
          new Date(this.week).getDate() + 1,
          -1
        );
        i = new Date(
          i.getFullYear(),
          i.getUTCMonth(),
          i.getDate(),
          i.getHours() + 1
        )
      ) {
        this.convertedHours.push(i);
      }
    } else {
      this.convertedHours.push("");
    }
    if (this.events) {
      this.events.sort((event1, event2) => {
        return (
          new Date(event1.start.dateTime).getTime() -
          new Date(event2.start.dateTime).getTime()
        );
      });
    }
  }
}
