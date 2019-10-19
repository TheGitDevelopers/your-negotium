import { Component, Input } from "@angular/core";

@Component({
  selector: "app-circle-graph",
  templateUrl: "./circle-graph.component.html",
  styleUrls: ["./circle-graph.component.scss"]
})
export class CircleGraphComponent {
  @Input() dataset;
  @Input() graphText;
  constructor() {}
}
