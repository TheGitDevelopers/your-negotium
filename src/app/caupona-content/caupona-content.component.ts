import { Component, OnInit } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: "app-caupona-content",
  templateUrl: "./caupona-content.component.html",
  styleUrls: ["./caupona-content.component.css"]
})
export class CauponaContentComponent implements OnInit {
  content = [{ name: "dashboard", icon: "fas fa-chart-line" }];

  constructor() {}

  ngOnInit() {}
}
