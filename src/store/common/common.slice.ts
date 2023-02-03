import { createSlice } from "@reduxjs/toolkit";

type TableModeType = "initial" | "updating" | "checking" | "done";

export interface ICommonSliceState {
	nameByNameMode: TableModeType;
}

const initialState: ICommonSliceState = {
	nameByNameMode: "initial"
};

const common = createSlice({
	name: "generalFilter",
	initialState: initialState,
	reducers: {
		setNameByNameMode: (state: ICommonSliceState, { payload }: any) => {
			state["nameByNameMode"] = payload.value;
		}
	}
});

export const commonState = common.reducer;

export const { setNameByNameMode } = common.actions;
