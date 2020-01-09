import { Action, createReducer, on } from "@ngrx/store";

import * as UserActions from "../actions/user.actions";

import UserInf from "../interfaces/User";

export interface State {
  user: UserInf;
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
