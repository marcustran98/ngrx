import { createReducer, on } from "@ngrx/store";
import { customIncrement, decrement1, increment1, reset1 } from "./counter.action";
import { initialState } from "./counter.state";

const _counterReducer = createReducer(initialState,
  on(increment1, (data) => {
    console.log(1, initialState);
    console.log(2, data);
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
  })
)
export function counterReducer(state: any, action: any) {
  console.log(4, state);
  console.log(5, action);
  return _counterReducer(state, action);
}