import { useQuery } from "@tanstack/react-query";

import { AxiosResponse } from "axios";

import { generalRequest } from "services/api";

export enum FileContentTypes {
	EXCEL = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
}

const useDownloadFile = ({ type = FileContentTypes.EXCEL }: { type?: FileContentTypes }) => {
	const onCreateLink = (data: any, fileName: string) => {
		const url = window.URL.createObjectURL(
			new Blob([data], {
				type: FileContentTypes.EXCEL
			})
		);
		const link = document.createElement("a");
		link.href = url;
		link.setAttribute("download", `${fileName}.xlsx`);
		document.body.appendChild(link);
		link.click();
		link.remove();
	};

	return {
		onCreateLink
	};
};
export default useDownloadFile;

export const useDownloadExcel = (url: string, params: any, title: string) => {
	const { onCreateLink } = useDownloadFile({});
	return useQuery(
		[url, params],
		() =>
			generalRequest.get(url, {
				headers: {
					"Content-Type": FileContentTypes.EXCEL
				},
				params,
				responseType: "blob"
			}),
		{
			enabled: false,
			onSuccess: (response: AxiosResponse) => {
				onCreateLink(response.data, title);
			}
		}
	);
};
