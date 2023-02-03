import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { commonState } from "./common";
import { userState } from "./user";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

const _persistConfig = (key: string) => ({ key, storage, autoMergeLevel2 });

const commonPersistConfig = _persistConfig("common");
const userPersistConfig = _persistConfig("user");

const commonPersistReducer = persistReducer(commonPersistConfig, commonState);
const userPersistReducer = persistReducer(userPersistConfig, userState);

const rootReducer = combineReducers({
	commonState: commonPersistReducer,
	userState: userPersistReducer
});

const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);

export default store;
