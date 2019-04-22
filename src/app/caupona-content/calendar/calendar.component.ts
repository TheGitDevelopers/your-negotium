import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { FromFirebaseDataSource } from "src/app/data-sources/fromFireBase-data-source";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"]
})
export class CalendarComponent implements OnInit {
  dataSource = new FromFirebaseDataSource(this.firebaseService, "calendar");
  constructor(private firebaseService: FirebaseService) {}
  days;
  ngOnInit() {
    this.dataSource.connect().subscribe(data => {
      this.days = data;
    });
  }
}
