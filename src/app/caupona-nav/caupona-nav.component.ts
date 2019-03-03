import { Component, OnInit } from "@angular/core";
import { MenuItem } from "../models/menu-item";

@Component({
  selector: "app-caupona-nav",
  templateUrl: "./caupona-nav.component.html",
  styleUrls: ["./caupona-nav.component.scss"]
})
export class CauponaNavComponent implements OnInit {
  private menuItems: Array<MenuItem>;
  private menuStatus = false;
  private counter = 0;
  mobileView = false;
  private logoText = "caupona";

  constructor() {
    if (window.screen.width === 768) {
      this.mobileView = true;
      this.logoText = "ca";
      this.menuStatus = true;
    }
  }

  ngOnInit() {
    this.menuItems = [
      {
        name: "dashboard",
        icon: "fas fa-chart-line",
        submenuItems: ["charts", "tables"]
      },
      {
        name: "orders",
        icon: "fas fa-tasks",
        submenuItems: ["menu", "temporary", "online orders", "local orders"]
      },
      {
        name: "warehouse",
        icon: "fas fa-store",
        submenuItems: [
          "fixed products",
          "temporary products",
          "special products",
          "new product"
        ]
      },
      {
        name: "finance",
        icon: "fas fa-piggy-bank",
        submenuItems: ["costs", "carriage", "consumption", "leasing"]
      },
      {
        name: "employees",
        icon: "fas fa-user-tie",
        submenuItems: ["holiday", "availability", "trainings"]
      },
      {
        name: "reservations",
        icon: "far fa-envelope",
        submenuItems: ["general", "add new reservation"]
      },
      {
        name: "calendar",
        icon: "far fa-calendar-alt",
        submenuItems: ["meetings", "company events", "add new event"]
      },
      {
        name: "targets",
        icon: "fas fa-business-time",
        submenuItems: ["general", "add new target"]
      },
      {
        name: "partners",
        icon: "fas fa-handshake",
        submenuItems: ["general", "add new partner"]
      },
      {
        name: "sale",
        icon: "fas fa-money-check-alt",
        submenuItems: ["discounts"]
      },
      {
        name: "customers",
        icon: "fas fa-user",
        submenuItems: ["client data", "add new client"]
      },
      {
        name: "reports",
        icon: "far fa-file-alt",
        submenuItems: ["ask for report", "download report"]
      }
    ];
  }

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
