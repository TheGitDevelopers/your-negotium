import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-item",
  templateUrl: "./nav-item.component.html",
  styleUrls: ["./nav-item.component.scss"]
})
export class NavItemComponent implements OnInit {
  @Input() menuItem;

  private isSubMenuOpened;

  constructor() {
    this.isSubMenuOpened = false;
  }

  ngOnInit() {}

  toggleSubMenu() {
    this.isSubMenuOpened = !this.isSubMenuOpened;
  }
}
