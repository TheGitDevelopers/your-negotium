import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  serviceUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.serviceUrl);
  }
}
