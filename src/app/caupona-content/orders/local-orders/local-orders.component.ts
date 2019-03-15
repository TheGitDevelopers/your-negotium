import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { FromFirebaseDataSource } from "src/app/data-sources/fromFireBase-data-source";

@Component({
  selector: "app-local-orders",
  templateUrl: "./local-orders.component.html",
  styleUrls: ["./local-orders.component.scss"]
})
export class LocalOrdersComponent implements OnInit {
  tabs: object[];
  dataSource = new FromFirebaseDataSource(this.firebaseService, "orders");

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.tabs = [
      {
        title: "Just orders",
        dataSource: this.dataSource,
        labels: ["id", "name", "price"],
        displayedColumns: ["id", "name"] // define which columns are being displayed and the order (names have to match exactly labels)
      },
      {
        title: "Just orders 2",
        dataSource: this.dataSource,
        labels: ["id", "name", "price"],
        displayedColumns: ["name", "id", "price"]
      }
    ];
  }
}
