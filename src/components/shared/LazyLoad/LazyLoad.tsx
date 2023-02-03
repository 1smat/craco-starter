import React, { useEffect } from "react";

import PageLoader from "../PageLoader";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const LazyLoad = () => {
	useEffect(() => {
		nprogress.start();

		return () => {
			nprogress.done();
		};
	}, []);

	return <PageLoader />;
};
export default LazyLoad;
