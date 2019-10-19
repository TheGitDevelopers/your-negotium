import { Component, Input } from "@angular/core";

@Component({
  selector: "app-circle-graph-full",
  templateUrl: "./circle-graph-full.component.html",
  styleUrls: ["./circle-graph-full.component.scss"]
})
export class CircleGraphFullComponent {
  @Input() dataset;
  @Input() graphText;
  constructor() {}
}
