import { createAction, props } from "@ngrx/store";

import { Event } from "../reducers/calendar.reducer";

export const FETCH_CALENDAR = createAction(
  "[Calendar] Fetching calendar",
  props<{ events: Array<Event> }>()
);
