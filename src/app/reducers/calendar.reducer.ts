import { Action, createReducer, on } from "@ngrx/store";

import * as CalendarActions from "../actions/calendar.actions";

export interface Event {
  time: string;
  name: string;
}

export interface State {
  events: Array<Event>;
  calendarInfo: string;
}

export const initialState: State = {
  events: [
    {
      time: "18:00",
      name: "Tralala"
    }
  ],
  calendarInfo: "TODO info"
};

const calendarReducer = createReducer(
  initialState,
  on(CalendarActions.FETCH_CALENDAR, (state, { events }) => ({
    ...state,
    events
  }))
);

export default (state: State | undefined, action: Action) => {
  return calendarReducer(state, action);
};
