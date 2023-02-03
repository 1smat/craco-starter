import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import PageLoader from "components/shared/PageLoader";

const TokenValidation = () => {
	const { token } = useParams();

	useEffect(() => {
		if (token) {
			localStorage.setItem("token", token);
			setTimeout(() => {
				const redirect = document.createElement("a");
				redirect.setAttribute("href", process.env.REACT_APP_PUBLIC_URL || "/");
				redirect.click();
			}, 500);
		}
	});
	return <PageLoader />;
};
export default TokenValidation;
