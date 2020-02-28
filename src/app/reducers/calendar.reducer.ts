import { Action, createReducer, on } from "@ngrx/store";

import * as CalendarActions from "../actions/calendar.actions";

import EventInf from "../interfaces/Event";

export interface CalendarState {
  events: Array<EventInf>;
  calendarInfo: string;
  mode: string;
  startDate: Date;
  endDate: Date,
}

export const initialState: CalendarState = {
  events: null,
  calendarInfo: "TODO info",
  mode: "week",
  startDate: null,
  endDate: null,
};

const calendarReducer = createReducer(
  initialState,
  on(CalendarActions.FETCH_CALENDAR, (state, { events }) => ({
    ...state,
    events
  })),
  on(CalendarActions.CHANGE_CALENDAR_MODE, (state, { mode }) => ({
    ...state,
    mode
  })),
  on(CalendarActions.CHANGE_CALENDAR_START_DATE, (state, { startDate }) => ({
    ...state,
    startDate
  })),
  on(CalendarActions.CHANGE_CALENDAR_END_DATE, (state, { endDate }) => ({
    ...state,
    endDate
  }))
);

export default (state: CalendarState, action: Action) => {
  return calendarReducer(state, action);
};
