import { Component, Output, EventEmitter, OnInit, Input } from "@angular/core";
import { HideList } from "src/app/animations/transform";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from '@ngrx/store';
import { CHANGE_CALENDAR_MODE } from 'src/app/actions/calendar.actions';

@Component({
  selector: "app-dropdown-menu",
  templateUrl: "./dropdown-menu.component.html",
  styleUrls: ["./dropdown-menu.component.scss"],
  animations: [HideList]
})
export class DropdownMenuComponent implements OnInit {
  isSelectBoxOpened: Boolean;
  mode = 'week';
  calendar;
  paramsDate;

  constructor(
    private route: ActivatedRoute,
    private routerNavigate: Router,
    private store: Store<{}>) { }

  ngOnInit() {
    this.mode = this.route.snapshot.url[1].path;
    this.handleReceiveParamsDate();
  }

  handleChangeMode() {
    const { y, m, d } = this.paramsDate;
    switch (this.mode) {
      case "day":
        if (y && m && d) this.routerNavigate.navigate(["/calendar/day/", y, m, d]);
        else this.routerNavigate.navigate(["/calendar/day/"])
        return "D";
      case "week":
        if (y && m && d) this.routerNavigate.navigate(["/calendar/week", y, m, d]);
        else this.routerNavigate.navigate(["/calendar/week/"])
        return "W";
      case "month":
        if (y && m && d) this.routerNavigate.navigate(["/calendar/month", y, m, d]);
        else this.routerNavigate.navigate(["/calendar/month/"])
        return "M";
      default:
        if (y && m && d) this.routerNavigate.navigate(["/calendar/week", y, m, d]);
        else this.routerNavigate.navigate(["/calendar/week/"])
        return "W";
    }
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

  toggleSelectBox() {
    this.isSelectBoxOpened = !this.isSelectBoxOpened;
  }

  get stateStatus() {
    return this.isSelectBoxOpened ? "show" : "hide";
  }
}
