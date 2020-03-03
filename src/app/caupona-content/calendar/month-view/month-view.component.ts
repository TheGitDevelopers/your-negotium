import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';
import { CHANGE_CALENDAR_START_DATE, CHANGE_CALENDAR_END_DATE } from 'src/app/actions/calendar.actions';
import calendarProperties from '../calendarProperties'


@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent implements OnInit, OnChanges {

  @Input() paramsDate;
  @Input() changeDate;
  @Input() events;

  propsDate;
  startDate;
  endDate;
  days = [];
  beforeMonthDays;
  monthDays;
  afterMonthDays;
  daysOfWeek = calendarProperties.daysOfWeek;
  mode;


  constructor(private store: Store<{}>,
    private routerNavigate: Router, ) { }

  ngOnInit() {
    this.initView();
  }

  ngOnChanges() {
    this.initView();
  }

  initView() {
    const now = new Date();
    const { y, m, d } = this.paramsDate
    const actualDate = y && m && d ? new Date(y, m - 1, d) : { y: null, m: null, d: null };

    this.startDate = actualDate instanceof Date
      ? new Date(
        actualDate.getFullYear(),
        actualDate.getMonth(),
        1,
        0,
        0,
        0
      )
      : new Date(now.getFullYear(), now.getMonth(), 1);
    this.restartView();
  }

  initDate() {
    this.endDate = new Date(
      this.startDate.getFullYear(),
      this.startDate.getMonth() + 1,
      0,
      23,
      59,
      59,
      999
    );
    this.store.dispatch(CHANGE_CALENDAR_START_DATE({ startDate: this.startDate }))
    this.store.dispatch(CHANGE_CALENDAR_END_DATE({ endDate: this.endDate }))
  }

  restartDays() {
    this.days = [];

    this.beforeMonthDays = this.startDate.getDay() === 0 ? 6 : this.startDate.getDay() - 1;
    this.monthDays = this.endDate.getDate();
    this.afterMonthDays = this.endDate.getDay() === 0 ? 0 : 7 - this.endDate.getDay();

    const totalDays = this.beforeMonthDays + this.monthDays + this.afterMonthDays;
    for (let i = totalDays; i > 0; i--) {
      this.days.push({ events: [] });
    }
  }

  trimEvents() {
    this.events = this.events && this.events
      .filter(({ start: { date: comparedDate } }) => (
        this.getStartOfGrid().getTime() <=
        new Date(comparedDate).getTime() &&
        this.getEndOfGrid().getTime() >=
        new Date(comparedDate).getTime()
      ))
  }

  sortEvents() {
    this.events && this.events
      .sort(
        ({ start: { date: compared } }, { start: { date: comparing } }) =>
          new Date(compared).getTime() - new Date(comparing).getTime()
      )
  }

  createDays() {
    let index;
    this.events && this.events
      .forEach(event => {
        if (
          this.getStartOfGrid().getTime() <=
          new Date(event.start.date).getTime() &&
          this.getEndOfGrid().getTime() >=
          new Date(event.start.date).getTime()
        )
          if (this.startDate.getTime() > new Date(event.start.date).getTime()) {
            const startOfWeek = this.getStartOfWeek(event.start.date);
            index = new Date(event.start.date).getDate() - startOfWeek;
          }
        if (this.startDate.getTime() <= new Date(event.start.date).getTime() && this.endDate.getTime() >= new Date(event.start.date).getTime()) {
          index = this.beforeMonthDays + new Date(event.start.date).getDate() - 1;
        }
        if (this.endDate.getTime() < new Date(event.start.date).getTime()) {
          index = this.beforeMonthDays + this.monthDays + new Date(event.start.date).getDate() - 1;
        }
        this.days[index].events.push(
          event
        );
      });
  }

  restartView() {
    this.initDate();
    this.restartDays();
    // this.events = Array(99).fill(undefined).map((item, index) => {
    //   return { start: { date: new Date(this.startDate.getTime() + 40000000 * index - 480000000) }, summary: 'Event name - ' + index }
    // }
    // ); // TODO
    this.trimEvents();
    this.sortEvents();
    this.createDays();
  }

  pastDays() {
    let tempDate = new Date(this.startDate);
    let newDate = new Date(tempDate.setMonth(tempDate.getMonth() - 1))
    this.startDate = newDate;
    this.routerNavigate.navigate(["/calendar/month",
      newDate.getFullYear(),
      newDate.getMonth() + 1,
      1]).then(() => this.restartView());
  }

  futureDays() {
    let tempDate = new Date(this.startDate);
    let newDate = new Date(tempDate.setMonth(tempDate.getMonth() + 1))
    this.startDate = newDate;
    this.routerNavigate.navigate(["/calendar/month",
      newDate.getFullYear(),
      newDate.getMonth() + 1,
      1]).then(() => this.restartView());
  }

  getTitle(events) {
    return events.length && events[0].summary ? events[0].summary : '';
  }

  addDay(addDays) {
    const tempDate = new Date(this.startDate);
    let subtractDate = this.beforeMonthDays;
    return new Date(tempDate.setDate(tempDate.getDate() - subtractDate + addDays));
  }

  getStartOfWeek(date) {
    return date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1)
  }

  getStartOfGrid() {
    return this.addDay(0)
  }

  getEndOfGrid() {
    const totalDays = this.beforeMonthDays + this.monthDays + this.afterMonthDays;
    return this.addDay(totalDays)
  }

  checkOutOfMonth(date) {
    return this.startDate > this.addDay(date) || this.endDate < this.addDay(date)
  }
}
