import { createAction, props } from "@ngrx/store";

import EventInf from "src/app/interfaces/Event";

export const FETCH_CALENDAR = createAction(
  "[Calendar] Fetching calendar",
  props<{ events: Array<EventInf> }>()
);

export const CHANGE_CALENDAR_MODE = createAction(
  "[Calendar] Changing calendar mode",
  props<{ mode: string }>()
);

export const CHANGE_CALENDAR_START_DATE = createAction(
  "[Calendar] Changing calendar start date",
  props<{ startDate: Date }>()
);

export const CHANGE_CALENDAR_END_DATE = createAction(
  "[Calendar] Changing calendar end date",
  props<{ endDate: Date }>()
);