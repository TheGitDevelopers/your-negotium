import { Component, OnInit } from "@angular/core";
import { ProductDataSource } from "../../../data-sources/product-data-source";
import { ProductService } from "../../../services/product.service";

@Component({
  selector: "app-temporary",
  templateUrl: "./temporary.component.html",
  styleUrls: ["./temporary.component.scss"]
})
export class TemporaryComponent implements OnInit {
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
        labels: ["expiryDate", "id", "name", "quantity", "price"],
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
