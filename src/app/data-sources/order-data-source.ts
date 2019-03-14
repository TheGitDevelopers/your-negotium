import { DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs/internal/Observable";
import { OrderService } from "../services/order.service";
import { Order } from "../models/order";

export class OrderDataSource extends DataSource<any> {
  constructor(private orderService: OrderService) {
    super();
  }

  connect(): Observable<Order[]> {
    return this.orderService.getOrder();
  }

  disconnect(): void {}
}
