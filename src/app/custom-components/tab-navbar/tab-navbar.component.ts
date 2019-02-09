import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-tab-navbar",
  templateUrl: "./tab-navbar.component.html",
  styleUrls: ["./tab-navbar.component.css"]
})
export class TabNavbarComponent implements OnInit {
  @Input() titles: string[];
  @Input() tab: any[];

  constructor() {}

  ngOnInit() {}

  // showTabContent(tab) {
  //   tab.content = true;
  // }
}
