import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { FromFirebaseDataSource } from "src/app/data-sources/fromFireBase-data-source";

@Component({
  selector: "app-temporary-products",
  templateUrl: "./temporary-products.component.html",
  styleUrls: ["./temporary-products.component.scss"]
})
export class TemporaryProductsComponent implements OnInit {
  tabs: object[];
  dataSource = new FromFirebaseDataSource(
    this.firebaseService,
    "temporaryProducts"
  );

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.tabs = [
      {
        title: "Temporary products",
        dataSource: this.dataSource,
        labels: ["expiryDate", "id", "name", "price", "quantity"], // has to be the same order as in firebase
        displayedColumns: ["expiryDate", "id", "name", "price", "quantity"] // define which columns are being displayed and the order (names have to match exactly labels)
      }
    ];
  }
}
