import { useEffect, useRef } from "react";

const useAbortRequest = () => {
	const controller = useRef<AbortController>(new AbortController());

	useEffect(() => {
		return () => {
			controller.current.abort();
		};
	}, []);

	return {
		signal: controller.current.signal
	};
};

export default useAbortRequest;
