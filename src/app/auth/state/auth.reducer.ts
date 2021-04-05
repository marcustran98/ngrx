import { Router, RouterLink } from "@angular/router";
import { createReducer, on } from "@ngrx/store";
import { loginDirec, loginStart, loginSuccess } from "./auth.action";
import { initialAuthStateX } from "./auth.state";

const _authReducer = createReducer(
    initialAuthStateX,
    on(loginSuccess, (state: any, data) => {
        return {
            ...state,
        }
    }),
    on(loginDirec, (state: any) => {
        return {
            ...state,
        }
    })
)
export function AuthReducer(state: any, action: any) {
    return _authReducer(state, action);
}

function initialAuthState(initialAuthState: any) {
    throw new Error("Function not implemented.");
}
