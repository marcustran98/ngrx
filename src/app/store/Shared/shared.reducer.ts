import { createReducer, on } from "@ngrx/store";
import { ShareLoadingState } from "./shared..actions";
import { initialShareState } from "./shared.state";

export const _shareReducer = createReducer(initialShareState,
    on(ShareLoadingState, (state: any, value) => {
        return {
            ...state,
            showLoading: value.status
        }
    })
)
export function SharedReducer(state: any, action: any) {
    return _shareReducer(state, action);
}