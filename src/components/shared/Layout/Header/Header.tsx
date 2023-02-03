import { useTranslation } from "react-i18next";

import classes from "./Header.module.scss";

import Container from "components/shared/Container";

const Header = () => {
	const { t } = useTranslation();

	return (
		<header className={classes.header}>
			<Container>
				<h2>{t("HEADER")}</h2>
			</Container>
		</header>
	);
};

export default Header;
