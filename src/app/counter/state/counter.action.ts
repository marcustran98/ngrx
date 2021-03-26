import { createAction, props } from "@ngrx/store";

export const increment1 = createAction('increment');
export const decrement1 = createAction('decrement');
export const reset1 = createAction('reset');
export const reset2 = createAction('reset');
export const customIncrement = createAction("customIncrement", props<{ value: number }>())
export const customText = createAction("customText", props<{ text: string }>())
