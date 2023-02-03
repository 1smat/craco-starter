import { FC } from "react";
import { useTranslation } from "react-i18next";

const Test: FC<any> = ({ ...props }) => {
	const { t } = useTranslation();

	return <div {...props}></div>;
};

export default Test;
