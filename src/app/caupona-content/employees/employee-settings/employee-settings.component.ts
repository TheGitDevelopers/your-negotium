import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-employee-settings",
  templateUrl: "./employee-settings.component.html",
  styleUrls: ["./employee-settings.component.scss"]
})
export class EmployeeSettingsComponent implements OnInit {
  modes = ["week", "month"];
  hours = ["1 hour", "2 hour", "3 hour", "4 hour"];
  selectedMode = "week";
  hour = "4 hour";
  mode;

  emails = ["james.fox@gmail.com"];

  constructor(private route: ActivatedRoute, private routerNavigate: Router) {}

  ngOnInit() {}

  addEmail() {
    this.emails.push("");
  }
}
