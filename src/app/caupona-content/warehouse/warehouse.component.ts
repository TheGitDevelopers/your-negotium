import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { ProductDataSource } from "../../data-sources/product-data-source";

@Component({
  selector: "app-warehouse",
  templateUrl: "./warehouse.component.html",
  styleUrls: ["./warehouse.component.scss"]
})
export class WarehouseComponent implements OnInit {
  tabs: object[];
  dataSource = new ProductDataSource(this.productService);
  displayedColumns = ["title", "id"];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.tabs = [
      {
        title: "Permanent product",
        content: "content for tab I goes here"
      },
      {
        title: "Temporary product",
        content: "content for tab II goes here"
      }
    ];
  }
}
