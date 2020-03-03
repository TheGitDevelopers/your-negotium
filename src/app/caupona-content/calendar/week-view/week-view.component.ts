import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { CHANGE_CALENDAR_START_DATE, CHANGE_CALENDAR_END_DATE } from 'src/app/actions/calendar.actions';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnInit, OnChanges {

  @Input() paramsDate;
  @Input() changeDate;
  @Input() mode;
  @Input() events;

  startDate;
  endDate;
  days = [];


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
    const now = new Date();
    this.startDate = actualDate instanceof Date
      ? new Date(
        actualDate.getFullYear(),
        actualDate.getMonth(),
        actualDate.getDate() -
        actualDate.getDay() +
        (actualDate.getDay() === 0 ? -6 : 1),
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
    this.restartView();
  }

  initDate() {
    this.endDate = new Date(
      this.startDate.getFullYear(),
      this.startDate.getMonth(),
      this.startDate.getDate() + 6,
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
    for (let i = 7; i > 0; i--) {
      this.days.push({ events: [] });
    }
  }

  trimEvents() {
    this.events = this.events && this.events
      .filter(({ start: { date: comparedDate } }) => {
        return new Date(this.startDate).getTime() <=
          new Date(comparedDate).getTime() &&
          new Date(this.endDate).getTime() >=
          new Date(comparedDate).getTime()
      })
  }

  sortEvents() {
    this.events && this.events
      .sort(
        ({ start: { date: compared } }, { start: { date: comparing } }) =>
          new Date(compared).getTime() - new Date(comparing).getTime()
      )
  }

  createDays() {
    this.events && this.events
      .forEach(event => {
        if (
          new Date(this.startDate).getTime() <=
          new Date(event.start.date).getTime() &&
          new Date(this.endDate).getTime() >=
          new Date(event.start.date).getTime()
        )
          if (new Date(event.start.date).getDay() === 0) {
            this.days[6].events.push(event);
          } else {
            this.days[
              new Date(event.start.date).getDay() - 1
            ].events.push(event);
          }
      });
  }

  restartView() {
    this.initDate();
    this.restartDays();
    // this.events = Array(19).fill(undefined).map((item, index) => {
    //   return { start: { date: new Date(this.startDate.getTime() + 40000000 * index) }, summary: 'Event name - ' + index }
    // }
    // ); // TODO
    this.trimEvents();
    this.sortEvents();
    this.createDays();
  }

  addDay(addDays) {
    let tempDate = new Date(this.startDate);
    return new Date(tempDate.setDate(tempDate.getDate() + addDays));
  }

  isHighLight(date) {
    const now = new Date();
    return this.addDay(date).setHours(0, 0, 0, 0) === now.setHours(0, 0, 0, 0);
  }

  checkOutdated(date) {
    return new Date() > date
  }

  checkIncoming(date) {
    return new Date() <= date
  }

  createArray(items) {
    return Array(items)
  }
}
