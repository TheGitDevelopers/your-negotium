import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { FromFirebaseDataSource } from "src/app/data-sources/fromFireBase-data-source";

@Component({
  selector: "app-fixed-products",
  templateUrl: "./fixed-products.component.html",
  styleUrls: ["./fixed-products.component.scss"]
})
export class FixedProductsComponent implements OnInit {
  tabs: object[];
  dataSource = new FromFirebaseDataSource(
    this.firebaseService,
    "fixedProducts"
  );

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.tabs = [
      {
        title: "Fixed products",
        dataSource: this.dataSource,
        labels: ["expiryDate", "id", "name", "price", "quantity"], // has to be the same order as in firebase
        displayedColumns: ["id", "name", "quantity", "price", "expiryDate"] // define which columns are being displayed and the order (names have to match exactly labels)
      }
    ];
  }
}
