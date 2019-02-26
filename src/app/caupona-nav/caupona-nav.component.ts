import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-caupona-nav",
  templateUrl: "./caupona-nav.component.html",
  styleUrls: ["./caupona-nav.component.scss"]
})
export class CauponaNavComponent implements OnInit {
  private menuItems = [
    { name: "dashboard", icon: "fas fa-chart-line" },
    { name: "orders", icon: "fas fa-tasks" },
    { name: "warehouse", icon: "fas fa-store" },
    { name: "finance", icon: "fas fa-piggy-bank" },
    { name: "employees", icon: "fas fa-user-tie" },
    { name: "reservations", icon: "far fa-envelope" },
    { name: "calendar", icon: "far fa-calendar-alt" },
    { name: "targets", icon: "fas fa-business-time" },
    { name: "partners", icon: "fas fa-handshake" },
    { name: "sale", icon: "fas fa-money-check-alt" },
    { name: "customers", icon: "fas fa-user" },
    { name: "reports", icon: "far fa-file-alt" }
  ];

  private menuStatus = false;
  private counter = 0;
  private mobileView = false;
  private logoText = "caupona";

  constructor() {
    if (window.screen.width === 768) {
      this.mobileView = true;
      this.logoText = "ca";
      this.menuStatus = true;
    }
  }

  ngOnInit() {}

  changeText() {
    this.menuStatus ? (this.logoText = "ca") : (this.logoText = "Caupona");
  }

  wrapMenu() {
    if (this.counter === 0) {
      this.counter++;
      this.menuStatus = !this.menuStatus;
      this.changeText();
    } else {
      this.menuStatus = !this.menuStatus;
      this.changeText();
    }
  }
}
