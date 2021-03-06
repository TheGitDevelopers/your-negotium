import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-holiday",
  templateUrl: "./holiday.component.html",
  styleUrls: ["./holiday.component.scss"]
})
export class HolidayComponent implements OnInit {
  holidayList = [
    {
      who: "James Adams",
      when: "From 14th of July to 2th of July",
      "Available days": "13",
      index: "Z30",
      accept: true,
      reject: false
    },
    {
      who: "James Adams",
      when: "From 14th of July to 2th of July",
      "Available days": "13",
      index: "Z30",
      accept: true,
      reject: false
    },
    {
      who: "James Adams",
      when: "From 14th of July to 2th of July",
      "Available days": "13",
      index: "Z30",
      accept: true,
      reject: false
    },
    {
      who: "James Adams",
      when: "From 14th of July to 2th of July",
      "Available days": "13",
      index: "Z30",
      accept: true,
      reject: false
    },
    {
      who: "James Adams",
      when: "From 14th of July to 2th of July",
      "Available days": "13",
      index: "Z30",
      accept: true,
      reject: false
    },
    {
      who: "James Adams",
      when: "From 14th of July to 2th of July",
      "Available days": "13",
      index: "Z30",
      accept: true,
      reject: false
    }
  ];

  viewedRequestList = [
    {
      who: "James Adams",
      when: "From 14th of July to 2th of July",
      "Available days": "13",
      index: "Z30",
      status: true,
      accept: true,
      reject: false
    },
    {
      who: "James Adams",
      when: "From 14th of July to 2th of July",
      "Available days": "13",
      index: "Z30",
      status: false,
      accept: true,
      reject: false
    },
    {
      who: "James Adams",
      when: "From 14th of July to 2th of July",
      "Available days": "13",
      index: "Z30",
      status: true,
      accept: true,
      reject: false
    },
    {
      who: "James Adams",
      when: "From 14th of July to 2th of July",
      "Available days": "13",
      index: "Z30",
      status: false,
      accept: true,
      reject: false
    },
    {
      who: "James Adams",
      when: "From 14th of July to 2th of July",
      "Available days": "13",
      index: "Z30",
      status: false,
      accept: true,
      reject: false
    },
    {
      who: "James Adams",
      when: "From 14th of July to 2th of July",
      "Available days": "13",
      index: "Z30",
      status: true,
      accept: true,
      reject: false
    }
  ];

  selectedSearchMode = "index";

  holidayLabel: Object;
  viewedRequestLabel: Object;

  constructor() {
    this.holidayLabel = Object.keys(this.holidayList[0]);
    this.viewedRequestLabel = Object.keys(this.viewedRequestList[0]);
  }

  ngOnInit() {}
}
