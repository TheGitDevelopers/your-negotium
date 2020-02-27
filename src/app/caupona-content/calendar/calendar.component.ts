import { Component, OnInit } from "@angular/core";
import { GoogleAuthService } from "src/app/services/googleauth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { SettingsPopupService } from "src/app/services/settings-popup.service";
import { FromFirebaseDataSource } from "src/app/data-sources/fromFireBase-data-source";
import { ActivatedRoute, Router } from "@angular/router";
import calendarProperties from "./calendarProperties";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { tap } from 'rxjs/operators';

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
    private route: ActivatedRoute,
    private routerNavigate: Router,
    protected settings: SettingsPopupService,
    private http: HttpClient
  ) { }
  mode;
  paramsDate;
  googleEvents = [];
  tempEvents = [];
  monthName;
  ngOnInit() {
    //   this.route.params.subscribe(
    //     params => {
    //       this.mode = this.route.snapshot.url[1].path;
    //       this.paramsDate =
    //         params.d && params.m && params.d
    //           ? new Date(params.y, params.m - 1, params.d)
    //           : undefined;
    //       // if (
    //         // params.mode === "month" ||
    //         // params.mode === "week" ||
    //         // params.mode === "day"
    //       // ) {
    //         // this.paramsDate =
    //         //   params.d && params.m && params.d
    //         //     ? new Date(params.y, params.m - 1, params.d)
    //         //     : undefined;
    //         // Init view
    //         // this.convertedDaysOfWeek = this.daysOfWeek;
    //         // this.week = [];
    //         // this.convertedDays = [];
    //         // this.days = [];
    //         // this.modeSwitch();
    //       // } else if (Object.keys(params).length === 0) {
    //       //   this.routerNavigate.navigate(["/calendar/week"]);
    //       // } else {
    //       //   this.routerNavigate.navigate(["/not-found"]);
    //       // }
    //     }
    //   );
    // this.events = [{}]
    //   this.setUpLoad();
  }

  // async setUpLoad() {
  //   if (JSON.parse(sessionStorage.getItem("turnGoogleIntegration"))) {
  //     await this.googleAuthService.initClient();
  //     if (this.googleAuthService.checkLogin()) {
  //       const events = await this.googleAuthService.fetchEvents();
  //       this.googleEvents = events.result.items;
  //       this.googleEvents.map(item => {
  //         if (item.start.date && item.end.date) return item;
  //         if (item.start.dateTime) item.start = { date: item.start.dateTime };
  //         if (item.end.dateTime) item.end = { date: item.end.dateTime };
  //         return item;
  //       });
  //     }
  //   }
  //   this.loadView().pipe(tap(ev => {
  //     console.log(ev)
  //     /* NGRX add to store */
  //   }
  //   ));
  // }

  // makeView(days) {
  //   this.events.push(...days.data, ...this.googleEvents);
  //   if (this.tempEvents.length)
  //     switch (this.actualMode) {
  //       case "month":
  //         this.tempEvents
  //           .sort(
  //             ({ start: { date: compared } }, { start: { date: comparing } }) =>
  //               new Date(compared).getTime() - new Date(comparing).getTime()
  //           )
  //           .forEach(event => {
  //             if (
  //               new Date(this.startDate).getTime() <=
  //               new Date(event.start.date).getTime() &&
  //               new Date(this.endDate).getTime() >=
  //               new Date(event.start.date).getTime()
  //             )
  //               this.days[new Date(event.start.date).getDate() - 1].events.push(
  //                 event
  //               );
  //           });
  //         break;
  //       case "week":
  //         this.tempEvents
  //           .sort(
  //             ({ start: { date: compared } }, { start: { date: comparing } }) =>
  //               new Date(compared).getTime() - new Date(comparing).getTime()
  //           )
  //           .forEach(event => {
  //             if (
  //               new Date(this.startDate).getTime() <=
  //               new Date(event.start.date).getTime() &&
  //               new Date(this.endDate).getTime() >=
  //               new Date(event.start.date).getTime()
  //             )
  //               if (new Date(event.start.date).getDay() === 0) {
  //                 this.days[6].events.push(event);
  //               } else {
  //                 this.days[
  //                   new Date(event.start.date).getDay() - 1
  //                 ].events.push(event);
  //               }
  //           });
  //         break;
  //       case "day":
  //         this.tempEvents
  //           .sort(
  //             ({ start: { date: compared } }, { start: { date: comparing } }) =>
  //               new Date(compared).getTime() - new Date(comparing).getTime()
  //           )
  //           .forEach(event => {
  //             if (
  //               new Date(this.startDate).getTime() <=
  //               new Date(event.start.date).getTime() &&
  //               new Date(this.endDate).getTime() >=
  //               new Date(event.start.date).getTime()
  //             )
  //               this.days[0].events.push(event);
  //           });
  //         break;
  //     }
  // }

  // modeSwitch() {
  //   this.createDates();
  //   switch (this.actualMode) {
  //     case "day":
  //       this.setDayDays();
  //       break;
  //     case "week":
  //       this.setWeekDays();
  //       break;
  //     case "month":
  //       this.setMonthDays();
  //       break;
  //     default:
  //       this.routerNavigate.navigate(["/not-found"]);
  //       break;
  //   }
  //   this.setUpLoad();
  // }

  // createDates() {
  //   const now = new Date();
  //   switch (this.actualMode) {
  //     case "month":
  //       this.startDate = this.paramsDate
  //         ? new Date(
  //           this.paramsDate.getFullYear(),
  //           this.paramsDate.getMonth(),
  //           1,
  //           0,
  //           0,
  //           0
  //         )
  //         : new Date(now.getFullYear(), now.getMonth(), 1);
  //       this.endDate = new Date(
  //         this.startDate.getFullYear(),
  //         this.startDate.getMonth() + 1,
  //         0,
  //         23,
  //         59,
  //         59,
  //         999
  //       );
  //       break;
  //     // case "week":
  //     //   this.startDate = this.paramsDate
  //     //     ? new Date(
  //     //       this.paramsDate.getFullYear(),
  //     //       this.paramsDate.getMonth(),
  //     //       this.paramsDate.getDate() -
  //     //       this.paramsDate.getDay() +
  //     //       (this.paramsDate.getDay() === 0 ? -6 : 1),
  //     //       0,
  //     //       0,
  //     //       0
  //     //     )
  //     //     : new Date(
  //     //       now.getFullYear(),
  //     //       now.getMonth(),
  //     //       now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1),
  //     //       0,
  //     //       0,
  //     //       0
  //     //     );
  //     //   this.endDate = new Date(
  //     //     this.startDate.getFullYear(),
  //     //     this.startDate.getMonth(),
  //     //     this.startDate.getDate() + 6,
  //     //     23,
  //     //     59,
  //     //     59,
  //     //     999
  //     //   );
  //     //   break;
  //     case "day":
  //       this.startDate = this.paramsDate
  //         ? new Date(this.paramsDate.setHours(0, 0, 0, 0))
  //         : new Date(new Date().setHours(0, 0, 0, 0));
  //       this.endDate = this.paramsDate
  //         ? new Date(this.paramsDate.setHours(23, 59, 59, 999))
  //         : new Date(new Date().setHours(23, 59, 59, 999));
  //       break;
  //   }
  // }

  changeDate(startDate, endDate, month = 0, day = 0) {
    startDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth() + month,
      startDate.getDate() + day
    );
    endDate = new Date(
      endDate.getFullYear(),
      endDate.getMonth() + month,
      endDate.getDate() + day,
      23,
      59,
      59,
      999
    );
    return { startDate, endDate }
  }

  changeMonthName(date) {
    const monthName = date.toLocaleString("en-us", {
      month: "short"
    });
    return monthName
  }

  // pastDays() {
  //   this.week = [];
  //   switch (this.actualMode) {
  //     case "month":
  //       this.startDate = new Date(
  //         this.startDate.getFullYear(),
  //         this.startDate.getMonth() - 1,
  //         1
  //       );
  //       this.endDate = new Date(
  //         this.endDate.getFullYear(),
  //         this.endDate.getMonth(),
  //         0
  //       );
  //       this.setMonthDays();
  //       break;
  //     // case "week":
  //     //   this.changeDate(0, -7);
  //     //   this.setWeekDays();
  //     //   break;
  //     case "day":
  //       this.changeDate(0, -1);
  //       this.setDayDays();
  //       break;
  //   }
  //   this.setUpLoad();
  // }

  // futureDays() {
  //   this.week = [];
  //   switch (this.actualMode) {
  //     case "month":
  //       this.startDate = new Date(
  //         this.startDate.getFullYear(),
  //         this.startDate.getMonth() + 1,
  //         1
  //       );

  //       this.endDate = new Date(
  //         this.endDate.getFullYear(),
  //         this.endDate.getMonth() + 2,
  //         0
  //       );
  //       this.setMonthDays();
  //       break;
  //     // case "week":
  //     //   this.changeDate(0, 7);
  //     //   this.setWeekDays();
  //     //   break;
  //     case "day":
  //       this.changeDate(0, 1);
  //       this.setDayDays();
  //       break;
  //   }
  //   this.setUpLoad();
  // }

  // changeStartDate(event) {
  //   const eventDate = new Date(event.target.value);
  //   this.routerNavigate.navigate([
  //     "calendar/day",
  //     eventDate.getFullYear(),
  //     eventDate.getMonth() + 1,
  //     eventDate.getDate()
  //   ]);
  //   this.startDate = eventDate;
  //   this.setUpLoad();
  // }

  // setDayDays() {
  //   this.convertedDaysOfWeek = [
  //     new Date(this.startDate).toLocaleDateString("en-us", {
  //       weekday: "short"
  //     })
  //   ];
  //   this.week = [this.startDate];
  // }

  // setWeekDays() {
  //   for (
  //     let i = this.startDate;
  //     this.endDate >= i;
  //     i = new Date(i.getTime() + 24 * 60 * 60 * 1000)
  //   ) {
  //     this.week.push(i);
  //   }
  // }

  // setMonthDays() {
  //   if (this.startDate.getDay() !== 1) {
  //     for (
  //       let i = new Date(
  //         this.startDate.getFullYear(),
  //         this.startDate.getMonth(),
  //         -new Date(this.startDate.getTime() - 24 * 60 * 60 * 1000).getDay() + 1
  //       );
  //       this.startDate > i;
  //       i = new Date(i.getTime() + 24 * 60 * 60 * 1000)
  //     ) {
  //       this.week.push(i);
  //     }
  //   }
  //   for (let i = 1; i <= this.endDate.getDate(); i++) {
  //     this.week.push(
  //       new Date(this.endDate.getFullYear(), this.endDate.getMonth(), i)
  //     );
  //   }
  //   if (this.endDate.getDay() !== 0) {
  //     for (let i = 1; i <= 7 - this.endDate.getDay(); i++) {
  //       this.week.push(
  //         new Date(this.endDate.getFullYear(), this.endDate.getMonth() + 1, i)
  //       );
  //     }
  //   }
  // }

  // handleChangeMode(event) {
  //   this.actualMode = event;
  //   this.modeSwitch();
  //   switch (this.actualMode) {
  //     case "day":
  //       this.routerNavigate.navigate(["/calendar/day"]);
  //       return "D";
  //     case "week":
  //       this.routerNavigate.navigate(["/calendar/week"]);
  //       return "W";
  //     case "month":
  //       this.routerNavigate.navigate(["/calendar/month"]);
  //       return "M";
  //     default:
  //       this.routerNavigate.navigate(["/calendar/week"]);
  //       return "W";
  //   }
  // }

  formatLabel(value) {
    switch (value) {
      case 0:
        return "D";
      case 1:
        return "W";
      case 2:
        return "M";
      default:
        return "W";
    }
  }

  // restartView() {
  //   this.changeMonthName();
  //   this.days = [];
  //   this.tempEvents = [];
  //   switch (this.actualMode) {
  //     case "month":
  //       for (let i = new Date(this.endDate).getDate(); i > 0; i--) {
  //         this.days.push({ events: [] });
  //       }
  //       break;
  //     case "week":
  //       for (let i = 7; i > 0; i--) {
  //         this.days.push({ events: [] });
  //       }
  //       break;
  //     case "day":
  //       this.days.push({ events: [] });
  //       break;
  //   }
  // }

  // loadView() {
  //   return this.http.post(`${environment.calendarAPIUrl}/events`, {
  //     event: {
  //       dateFrom: this.startDate,
  //       dateTo: this.endDate
  //     }
  //   });
  // }
}
