import { Component, OnInit, AfterViewInit } from "@angular/core";
import { GoogleAuthService } from "src/app/services/googleauth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { FromFirebaseDataSource } from "src/app/data-sources/fromFireBase-data-source";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"]
})
export class CalendarComponent implements OnInit {
  dataSource = new FromFirebaseDataSource(this.firebaseService, "calendar");
  constructor(
    private firebaseService: FirebaseService,
    private googleAuthService: GoogleAuthService
  ) {}
  days;
  ngOnInit() {
    // Load view at present
    this.dataSource.connect().subscribe(data => {
      this.days = data;
    });

    // This will load all events to view in future
    this.loadView().then(events => console.log(events));
  }

  loadView() {
    return new Promise(async (resolve, reject) => {
      await this.googleAuthService.initClient();
      const events = await this.googleAuthService.modifyEvents();
      events.subscribe(event => resolve(event), err => reject(err));
    });
  }
}
