import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-tab-navbar",
  templateUrl: "./tab-navbar.component.html",
  styleUrls: ["./tab-navbar.component.scss"]
})
export class TabNavbarComponent implements OnInit {
  @Input() tabs: object[];

  constructor() {}

  ngOnInit() {}
}
