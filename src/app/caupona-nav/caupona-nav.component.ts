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
        submenuItems: [
          {
            label: "charts",
            path: "charts"
          },
          {
            label: "tables",
            path: "tables"
          }
        ]
      },
      {
        name: "orders",
        icon: "fas fa-tasks",
        submenuItems: [
          {
            label: "online orders",
            path: "online-orders"
          },
          {
            label: "local orders",
            path: "local-orders"
          }
        ]
      },
      {
        name: "warehouse",
        icon: "fas fa-store",
        submenuItems: [
          {
            label: "fixed products",
            path: "fixed-products"
          },
          {
            label: "temporary products",
            path: "temporary-products"
          },
          {
            label: "special products",
            path: "special-products"
          },
          {
            label: "add new",
            path: "new-product"
          }
        ]
      },
      {
        name: "finance",
        icon: "fas fa-piggy-bank",
        submenuItems: [
          {
            label: "costs",
            path: "costs"
          },
          {
            label: "carriage",
            path: "carriage"
          },
          {
            label: "consumption",
            path: "consumption"
          },
          {
            label: "leasing",
            path: "leasing"
          }
        ]
      },
      {
        name: "employees",
        icon: "fas fa-user-tie",
        submenuItems: [
          {
            label: "holiday",
            path: "holiday"
          },
          {
            label: "availability",
            path: "availability"
          },
          {
            label: "trainings",
            path: "trainings"
          }
        ]
      },
      {
        name: "reservations",
        icon: "far fa-envelope",
        submenuItems: [
          {
            label: "general",
            path: "general"
          },
          {
            label: "add new",
            path: "add-new-reservation"
          },
          {
            label: "local orders",
            path: "local-orders"
          }
        ]
      },
      {
        name: "calendar",
        icon: "far fa-calendar-alt",
        submenuItems: [
          {
            label: "calendar",
            path: ""
          },
          {
            label: "add new",
            path: "add-new-event"
          },
          {
            label: "calendar settings",
            path: "calendar-settings"
          }
        ]
      },
      {
        name: "targets",
        icon: "fas fa-business-time",
        submenuItems: [
          {
            label: "general",
            path: "general"
          },
          {
            label: "add new",
            path: "add-new-target"
          }
        ]
      },
      {
        name: "partners",
        icon: "fas fa-handshake",
        submenuItems: [
          {
            label: "general",
            path: "general"
          },
          {
            label: "add new",
            path: "add-new-partner"
          }
        ]
      },
      {
        name: "sale",
        icon: "fas fa-money-check-alt",
        submenuItems: [
          {
            label: "discounts",
            path: "discounts"
          }
        ]
      },
      {
        name: "customers",
        icon: "fas fa-user",
        submenuItems: [
          {
            label: "client data",
            path: "client-data"
          },
          {
            label: "add new",
            path: "add-new-client"
          }
        ]
      },
      {
        name: "reports",
        icon: "far fa-file-alt",
        submenuItems: [
          {
            label: "ask for report",
            path: "ask-for-report"
          },
          {
            label: "download",
            path: "download-report"
          }
        ]
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
