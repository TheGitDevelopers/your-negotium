import { Component, OnInit } from "@angular/core";
import { OrderDataSource } from "src/app/data-sources/order-data-source";
import { OrderService } from "src/app/services/order.service";

@Component({
  selector: "app-online-orders",
  templateUrl: "./online-orders.component.html",
  styleUrls: ["./online-orders.component.scss"]
})
export class OnlineOrdersComponent implements OnInit {
  tabs: object[];
  dataSource = new OrderDataSource(this.orderService);
  displayedColumns = ["price", "name"];

  constructor(private orderService: OrderService) {}

  findObjectParam(e, i) {
    const category = Object.keys(e)[i];
    return e[category];
  }

  ngOnInit() {
    this.tabs = [
      {
        title: "Just orders",
        dataSource: this.dataSource,
        labels: ["name", "price"],
        findObjectParam: this.findObjectParam,
        displayedColumns: this.displayedColumns
      }
    ];
  }
}
