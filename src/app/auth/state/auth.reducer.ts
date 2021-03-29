import { createReducer } from "@ngrx/store";

const _authReducer = createReducer(
    initialAuthState
)
export function AuthReducer(state: any, action: any) {
    return _authReducer(state, action);
}

function initialAuthState(initialAuthState: any) {
    throw new Error("Function not implemented.");
}
