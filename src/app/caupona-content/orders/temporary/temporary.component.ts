import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { FromFirebaseDataSource } from "src/app/data-sources/fromFireBase-data-source";

@Component({
  selector: "app-temporary",
  templateUrl: "./temporary.component.html",
  styleUrls: ["./temporary.component.scss"]
})
export class TemporaryComponent implements OnInit {
  tabs: object[];
  dataSource = new FromFirebaseDataSource(this.firebaseService, "products");

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.tabs = [
      {
        title: "Get products short",
        dataSource: this.dataSource,
        labels: ["expiryDate", "id", "name", "price", "quantity"],
        displayedColumns: ["id", "name"] // define which columns are being displayed and the order (names have to match exactly labels)
      },
      {
        title: "Products all",
        dataSource: this.dataSource,
        labels: ["expiryDate", "id", "name", "price", "quantity"],
        displayedColumns: ["id", "name", "price", "quantity", "expiryDate"]
      }
    ];
  }
}
