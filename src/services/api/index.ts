import { QueryClient } from "@tanstack/react-query";

import axios from "axios";
import store from "store";

function generateInterceptor(request: any, token: string | null) {
	return request.interceptors.request.use(
		(config: any) => {
			if (token) {
				config.headers.Authorization = "Bearer " + token;
			}
			return config;
		},
		(error: any) => Promise.reject(error)
	);
}

export const request = axios.create({
	baseURL: process.env.REACT_APP_API_URL
});

export const generalRequest = axios.create({
	baseURL: process.env.REACT_APP_GENERAL_API_URL
});

store.subscribe(() => {
	const {
		userState: { userToken }
	} = store.getState();
	generateInterceptor(request, userToken);
	generateInterceptor(generalRequest, userToken);
});

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
});
export interface IResponseData<TData = any> {
	success: boolean;
	message: string;
	code: number;
	data: TData;
}
