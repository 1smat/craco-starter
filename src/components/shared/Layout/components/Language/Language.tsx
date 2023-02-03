import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Menu } from "antd";

import Dropdown from "components/Dropdown";

const Language = () => {
	const { t, i18n } = useTranslation();
	const [lang, setLang] = useState<string>(t("Ўзбекча"));

	const curLang = localStorage.getItem("i18nextLng");

	const changeLang = (e: string, label: string) => {
		i18n.changeLanguage(e.toLowerCase());
		setLang(label);
	};
	const langMenu = (
		<Menu>
			{curLang !== "Latin" && (
				<Menu.Item key="Latin" onClick={() => changeLang("Latin", t("O'zbekcha"))}>
					{t("O'zbekcha")}
				</Menu.Item>
			)}
			{curLang !== "Cyril" && (
				<Menu.Item key="Cyril" onClick={() => changeLang("Cyril", t("Ўзбекча"))}>
					{t("Ўзбекча")}
				</Menu.Item>
			)}
		</Menu>
	);
	return <Dropdown menu={langMenu} selected={lang} />;
};

export default Language;
