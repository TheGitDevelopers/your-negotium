import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

export const HideList = trigger("hideList", [
  state(
    "show",
    style({
      transform: "scaleY(1)"
    })
  ),
  state(
    "hide",
    style({
      transform: "scaleY(0)"
    })
  ),
  transition("hide => show", animate("0.01s 0.5s")),
  transition("show => hide", animate("0.01s 0.5s"))
]);
