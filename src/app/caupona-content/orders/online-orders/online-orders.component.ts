import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { FromFirebaseDataSource } from "src/app/data-sources/fromFireBase-data-source";

@Component({
  selector: "app-online-orders",
  templateUrl: "./online-orders.component.html",
  styleUrls: ["./online-orders.component.scss"]
})
export class OnlineOrdersComponent implements OnInit {
  tabs: object[];
  dataSource = new FromFirebaseDataSource(
    this.firebaseService,
    "online-orders"
  );

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.tabs = [
      {
        title: "Online orders",
        dataSource: this.dataSource,
        labels: [
          "cost",
          "from",
          "id",
          "ordered",
          "price",
          "rating",
          "time",
          "tip"
        ], //labels for order property (have to be the same order like in firebase)
        displayedColumns: [
          "id",
          "ordered",
          "from",
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
