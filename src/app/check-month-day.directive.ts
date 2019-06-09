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
    const { currentMonth } = this.appCheckMonthDay;
    let { week } = this.appCheckMonthDay;
    console.log(week);
    week = week ? week.getDate() : null;
    console.log(week);
    console.log(new Date().getDate());
    if (
      week === new Date().getDate() &&
      currentMonth === new Date().toLocaleString("en-us", { month: "short" })
    ) {
      this.renderer2.addClass(this.el.nativeElement, "highligted-day");
    } else {
      this.renderer2.removeClass(this.el.nativeElement, "highligted-day");
    }
    // console.log(currentMonth);
    // console.log(week);
    // console.log(week.toLocaleString("en-us", { month: "short" }));
    // if (currentMonth !== week.toLocaleString("en-us", { month: "short" })) {
    //   this.renderer2.addClass(this.el.nativeElement, "unactive-month");
    // } else {
    //   this.renderer2.removeClass(this.el.nativeElement, "unactive-month");
    // }
  }
}
