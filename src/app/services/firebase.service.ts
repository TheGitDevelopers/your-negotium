import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { AngularFireDatabase } from "@angular/fire/database";
import { Order } from "../models/order";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  items: Observable<any[]>;
  data: any;
  private db: any;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  getOrder(table: string): Observable<Order[] | Product[]> {
    this.items = this.db.list(table).valueChanges();
    this.items.subscribe(data => {
      this.data = data;
    });
    return this.items;
  }
}
