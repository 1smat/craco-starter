import { useTranslation } from "react-i18next";

import classes from "./_components.module.scss";

export default function MainLayoutHeader() {
	const { t } = useTranslation();

	return <main className={classes.main}>{t("MAIN")}</main>;
}
