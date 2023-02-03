import { useTranslation } from "react-i18next";

import classes from "./Footer.module.scss";

import Container from "components/shared/Container";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className={classes.footer}>
			<Container>
				<h2>{t("FOOTER")}</h2>
			</Container>
		</footer>
	);
};

export default Footer;
