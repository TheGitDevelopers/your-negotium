import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"]
})
export class EventComponent implements OnInit {
  @Input() actualMode;
  @Input() events;
  @Input() week;

  constructor() {}

  ngOnInit() {}
}
