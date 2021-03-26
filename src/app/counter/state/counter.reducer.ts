import { createReducer, on } from "@ngrx/store";
import { customIncrement, customText, decrement1, increment1, reset1 } from "./counter.action";
import { initialState } from "./counter.state";

const _counterReducer = createReducer(
  // ====== STATE ==========
  initialState,
  // ============ ACTION =============
  on(increment1, (data) => {
    return {
      ...data,
      counter: data.counter + 1
    }
  }),
  on(decrement1, (data) => {
    return {
      ...data,
      counter: data.counter - 1
    }
  }),
  on(reset1, (data) => {
    return {
      ...data,
      counter: 0
    }
  }),
  on(customIncrement, (data, passvalue) => {
    console.log(data, passvalue);
    return {
      ...data,
      counter: data.counter + +passvalue.value
    }
  }),
  on(customText, (data, passvalue) => {
    return {
      ...data,
      text: passvalue.text
    }
  })
)
export function counterReducer(state: any, action: any) {
  console.log(2, state);
  console.log('actioon', action);
  return _counterReducer(state, action);
}