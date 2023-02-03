import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { NS10Codes } from "types";

import { createProxyWithHandler } from "utils/proxy";

const useCommonInfoContextValue = () => {
	const { t } = useTranslation();

	const mlnOptions = {
		1: {
			label: t("сўм"),
			value: 1,
			num: 1
		},
		mln: {
			label: t("млн"),
			value: "mln",
			num: 1_000_000
		},
		mlrd: {
			label: t("млрд"),
			value: "mlrd",
			num: 1_000_000_000
		}
	};

	const pageSizeOptions = [
		{
			label: 10,
			value: 10
		}
	];

	const mlnObjOptionsProxy = createProxyWithHandler(mlnOptions, mlnOptions["1"]);

	const months: Record<number, { value: number; label: string }> = useMemo(
		() => ({
			1: { value: 1, label: t("Январь") },
			2: { value: 2, label: t("Февраль") },
			3: { value: 3, label: t("Март") },
			4: { value: 4, label: t("Апрель") },
			5: { value: 5, label: t("Май") },
			6: { value: 6, label: t("Июнь") },
			7: { value: 7, label: t("Июль") },
			8: { value: 8, label: t("Август") },
			9: { value: 9, label: t("Сентябрь") },
			10: { value: 10, label: t("Октябрь") },
			11: { value: 11, label: t("Ноябрь") },
			12: { value: 12, label: t("Декабрь") }
		}),
		[]
	);

	const hashRegions: Record<NS10Codes, string> = {
		35: t("Қорақалпоғистон"),
		3: t("Андижон"),
		6: t("Бухоро"),
		8: t("Жиззах"),
		10: t("Қашқадарё"),
		14: t("Наманган"),
		12: t("Навоий"),
		18: t("Самарқанд"),
		22: t("Сурхондарё"),
		24: t("Сирдарё"),
		27: t("Тошкент"),
		30: t("Фарғона"),
		33: t("Хоразм"),
		26: t("Тошкент ш."),
		0: t("Республика")
	};

	const monthOptions = Object.values(months);

	return {
		state: {
			months,
			pageSizeOptions,
			mlnOptions,
			mlnObjOptionsProxy,
			monthOptions,
			hashRegions
		},
		actions: {}
	};
};

export default useCommonInfoContextValue;
