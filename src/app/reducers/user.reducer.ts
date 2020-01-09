import { Action, createReducer, on } from "@ngrx/store";

import * as UserActions from "../actions/user.actions";

export interface User {
  name: string;
  email: string;
}

export interface State {
  user: User;
  token: string;
}

export const initialState: State = {
  user: {
    name: "negotium user",
    email: "email@negotium.com"
  },
  token: ""
};

const userReducer = createReducer(
  initialState,
  on(UserActions.LOGIN_USER, (state, { token }) => ({ ...state, token })),
  on(UserActions.LOGOUT_USER, state => ({ ...state, token: "" }))
);

export default (state: State, action: Action) => {
  return userReducer(state, action);
};
