import moment from "moment";

export enum CurrDate {
	MONTH = moment().month() + 1,
	YEAR = moment().year(),
	DAY = moment().day()
}

export const PI = 3.14159265359 as const;

export const DATE_FORMAT = "DD.MM.YYYY";

export const TIN_LENGTH = 9 as const,
	PINFL_LENGTH = 14 as const,
	TOKEN_LENGTH = 32 as const,
	TICKET_LENGTH = 32 as const;
