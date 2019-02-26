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
  displayedColumns = ["id", "name", "quantity", "price", "expiryDate"];

  constructor(private productService: ProductService) {}

  findObjectParam(e, i) {
    const category = Object.keys(e)[i];
    return e[category];
  }

  ngOnInit() {
    this.tabs = [
      {
        title: "Permanent product",
        dataSource: this.dataSource,
        labels: ["expiryDate", "id", "name", "price", "quantity"],
        findObjectParam: this.findObjectParam,
        displayedColumns: this.displayedColumns
      },
      {
        title: "Temporary product",
        dataSource: this.dataSource,
        labels: ["expiryDate", "id", "name", "price", "quantity"],
        findObjectParam: this.findObjectParam,
        displayedColumns: this.displayedColumns
      }
    ];
  }
}
