import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent implements OnInit {

  @Input() paramsDate;
  @Input() changeDate;

  startDate;
  endDate;
  days = [];
  events;
  beforeMonthDays;
  monthDays;
  afterMonthDays;
  weekDays = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];


  constructor() { }

  ngOnInit() {
    // GET with redux
    this.restartView();
  }

  initDate() {
    const now = new Date();
    this.paramsDate = false;
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
  }

  restartDays() {
    this.days = [];

    // TODO new function?
    this.beforeMonthDays = this.startDate.getDay() === 0 ? 6 : this.startDate.getDay() - 1;
    this.monthDays = this.endDate.getDate();
    this.afterMonthDays = this.startDate.getDay() === 0 ? 0 : 7 - this.startDate.getDay();

    const totalDays = this.beforeMonthDays + this.monthDays + this.afterMonthDays;
    for (let i = totalDays; i > 0; i--) {
      this.days.push({ events: [] });
    }
  }

  trimEvents() {
    this.events = this.events
      .filter(({ start: { date: comparedDate } }) => (
        this.getStartOfGrid().getTime() <=
        new Date(comparedDate).getTime() &&
        this.getEndOfGrid().getTime() >=
        new Date(comparedDate).getTime()
      ))
  }

  sortEvents() {
    this.events
      .sort(
        ({ start: { date: compared } }, { start: { date: comparing } }) =>
          new Date(compared).getTime() - new Date(comparing).getTime()
      )
  }

  createDays() {
    let index;
    this.events
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
    this.events = Array(99).fill(undefined).map((item, index) => {
      return { start: { date: new Date(this.startDate.getTime() + 40000000 * index - 480000000) }, summary: 'Event name - ' + index }
    }
    ); // TODO
    this.trimEvents();
    this.sortEvents();
    this.createDays();
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
