import {
  Component,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter
} from "@angular/core";
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
  convertedDays;
  monthMode = false;
  dayMode = false;
  weekMode = true;
  daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  convertedDaysOfWeek = this.daysOfWeek;
  week = [];
  startDate: any = new Date(
    new Date().getTime() + 24 * 60 * 60 * 1000 * (-new Date().getDay() + 1)
  );
  endDate: any = new Date(
    new Date().getTime() + 24 * 60 * 60 * 1000 * (-new Date().getDay() + 1 + 6)
  );
  monthName = this.startDate.toLocaleString("en-us", { month: "short" });
  currentYear = new Date().getFullYear();
  ngOnInit() {
    // Load view at present
    this.dataSource.connect().subscribe(data => {
      this.days = data;
      this.setWeekDays();
    });

    // This will load all events to view in future
    this.loadView().then(events => console.log(events));
  }

  getDate(ref) {
    return new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * ref);
  }

  setDate(month = 0, day = 0) {
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

  setMonthName() {
    this.monthName = this.startDate.toLocaleString("en-us", {
      month: "short"
    });
  }

  pastDays() {
    if (this.monthMode) {
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
      this.week = [];
      this.setMonthDays();
    }
    if (this.weekMode) {
      this.setDate(0, -7);
      this.setWeekDays();
    }
    if (this.dayMode) {
      this.setDate(0, -1);
      this.setDayDays();
    }
    this.setMonthName();
  }

  futureDays() {
    if (this.monthMode) {
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
      this.week = [];
      this.setMonthDays();
    }
    if (this.weekMode) {
      this.setDate(0, 7);
      this.setWeekDays();
    }
    if (this.dayMode) {
      this.setDate(0, 1);
      this.setDayDays();
    }
    this.setMonthName();
  }

  handleDayMode() {
    this.startDate = new Date();
    this.endDate = new Date();
    this.setMonthName();
    this.setDayDays();
  }

  handleWeekMode() {
    this.startDate = this.getDate(-new Date().getDay() + 1);
    this.endDate = this.getDate(-new Date().getDay() + 1 + 6);
    this.setMonthName();
    this.setWeekDays();
  }

  handleMonthMode() {
    let now = new Date();
    this.startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    this.setMonthName();
    this.setMonthDays();
  }

  setDayDays() {
    this.dayMode = true;
    this.convertedDays = [this.startDate.getDate()];
    this.convertedDaysOfWeek = [
      this.startDate.toLocaleDateString("en-us", {
        weekday: "short"
      })
    ];
  }

  setWeekDays() {
    this.weekMode = true;
    let tempDays = [];
    this.week = [];
    for (
      let i = this.startDate;
      this.endDate >= i;
      i = new Date(i.getTime() + 24 * 60 * 60 * 1000)
    ) {
      tempDays.push({});
      this.week.push(i.getDate());
    }
    tempDays.push(...this.days.slice(0, 8 - new Date().getDay()));
    this.convertedDays = tempDays;
  }

  setMonthDays() {
    this.monthMode = true;
    let tempDays = [];

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
        tempDays.push({});
        this.week.push(i.getDate());
      }
    }
    for (let i = 1; i <= this.endDate.getDate(); i++) {
      tempDays.push({ events: [{ name: "Lorem ipsum" }] });
      this.week.push(
        new Date(this.endDate.getYear(), this.endDate.getMonth(), i).getDate()
      );
    }
    if (this.endDate.getDay() !== 0) {
      for (let i = 1; i <= 7 - this.endDate.getDay(); i++) {
        this.week.push(i);
        tempDays.push({});
      }
    }
    this.convertedDays = tempDays;
  }

  handleChangeMode(event) {
    this.monthMode = this.dayMode = this.weekMode = false;
    this.convertedDaysOfWeek = this.daysOfWeek;
    this.week = [];
    switch (event.value) {
      case 0:
        this.handleDayMode();
        return "D";
      case 1:
        this.handleWeekMode();
        return "W";
      case 2:
        this.handleMonthMode();
        return "M";
      default:
        this.handleWeekMode();
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
      await this.googleAuthService.initClient();
      const events = await this.googleAuthService.modifyEvents();
      events.subscribe(event => resolve(event));
    });
  }
}
