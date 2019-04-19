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
  dataSource = new FromFirebaseDataSource(this.firebaseService, "local-orders");

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.tabs = [
      {
        title: "Local orders",
        dataSource: this.dataSource,
        labels: ["cost", "id", "ordered", "price", "rating", "time", "tip"], // has to be the same order as in firebase
        displayedColumns: [
          "id",
          "ordered",
          "cost",
          "price",
          "rating",
          "time",
          "tip"
        ] // define which columns are being displayed and the order (names have to match exactly labels)
      }
    ];
  }
}
