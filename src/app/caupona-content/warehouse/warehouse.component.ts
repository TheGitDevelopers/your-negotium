import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { FromFirebaseDataSource } from "src/app/data-sources/fromFireBase-data-source";

@Component({
  selector: "app-warehouse",
  templateUrl: "./warehouse.component.html",
  styleUrls: ["./warehouse.component.scss"]
})
export class WarehouseComponent implements OnInit {
  tabs: object[];
  constructor(private firebaseService: FirebaseService) {}
  ngOnInit() {
    this.tabs = [
      {
        title: "Fixed product",
        dataSource: new FromFirebaseDataSource(
          this.firebaseService,
          "fixedProducts"
        ),
        labels: ["expiryDate", "id", "name", "price", "quantity"],
        displayedColumns: ["id", "name", "quantity", "price", "expiryDate"]
      },
      {
        title: "Temporary product",
        dataSource: new FromFirebaseDataSource(
          this.firebaseService,
          "temporaryProducts"
        ),
        labels: ["expiryDate", "id", "name", "price", "quantity"],
        displayedColumns: ["id", "name", "quantity", "price", "expiryDate"]
      }
    ];
  }
}
