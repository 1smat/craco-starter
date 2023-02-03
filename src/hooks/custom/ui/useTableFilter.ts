import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { cloneDeep, get } from "lodash";
import moment from "moment";

import dateService from "services/date";

interface IColumnConfigForFilter {
	key: string;
	visible: boolean;
}

const useTableFilter = <T = any>({ values }: { values: T }) => {
	const [filterV, setFilterV] = useState<T>(values);
	const [columnsConfig, setColumnsConfig] = useState<Record<string, IColumnConfigForFilter>>({});
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const isMounted = useRef(false);
	const columnFilterRef = useRef<any>();

	const filterVForRequest = useMemo(() => {
		const clonedFilterV: any = cloneDeep(filterV);

		Object.entries(clonedFilterV).forEach(([key, value]: any) => {
			if (key.includes("Formatted")) {
				delete clonedFilterV[key];
				const updatedKey = key.slice(0, -9);

				clonedFilterV[updatedKey] = value.formattedValue;
			}
		});

		return clonedFilterV;
	}, [filterV]);

	const activeFilterColumnKey = useMemo(() => {
		let selectedKey = "";

		for (const [key, value] of Object.entries(columnsConfig)) {
			if (value.visible) {
				selectedKey = key;
				break;
			}
		}

		return selectedKey;
	}, [columnsConfig]);

	const keysHasValue = useMemo(() => {
		const keys = [];

		for (const key in columnsConfig) {
			if (filterV[key as keyof T]) {
				keys.push(key);
			}
		}

		return keys;
	}, [columnsConfig, filterV]);

	const onHandleInput = useCallback((e: any) => {
		setFilterV((prevV) => ({
			...prevV,
			[e.target.name]: e.target.value.trim()
		}));
	}, []);

	const onHandleSelect = useCallback((e: any, name: string) => {
		setFilterV((prevV) => ({ ...prevV, [name]: e }));
	}, []);

	const onUpdateValues = useCallback((values: any) => {
		setFilterV(values);
	}, []);

	const onHandleDatePicker = (e: any, name: string) => {
		setFilterV((prevV) => ({ ...prevV, [name]: e ? moment(e?._d) : null }));
	};

	const onHandleDatePickerWithFormattedValue = (e: any, name: string) => {
		const value = e ? moment(e?._d) : null;
		setFilterV((prevV) => ({
			...prevV,
			[name + "Formatted"]: {
				value,
				formattedValue: value && dateService.formatDateForEndpoint(get(e, "_d"))
			}
		}));
	};

	function checkDatePickerInside(e: any) {
		let isInsideDatePickerBox = false;
		const datePickerBoxes = Array.from(document.getElementsByClassName("ant-picker-dropdown"));

		datePickerBoxes.forEach((datePicker: any) => {
			if (datePicker.contains(e.target)) {
				isInsideDatePickerBox = true;
			}
		});

		return isInsideDatePickerBox;
	}

	function closeFilterBox() {
		const cloneOfColumnsConfig = { ...columnsConfig };

		Object.keys(cloneOfColumnsConfig).forEach((key: string, i: number) => {
			cloneOfColumnsConfig[key].visible = false;
		});

		setColumnsConfig(cloneOfColumnsConfig);
	}

	function checkLoadingIndicatorActive() {
		return document.getElementsByClassName("ant-spin-spinning").length > 0;
	}

	function onClickColumnFilterBoxOutside(e: any) {
		const box = columnFilterRef.current;

		const isInsideDatePickerBox = checkDatePickerInside(e);

		if ((box && box.contains(e.target)) || isInsideDatePickerBox || checkLoadingIndicatorActive()) {
			return;
		}
		closeFilterBox();
	}

	useEffect(() => {
		document.addEventListener("click", onClickColumnFilterBoxOutside);

		return () => {
			document.removeEventListener("click", onClickColumnFilterBoxOutside);
		};
	}, [columnsConfig]);

	const setPositionForFilterBox = (e: any) => {
		setPosition({ x: e.clientX, y: e.clientY });
	};

	const onToggle = (e: any, key: string) => {
		e.stopPropagation();
		if (e) {
			setPositionForFilterBox(e);
		}

		setColumnsConfig((prevV) => {
			for (const [key, value] of Object.entries(prevV)) {
				if (value.visible) {
					prevV[key].visible = false;
					break;
				}
			}

			if (key in prevV) {
				return {
					...prevV,
					[key]: {
						...prevV[key],
						visible: !prevV[key].visible
					}
				};
			} else {
				return {
					...prevV,
					[key]: {
						key,
						visible: true
					}
				};
			}
		});
	};

	return {
		onHandleInput,
		filterV,
		isMounted,
		onToggle,
		columnsConfig,
		position,
		columnFilterRef,
		activeFilterColumnKey,
		onHandleDatePicker,
		keysHasValue,
		onUpdateValues,
		onHandleSelect,
		onHandleDatePickerWithFormattedValue,
		filterVForRequest
	};
};

type OnHandleInputType = (e: any) => void;

type UseTableFilterReturnType = Omit<
	ReturnType<typeof useTableFilter>,
	"activeFilterColumnKey" | "onUpdateValues" | "onHandleSelect" | "onHandleDatePickerWithFormattedValue" | "filterVForRequest"
> & {
	activeFilterColumnKey?: string;
};

export type { OnHandleInputType, UseTableFilterReturnType };

export default useTableFilter;
