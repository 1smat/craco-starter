import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query";

import { AxiosResponse } from "axios";

import { IResponseData, request } from "services/api";

interface IUseGeneralApiArgProps<Data = any, Error = any> {
	url: string;
	params: Record<any, any>;
	options?: UseQueryOptions<AxiosResponse<Data>, Error>;
	key?: any;
	signal?: AbortSignal;
	placeholderData?: TPlaceholderData<Data>;
}

export type QueryOptions = UseQueryOptions<AxiosResponse<AxiosResponse>, Error>;

export type TPlaceholderData<TData> = TData extends IResponseData ? { data: TData["data"] } : TData;

type IUseGeneralApiQueryReturnType<TData> = Omit<UseQueryResult, "data"> & {
	data: TData;
};

const useGeneralAPIQuery = <TData = any, TError = any>({
	url,
	params = {},
	options = {},
	key,
	signal,
	placeholderData
}: IUseGeneralApiArgProps<TData, any>): IUseGeneralApiQueryReturnType<TData> => {
	const { status, ...queryResponse } = useQuery<AxiosResponse<TData>, TError>(
		key || [url, params],
		async () => {
			const response = await request.get(url, {
				params,
				...(signal && { signal })
			});

			return response.data;
		},
		{
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			...options
		}
	);

	if (status === "success")
		return {
			status,
			...queryResponse,
			data: queryResponse.data as unknown as TData
		};

	return {
		...queryResponse,
		status,
		data: placeholderData as TData
	};
};

export type { IUseGeneralApiArgProps };

export default useGeneralAPIQuery;
