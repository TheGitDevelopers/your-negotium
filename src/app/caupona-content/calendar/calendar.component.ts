import { Component, OnInit } from "@angular/core";
import { GoogleAuthService } from "src/app/services/googleauth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { SettingsPopupService } from "src/app/services/settings-popup.service";
import { FromFirebaseDataSource } from "src/app/data-sources/fromFireBase-data-source";
import { ActivatedRoute, Router } from "@angular/router";
import calendarProperties from "./calendarProperties";
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
    private route: ActivatedRoute,
    private routerNavigate: Router,
    protected settings: SettingsPopupService,
    private http: HttpClient
  ) {}
  sliderValue;
  actualMode;
  paramsDate;
  days;
  convertedDays;
  daysOfWeek = calendarProperties.daysOfWeek;
  convertedDaysOfWeek;
  week = [];
  startDate: Date;
  endDate: Date;
  monthName;
  currentYear = new Date().getFullYear();
  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (
          params.mode === "month" ||
          params.mode === "week" ||
          params.mode === "day"
        ) {
          this.paramsDate =
            params.d && params.m && params.d
              ? new Date(params.y, params.m - 1, params.d)
              : undefined;
          this.actualMode = params.mode;
          // Reset view
          this.convertedDaysOfWeek = this.daysOfWeek;
          this.week = [];
          this.convertedDays = [];
          this.days = [];
          this.modeSwitch();
        } else if (Object.keys(params).length === 0) {
          this.routerNavigate.navigate(["/calendar/week"]);
        } else {
          this.routerNavigate.navigate(["/not-found"]);
        }
      },
      () => {
        this.routerNavigate.navigate(["/not-found"]);
      }
    );
  }

  makeView(days) {
    console.log(this.days);
    days.data
      .sort(
        (firstEvent, secondEvent) =>
          new Date(firstEvent.start.dateTime).getTime() -
          new Date(secondEvent.start.dateTime).getTime()
      )
      .forEach(event => {
        switch (this.actualMode) {
          case "month":
            this.days[new Date(event.start.dateTime).getDate() - 1].events.push(
              event
            );
            break;
          case "week":
            if (new Date(event.start.dateTime).getDay() === 0) {
              this.days[6].events.push(event);
            } else {
              this.days[
                new Date(event.start.dateTime).getDay() - 1
              ].events.push(event);
            }
            break;
          case "day":
            this.days[0].events.push(event);
            break;
        }
      });
    console.log(days);
  }

  modeSwitch() {
    this.createDates();
    this.changeMonthName();
    switch (this.actualMode) {
      case "day":
        this.sliderValue = 0;
        this.setDayDays();
        break;
      case "week":
        this.sliderValue = 1;
        this.setWeekDays();
        break;
      case "month":
        this.sliderValue = 2;
        this.setMonthDays();
        break;
      default:
        this.routerNavigate.navigate(["/not-found"]);
        break;
    }
    this.loadView().then(item => this.makeView(item));
  }

  createDates() {
    const now = new Date();
    switch (this.actualMode) {
      case "month":
        this.startDate = this.paramsDate
          ? new Date(
              this.paramsDate.getFullYear(),
              this.paramsDate.getMonth(),
              1,
              0,
              0,
              0
            )
          : new Date(now.getFullYear(), now.getMonth(), 1);
        this.endDate = new Date(
          this.startDate.getFullYear(),
          this.startDate.getMonth() + 1,
          0,
          23,
          59,
          59,
          999
        );
        break;
      case "week":
        this.startDate = this.paramsDate
          ? new Date(
              this.paramsDate.getFullYear(),
              this.paramsDate.getMonth(),
              this.paramsDate.getDate() -
                this.paramsDate.getDay() +
                (this.paramsDate.getDay() === 0 ? -6 : 1),
              0,
              0,
              0
            )
          : new Date(
              now.getFullYear(),
              now.getMonth(),
              now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1),
              0,
              0,
              0
            );
        this.endDate = new Date(
          this.startDate.getFullYear(),
          this.startDate.getMonth(),
          this.startDate.getDate() + 6,
          23,
          59,
          59,
          999
        );
        break;
      case "day":
        this.startDate = this.paramsDate
          ? new Date(this.paramsDate.setHours(0, 0, 0, 0))
          : new Date(new Date().setHours(0, 0, 0, 0));
        this.endDate = this.paramsDate
          ? new Date(this.paramsDate.setHours(23, 59, 59, 999))
          : new Date(new Date().setHours(23, 59, 59, 999));
        break;
    }
    console.log(this.startDate, this.endDate);
  }

  changeDate(month = 0, day = 0) {
    this.startDate = new Date(
      this.startDate.getFullYear(),
      this.startDate.getMonth() + month,
      this.startDate.getDate() + day
    );
    this.endDate = new Date(
      this.endDate.getFullYear(),
      this.endDate.getMonth() + month,
      this.endDate.getDate() + day
    );
  }

  changeMonthName() {
    this.monthName = this.startDate.toLocaleString("en-us", {
      month: "short"
    });
  }

  pastDays() {
    this.week = [];
    switch (this.actualMode) {
      case "month":
        this.startDate = new Date(
          this.startDate.getFullYear(),
          this.startDate.getMonth() - 1,
          1
        );
        this.endDate = new Date(
          this.endDate.getFullYear(),
          this.endDate.getMonth(),
          0
        );
        this.setMonthDays();
        break;
      case "week":
        this.changeDate(0, -7);
        this.setWeekDays();
        break;
      case "day":
        this.changeDate(0, -1);
        this.setDayDays();
        break;
    }
    this.changeMonthName();
    this.loadView().then(item => this.makeView(item));
  }

  futureDays() {
    this.week = [];
    switch (this.actualMode) {
      case "month":
        this.startDate = new Date(
          this.startDate.getFullYear(),
          this.startDate.getMonth() + 1,
          1
        );

        this.endDate = new Date(
          this.endDate.getFullYear(),
          this.endDate.getMonth() + 2,
          0
        );
        this.setMonthDays();
        break;
      case "week":
        this.changeDate(0, 7);
        this.setWeekDays();
        break;
      case "day":
        this.changeDate(0, 1);
        this.setDayDays();
        break;
    }
    this.changeMonthName();
    this.loadView().then(item => this.makeView(item));
  }

  changeStartDate(event) {
    this.startDate = event.value;
    this.setDayDays();
  }

  setDayDays() {
    this.convertedDaysOfWeek = [
      new Date(this.startDate).toLocaleDateString("en-us", {
        weekday: "short"
      })
    ];
    console.log(this.startDate);
    this.week = [this.startDate];
  }

  setWeekDays() {
    for (
      let i = this.startDate;
      this.endDate >= i;
      i = new Date(i.getTime() + 24 * 60 * 60 * 1000)
    ) {
      this.week.push(i);
    }
  }

  setMonthDays() {
    if (this.startDate.getDay() !== 1) {
      for (
        let i = new Date(
          this.startDate.getFullYear(),
          this.startDate.getMonth(),
          -new Date(this.startDate.getTime() - 24 * 60 * 60 * 1000).getDay() + 1
        );
        this.startDate > i;
        i = new Date(i.getTime() + 24 * 60 * 60 * 1000)
      ) {
        this.week.push(i);
      }
    }
    for (let i = 1; i <= this.endDate.getDate(); i++) {
      this.week.push(
        new Date(this.endDate.getFullYear(), this.endDate.getMonth(), i)
      );
    }
    if (this.endDate.getDay() !== 0) {
      for (let i = 1; i <= 7 - this.endDate.getDay(); i++) {
        this.week.push(
          new Date(this.endDate.getFullYear(), this.endDate.getMonth() + 1, i)
        );
      }
    }
  }

  handleChangeMode() {
    this.modeSwitch();
    switch (this.actualMode) {
      case "day":
        this.routerNavigate.navigate(["/calendar/day"]);
        return "D";
      case "week":
        this.routerNavigate.navigate(["/calendar/week"]);
        return "W";
      case "month":
        this.routerNavigate.navigate(["/calendar/month"]);
        return "M";
      default:
        this.routerNavigate.navigate(["/calendar/week"]);
        return "W";
    }
  }

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

  loadView() {
    return new Promise(async (resolve, reject) => {
      this.days = [];
      switch (this.actualMode) {
        case "month":
          for (let i = new Date(this.endDate).getDate(); i > 0; i--) {
            this.days.push({ events: [] });
          }
          break;
        case "week":
          for (let i = 7; i > 0; i--) {
            this.days.push({ events: [] });
          }
          break;
        case "day":
          this.days.push({ events: [] });
          break;
      }
      await this.googleAuthService.initClient();
      const events = await this.googleAuthService.modifyEvents(
        this.startDate,
        this.endDate
      );
      events.subscribe(event => {
        resolve(event);
      });
    });
  }
}
