import { createAction, props } from "@ngrx/store";

export const SET_LOADING_ACTION = '[share state] share loading state';
export const ShareLoadingState = createAction(SET_LOADING_ACTION, props<{ status: boolean }>());