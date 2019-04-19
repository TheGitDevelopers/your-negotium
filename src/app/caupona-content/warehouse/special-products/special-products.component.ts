import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { FromFirebaseDataSource } from "src/app/data-sources/fromFireBase-data-source";

@Component({
  selector: "app-special-products",
  templateUrl: "./special-products.component.html",
  styleUrls: ["./special-products.component.scss"]
})
export class SpecialProductsComponent implements OnInit {
  tabs: object[];
  dataSource = new FromFirebaseDataSource(
    this.firebaseService,
    "specialProducts"
  );

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.tabs = [
      {
        title: "Special products",
        dataSource: this.dataSource,
        labels: ["expiryDate", "id", "name", "price", "quantity"],
        displayedColumns: ["id", "name", "quantity", "price", "expiryDate"]
      }
    ];
  }
}
