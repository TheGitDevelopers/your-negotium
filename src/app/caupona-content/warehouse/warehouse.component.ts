import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-warehouse",
  templateUrl: "./warehouse.component.html",
  styleUrls: ["./warehouse.component.scss"]
})
export class WarehouseComponent implements OnInit {
  titles: string[];

  constructor() {}

  ngOnInit() {
    this.titles = ["title_one", "title_two", "title_three"];
  }
}
