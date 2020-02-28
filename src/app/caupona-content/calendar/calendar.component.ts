import { Component, OnInit, OnDestroy } from "@angular/core";
import { GoogleAuthService } from "src/app/services/googleauth.service";
import { SettingsPopupService } from "src/app/services/settings-popup.service";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

import { Store, select } from '@ngrx/store';
import { CHANGE_CALENDAR_MODE, FETCH_CALENDAR } from 'src/app/actions/calendar.actions';
import { CalendarState } from 'src/app/reducers/calendar.reducer';
import { distinctUntilChanged } from 'rxjs/operators';
import EventInf from "src/app/interfaces/Event";

interface EventObject {
  data: Array<EventInf>
}

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"]
})
export class CalendarComponent implements OnInit, OnDestroy {
  constructor(
    private googleAuthService: GoogleAuthService,
    private route: ActivatedRoute,
    private routerNavigate: Router,
    protected settings: SettingsPopupService,
    private http: HttpClient,
    private store: Store<{ calendarReducer: CalendarState }>
  ) { }
  mode;
  paramsDate;
  googleEvents = [];
  monthName;
  calendar$;
  startDate;
  endDate;
  events;
  ngOnInit() {
    this.mode = this.route.snapshot.url[1].path;
    this.store.dispatch(CHANGE_CALENDAR_MODE({ mode: this.mode }))
    this.handleReceiveParamsDate();
    this.handleCalendarReducer();
  }

  ngOnDestroy() {
    this.calendar$.unsubscribe()
  }

  handleReceiveParamsDate() {
    this.route.params.subscribe((params) => {
      this.paramsDate =
        parseInt(params.y) && parseInt(params.m) && parseInt(params.d)
          ? {
            y: parseInt(params.y),
            m: parseInt(params.m),
            d: parseInt(params.d)
          }
          : { y: null, m: null, d: null };
    }
    );
  }

  handleCalendarReducer() {
    this.calendar$ = this.store.pipe(
      select('calendarReducer'),
      distinctUntilChanged())
      .subscribe(({ mode, startDate, endDate, events }) => {
        this.mode = mode;
        if ((new Date(this.startDate).getTime() !== new Date(startDate).getTime()
          || new Date(this.endDate).getTime() !== new Date(endDate).getTime()) && (startDate && endDate)) this.combineEvents(startDate, endDate);
        this.events = events;
        this.startDate = startDate;
        this.endDate = endDate;
      })
  }

  async combineEvents(startDate, endDate) {
    await this.receiveGoogleEvents();
    this.receiveNegotiumEvents(startDate, endDate).subscribe((events: EventObject) => {
      this.store.dispatch(FETCH_CALENDAR({ events: [...events.data, ...this.googleEvents] }))
    }
    );
  }

  async receiveGoogleEvents() {
    if (JSON.parse(sessionStorage.getItem("turnGoogleIntegration"))) {
      await this.googleAuthService.initClient();
      if (this.googleAuthService.checkLogin()) {
        const events = await this.googleAuthService.fetchEvents();
        this.googleEvents = events.result.items;
        this.googleEvents.map(item => {
          if (item.start.date && item.end.date) return item;
          if (item.start.dateTime) item.start = { date: item.start.dateTime };
          if (item.end.dateTime) item.end = { date: item.end.dateTime };
          return item;
        });
      }
    }
  }

  receiveNegotiumEvents(startDate, endDate) {
    return this.http.post(`${environment.calendarAPIUrl}/events`, {
      event: {
        dateFrom: startDate,
        dateTo: endDate
      }
    });
  }
}
