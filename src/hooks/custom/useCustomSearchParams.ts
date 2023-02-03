import { useSearchParams } from "react-router-dom";

const useCustomSearchParams = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	function setToSearchParams(key: string, value: string, replace = false) {
		searchParams.set(key, value);
		setSearchParams(searchParams, { replace });
	}

	function appendToSearchParams(key: string, value: string) {
		searchParams.append(key, value);
		setSearchParams(searchParams);
	}

	function getObj<T extends Record<string, unknown> | null>(key: string, defaultValue: T) {
		if (searchParams.has(key)) {
			try {
				return JSON.parse(searchParams.get(key) as string);
			} catch (e) {
				return defaultValue;
			}
		} else {
			return defaultValue;
		}
	}

	return {
		searchParams,
		setToSearchParams,
		appendToSearchParams,
		getObj,
		setSearchParams
	};
};

export default useCustomSearchParams;
