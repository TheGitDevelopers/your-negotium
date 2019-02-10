import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-caupona-content",
  templateUrl: "./caupona-content.component.html",
  styleUrls: ["./caupona-content.component.scss"]
})
export class CauponaContentComponent implements OnInit {
  content = [{ name: "dashboard", icon: "fas fa-chart-line" }];

  constructor() {}

  ngOnInit() {}
}
