import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Product } from "../models/product";
import { AngularFireDatabase } from "@angular/fire/database";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  items: Observable<any[]>;
  products: any;
  private db: any;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  getProduct(): Observable<Product[]> {
    this.items = this.db.list("products").valueChanges();
    this.items.subscribe(products => {
      this.products = products;
    });
    return this.items;
  }
}
