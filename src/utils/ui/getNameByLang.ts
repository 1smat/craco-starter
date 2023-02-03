import i18next from "i18next";

const langObj: any = {
	cyrl: "Uz",
	latn: "Lat",
	ru: "Ru"
};

export const getNameByLang = (fieldName: string) => (fieldName ? `${fieldName}${langObj[i18next.language]}` : "-");
