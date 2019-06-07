import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[appEventsLength]"
})
export class EventsLengthDirective {
  @Input() appEventsLength;
  constructor(private el: ElementRef, private renderer2: Renderer2) {}
  ngOnChanges() {
    const { eventIndex, monthMode } = this.appEventsLength;
    let nativeEl = this.el.nativeElement;
    if (!monthMode) {
      this.renderer2.removeClass(nativeEl, "hidden-event");
    }
    if (eventIndex >= 1 && monthMode) {
      this.renderer2.addClass(nativeEl, "hidden-event");
    }
  }
}
