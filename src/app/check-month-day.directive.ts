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
    if (
      this.appCheckMonthDay.week === new Date().getDate() &&
      this.appCheckMonthDay.currentMonth ===
        new Date().toLocaleString("en-us", { month: "short" })
    ) {
      this.renderer2.addClass(this.el.nativeElement, "highligted-day");
    } else {
      this.renderer2.removeClass(this.el.nativeElement, "highligted-day");
    }
  }
}
