import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit {

  @Input() paramsDate;
  @Input() changeDate;

  startDate;
  endDate;
  days = [];
  events;


  constructor() { }

  ngOnInit() {

    // GET with redux
    this.restartView();
  }

  initDate() {
    this.startDate = this.paramsDate
      ? new Date(this.paramsDate.setHours(0, 0, 0, 0))
      : new Date(new Date().setHours(0, 0, 0, 0));
    this.endDate = this.paramsDate
      ? new Date(this.paramsDate.setHours(23, 59, 59, 999))
      : new Date(new Date().setHours(23, 59, 59, 999));
  }

  restartDays() {
    this.days = [];
    for (let i = 7; i > 0; i--) {
      this.days.push({ events: [] });
    }
  }

  trimEvents() {
    this.events = this.events
      .filter(({ start: { date: comparedDate } }) => (
        new Date(this.startDate).getTime() <=
        new Date(comparedDate).getTime() &&
        new Date(this.endDate).getTime() >=
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

  restartView() {
    this.initDate();
    this.restartDays();
    this.events = Array(19).fill(undefined).map((item, index) => {
      return { start: { date: new Date(this.startDate.getTime() + 5000000 * index) }, summary: 'Event name - ' + index }
    }
    ); // TODO
    this.trimEvents();
    this.sortEvents();
  }

  getHourEvents(date) {
    return this.events.filter(event => (event.start.date.getHours() === date))
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
