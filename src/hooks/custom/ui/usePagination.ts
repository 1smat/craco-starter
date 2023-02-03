import { useCallback, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

enum PaginationKeysEnum {
	PAGE = "page",
	PAGE_SIZE = "pageSize"
}

const usePagination = ({
	defaultPageSize = 10,
	currentPage = 0,
	connectToUrl = false
}: {
	defaultPageSize?: number;
	currentPage?: number;
	connectToUrl?: boolean;
}) => {
	// const history = useHistory();
	const [searchParams, setSearchParams] = useSearchParams();
	const [pageSize, setPageSize] = useState(Number(searchParams.get(PaginationKeysEnum.PAGE_SIZE)) || defaultPageSize);
	const [page, setPage] = useState(Number(searchParams.get(PaginationKeysEnum.PAGE)) || currentPage);

	function updateSearchParams(key: string, value: string | number) {
		searchParams.set(key, String(value));
		setSearchParams(searchParams);
	}

	const onHandlePageChange = useCallback((currentPage: number) => {
		setPage(currentPage - 1);
		updateSearchParams(PaginationKeysEnum.PAGE, currentPage - 1);
	}, []);

	const onHandlePageSizeChange = useCallback((pageSize: string) => {
		setPageSize(Number(pageSize));
		updateSearchParams(PaginationKeysEnum.PAGE_SIZE, pageSize);
	}, []);

	useEffect(() => {
		if (connectToUrl) {
			searchParams.set(PaginationKeysEnum.PAGE, String(page));
			searchParams.set(PaginationKeysEnum.PAGE_SIZE, String(pageSize));
			setSearchParams(searchParams);
		}
	}, [connectToUrl]);

	return {
		pageSize,
		page,
		onHandlePageChange,
		setPageSize,
		onHandlePageSizeChange
	};
};

interface IPaginationHookProps {
	page: number;
	pageSize: number;
	onHandlePageChange: (currentPage: number) => void;
	onHandlePageSizeChange: (size: string) => void;
}

export type { IPaginationHookProps };

export default usePagination;
