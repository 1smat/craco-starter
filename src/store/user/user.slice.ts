import { createSlice } from "@reduxjs/toolkit";

export interface IUserState {
	userInfo: any;
	userToken: string | null;
}

const initialState: IUserState = {
	userInfo: {}, // for user object
	userToken: null // for storing the JWT
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setToken(state, { payload }) {
			state.userToken = payload;
		},
		setUserInfo(state, { payload }) {
			state.userInfo = payload;
		}
	}
});

export const { setToken } = userSlice.actions;
export const { setUserInfo } = userSlice.actions;
export const userState = userSlice.reducer;
