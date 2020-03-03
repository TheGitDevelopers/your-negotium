import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { CHANGE_CALENDAR_START_DATE, CHANGE_CALENDAR_END_DATE } from 'src/app/actions/calendar.actions';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit, OnChanges {

  @Input() paramsDate;
  @Input() changeDate;
  @Input() events;

  startDate;
  endDate;
  days = [];
  mode;


  constructor(private store: Store<{}>) { }

  ngOnInit() {
    this.initView();
  }

  ngOnChanges() {
    this.initView();
  }

  initView() {
    const { y, m, d } = this.paramsDate
    const actualDate = y && m && d ? new Date(y, m - 1, d) : { y: null, m: null, d: null };
    this.startDate = actualDate instanceof Date
      ? new Date(actualDate.setHours(0, 0, 0, 0))
      : new Date(new Date().setHours(0, 0, 0, 0));
    this.restartView();
  }


  initDate() {
    const tempDate = new Date(this.startDate);
    this.endDate = this.startDate
      ? new Date(tempDate.setHours(23, 59, 59, 999))
      : new Date(new Date().setHours(23, 59, 59, 999));
    this.store.dispatch(CHANGE_CALENDAR_START_DATE({ startDate: this.startDate }))
    this.store.dispatch(CHANGE_CALENDAR_END_DATE({ endDate: this.endDate }))
  }

  restartDays() {
    this.days = [];
    for (let i = 7; i > 0; i--) {
      this.days.push({ events: [] });
    }
  }

  trimEvents() {
    this.events = this.events && this.events
      .filter(({ start: { date: comparedDate } }) => (new Date(this.startDate).getTime() <=
        new Date(comparedDate).getTime() &&
        new Date(this.endDate).getTime() >=
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

  restartView() {
    this.initDate();
    this.restartDays();
    // this.events = Array(19).fill(undefined).map((item, index) => {
    //   return { start: { date: new Date(this.startDate.getTime() + 5000000 * index) }, summary: 'Event name - ' + index }
    // }
    // ); // TODO
    this.trimEvents();
    this.sortEvents();
  }

  getHourEvents(date) {
    return this.events && this.events.filter(event => (event && new Date(event.start.date).getHours() === date))
  }

  checkCurrentDay() {
    return new Date().getDate() === this.startDate.getDate()
      && new Date().getMonth() === this.startDate.getMonth()
      && new Date().getFullYear() === this.startDate.getFullYear()
  }

  checkOutdated(date) {
    return new Date() > date
  }

  checkIncoming(date) {
    return new Date() <= date
  }

  getHour(hour) {
    return new Date(new Date().setHours(hour));
  }

  createArray(items) {
    return Array(items)
  }
}
