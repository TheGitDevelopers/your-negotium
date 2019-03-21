import { DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs/internal/Observable";
// import { OrderService } from "../services/order.service";
import { FirebaseService } from "../services/firebase.service";
import { Order } from "../models/order";
import { Product } from "../models/product";

export class FromFirebaseDataSource extends DataSource<any> {
  constructor(private firebaseService: FirebaseService, private table: string) {
    super();
  }

  connect(): Observable<Order[] | Product[]> {
    return this.firebaseService.getData(this.table);
  }

  disconnect(): void {}
}
