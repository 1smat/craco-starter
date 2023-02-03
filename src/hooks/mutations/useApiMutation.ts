import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { AxiosResponse } from "axios";

import { generalRequest } from "services/api";

const useApiMutation = <Variables = any, Response = any, Error = any>(
	url: string,
	method: "post" | "put" | "patch" | "delete",
	options: UseMutationOptions<AxiosResponse<Response>, Error, Variables> = {},
	headers = {}
) =>
	useMutation<AxiosResponse<Response>, Error, Variables>(
		(variables) => {
			const response = generalRequest({
				method,
				url,
				data: variables,
				headers
			});
			return response;
		},
		{ ...options }
	);

export default useApiMutation;
