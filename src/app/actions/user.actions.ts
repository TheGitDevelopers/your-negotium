import { createAction, props } from "@ngrx/store";

export const LOGIN_USER = createAction(
  "[User Page] User logging",
  props<{ token: string }>()
);

export const LOGOUT_USER = createAction("[User Page] User logout");
