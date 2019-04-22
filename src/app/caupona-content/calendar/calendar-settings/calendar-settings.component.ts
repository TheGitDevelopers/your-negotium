import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calendar-settings",
  templateUrl: "./calendar-settings.component.html",
  styleUrls: ["./calendar-settings.component.scss"]
})
export class CalendarSettingsComponent implements OnInit {
  constructor() {}
  googleintegration: boolean;
  ngOnInit() {}
  activateApi(event) {
    console.log(event.value["api-key"]);
  }
}
