import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { AngularFireDatabase } from "@angular/fire/database";
import { Order } from "../models/order";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  items: Observable<any[]>;
  orders: any;
  private db: any;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  getOrder(): Observable<Order[]> {
    this.items = this.db.list("orders").valueChanges();
    this.items.subscribe(orders => {
      this.orders = orders;
    });
    return this.items;
  }
}
