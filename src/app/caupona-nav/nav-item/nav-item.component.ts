import { Component, Input, OnInit } from "@angular/core";
import { slideTrigger } from "../../animations/slide";

@Component({
  selector: "app-nav-item",
  templateUrl: "./nav-item.component.html",
  styleUrls: ["./nav-item.component.scss"],
  animations: [slideTrigger]
})
export class NavItemComponent implements OnInit {
  @Input() menuItem;
  @Input() menuStatus;

  isSubMenuOpened;

  constructor() {
    this.isSubMenuOpened = false;
  }

  ngOnInit() {}

  toggleSubMenu() {
    if (!this.menuStatus) this.isSubMenuOpened = !this.isSubMenuOpened;
  }

  get stateStatus() {
    if (!this.menuStatus) return this.isSubMenuOpened ? "show" : "hide";
  }
}
