import { createReducer, on } from "@ngrx/store";
import { loginStart, loginSuccess } from "./auth.action";
import { initialAuthStateX } from "./auth.state";

const _authReducer = createReducer(
    initialAuthStateX,
    on(loginSuccess, (state: any, data) => {
        console.log(111, data);
        localStorage.setItem("token", data.users.token);
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
