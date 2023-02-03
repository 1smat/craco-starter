import useGeneralAPIQuery, { QueryOptions } from "./useGeneralApiQuery";

// ========================================= Queries =========================================
export const GETUserInfo = (params: any, options?: QueryOptions) =>
	// TODO: CHANGE hook query
	useGeneralAPIQuery({
		url: "auth/oauth/account",
		params,
		options
	});
