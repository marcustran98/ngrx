import { createReducer, on } from "@ngrx/store";
import { loginStart, loginSuccess } from "./auth.action";
import { initialAuthStateX } from "./auth.state";

const _authReducer = createReducer(
    initialAuthStateX,
    on(loginSuccess, (state: any) => {
        console.log(111, state);
        return {
            ...state
        }
    })
)
export function AuthReducer(state: any, action: any) {
    return _authReducer(state, action);
}

function initialAuthState(initialAuthState: any) {
    throw new Error("Function not implemented.");
}
