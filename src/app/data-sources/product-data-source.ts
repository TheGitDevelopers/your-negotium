import { DataSource } from "@angular/cdk/collections";
import { ProductService } from "../services/product.service";
import { Product } from "../models/product";
import { Observable } from "rxjs/internal/Observable";

export class ProductDataSource extends DataSource<any> {
  constructor(private productService: ProductService) {
    super();
  }

  connect(): Observable<Product[]> {
    return this.productService.getProduct();
  }

  disconnect(): void {}
}
