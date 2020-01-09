import { Action, createReducer, on } from "@ngrx/store";

import * as CalendarActions from "../actions/calendar.actions";

import EventInf from "../interfaces/Event";

export interface State {
  events: Array<EventInf>;
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

export default (state: State, action: Action) => {
  return calendarReducer(state, action);
};
