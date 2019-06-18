import { Component, OnChanges, Input } from "@angular/core";

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
  constructor() {}

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
          new Date().getFullYear(),
          new Date().getUTCMonth(),
          new Date().getDate(),
          0
        );
        i <=
        new Date(
          new Date().getFullYear(),
          new Date().getUTCMonth(),
          new Date().getDate() + 1,
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
          new Date(event1.time).getTime() - new Date(event2.time).getTime()
        );
      });
    }
  }
}
