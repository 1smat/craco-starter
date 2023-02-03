import { useEffect } from "react";

const useScrollToTop = (top = 0) => {
	useEffect(() => {
		window.scrollTo({ behavior: "smooth", top, left: 0 });
	}, []);
};

export default useScrollToTop;
