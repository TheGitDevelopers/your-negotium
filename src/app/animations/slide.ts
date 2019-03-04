import {
  animate,
  animation,
  keyframes,
  state,
  style,
  transition,
  trigger,
  useAnimation
} from "@angular/animations";

export const slideUpAnimation = animation(
  animate(
    ".5s ease-in",
    keyframes([
      style({
        offset: 0,
        transform: "translateY(0)"
      }),
      style({
        offset: 0.8,
        transform: "translateY(-90%)",
        opacity: 0.05
      }),
      style({
        offset: 1,
        position: "absolute",
        visibility: "hidden",
        transform: "translateY(-100%)"
      })
    ])
  )
);

export const slideDownAnimation = animation(
  animate(
    ".6s ease-out",
    keyframes([
      style({
        offset: 0,
        opacity: 0,
        transform: "translateY(-100%)",
        visibility: "visible"
      }),
      style({
        offset: 0.2,
        transform: "translateY(-80%)",
        opacity: 0.05
      }),
      style({
        offset: 1,
        opacity: 1,
        transform: "translateY(0)"
      })
    ])
  )
);

export const slideTrigger = trigger("slide", [
  state(
    "show",
    style({
      display: "flex",
      opacity: 1
    })
  ),
  state(
    "hide",
    style({
      display: "none",
      opacity: 0
    })
  ),
  transition("hide => show", useAnimation(slideDownAnimation)),
  transition("show => hide", useAnimation(slideUpAnimation))
]);
