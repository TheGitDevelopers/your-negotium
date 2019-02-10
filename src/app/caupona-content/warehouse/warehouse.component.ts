import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-warehouse",
  templateUrl: "./warehouse.component.html",
  styleUrls: ["./warehouse.component.scss"]
})
export class WarehouseComponent implements OnInit {
  tabs: object[];

  constructor() {}

  ngOnInit() {
    this.tabs = [
      {
        title: "title I",
        content: "content for tab I goes here"
      },
      {
        title: "title II",
        content: "content for tab II goes here"
      },
      {
        title: "title III",
        content: "content for tab III goes here"
      }
    ];
  }
}
