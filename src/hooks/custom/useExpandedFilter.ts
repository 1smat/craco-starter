import { useCallback, useRef, useState } from "react";

const initialExpandedFilterState = { left: 0, top: 0, mode: "off" };

const useExpandedFilter = () => {
	const [expandedFilterState, setExpandedFilterState] = useState(initialExpandedFilterState);
	const filterBtnRef = useRef<any>(null);
	const onOpenExpandedFilter = () => {
		if (expandedFilterState.mode === "on") {
			setExpandedFilterState(initialExpandedFilterState);
			return;
		}

		if (filterBtnRef.current) {
			const rect = filterBtnRef.current.getBoundingClientRect();
			const x = window.scrollX + rect.left; //x position within the element.
			const y = window.scrollY + rect.top;

			setExpandedFilterState({ left: x, top: y, mode: "on" });
		}
	};

	const onCloseExpandedFilter = useCallback(() => setExpandedFilterState(initialExpandedFilterState), []);

	return {
		expandedFilterState,
		onOpenExpandedFilter,
		filterBtnRef,
		onCloseExpandedFilter
	};
};

export default useExpandedFilter;
