import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  OnChanges
} from "@angular/core";

@Directive({
  selector: "[appCheckMonthDay]"
})
export class CheckMonthDayDirective implements OnChanges {
  @Input() appCheckMonthDay;

  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  ngOnChanges() {
    const {
      currentMonth,
      calendarHeader,
      actualMode,
      week
    } = this.appCheckMonthDay;
    const weekDate = week ? new Date(week).getDate() : null;
    const weekMonth = week
      ? week.toLocaleString("en-us", { month: "short" })
      : null;
    if (
      weekDate === new Date().getDate() &&
      currentMonth === new Date().toLocaleString("en-us", { month: "short" })
    ) {
      this.renderer2.addClass(this.el.nativeElement, "highligted-day");
    } else {
      this.renderer2.removeClass(this.el.nativeElement, "highligted-day");
    }
    if (
      currentMonth !== weekMonth &&
      actualMode === "month" &&
      !calendarHeader
    ) {
      this.renderer2.addClass(
        this.el.nativeElement.parentNode.parentNode,
        "unactive-month"
      );
    } else {
      this.renderer2.removeClass(
        this.el.nativeElement.parentNode.parentNode,
        "unactive-month"
      );
    }
  }
}
