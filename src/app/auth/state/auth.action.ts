import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/Users.model";

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';


export const loginStart = createAction(LOGIN_START, props<{ email: string, password: string }>());
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ users: User }>());
export const logonFail = createAction(LOGIN_FAIL);
