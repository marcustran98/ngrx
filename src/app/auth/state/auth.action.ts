import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/Users.model";

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';
export const LOGIN_DIRECT = '[auth page] login success -> direct';
export const SIGN_UP = '[sign up] signup start'


export const loginStart = createAction(LOGIN_START, props<{ email: string, password: string }>());
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ users: User }>());
export const loginDirec = createAction(LOGIN_FAIL);
export const logonFail = createAction(LOGIN_FAIL);
export const signupStart = createAction(SIGN_UP, props<{ email: string, password: string }>());
