import { ICommonSliceState } from "./common.slice";
import { createSelector } from "reselect";
import { AppState } from "store";

export const selectCommonState = (state: AppState) => state.commonState;

export const selectNameByNameMode = createSelector(selectCommonState, (state: ICommonSliceState) => state.nameByNameMode);
