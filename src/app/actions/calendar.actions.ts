import { createAction, props } from "@ngrx/store";

import EventInf from "src/app/interfaces/Event";

export const FETCH_CALENDAR = createAction(
  "[Calendar] Fetching calendar",
  props<{ events: Array<EventInf> }>()
);
