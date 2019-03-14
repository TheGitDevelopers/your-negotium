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

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    console.log(this.dataSource);
    this.tabs = [
      {
        title: "Just orders",
        dataSource: this.dataSource,
        labels: ["id", "name", "price"],
        displayedColumns: ["id", "name"] // define which columns are being displayed and the order (names have to match exactly labels)
      },
      {
        title: "Just orders 2",
        dataSource: this.dataSource,
        labels: ["id", "name", "price"],
        displayedColumns: ["price", "name", "id"]
      }
    ];
  }
}
