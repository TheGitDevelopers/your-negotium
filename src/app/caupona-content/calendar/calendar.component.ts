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
    private googleAuthService: GoogleAuthService,
    private http: HttpClient
  ) {}
  days;
  daysArr;
  ngOnInit() {
    this.http
      .get("http://localhost:9000/api/token")
      .subscribe(data => console.log(data));
    this.dataSource.connect().subscribe(data => {
      this.days = data;
    });

    this.loadView().then(events => console.log(events));
  }
  loadView() {
    return new Promise(async (resolve, reject) => {
      await this.googleAuthService.initClient();
      const events = await this.googleAuthService.getCalendar();

      // events.result.items.forEach(event => {
      //   let day = new Date(event.start.DateTime).getDate();
      //   this.days = { ...this.days, [day]: { ...this.days.day, event } };
      // });
      resolve(events);
    });
  }
}
