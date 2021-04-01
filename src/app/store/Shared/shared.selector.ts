import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShareState } from "./shared.state";

export const SHARE_STATE_NAME = 'shared';
const GetSharedSelector = createFeatureSelector<ShareState>(SHARE_STATE_NAME)


export const GETLOADING = createSelector(GetSharedSelector, ((value: any) => {
    return value.showLoading;
}))