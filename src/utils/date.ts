import moment from "moment";

export function checkIsValidDate(date: any) {
	const timestamp = Date.parse(date);
	return !isNaN(timestamp);
}

export function getSplitedDate(date: string): {
	day: number;
	month: number;
	year: number;
} {
	try {
		const arr = date.split(".");
		return {
			day: parseInt(arr[0]),
			month: parseInt(arr[1]),
			year: parseInt(arr[2])
		};
	} catch (e) {
		return {
			day: 0,
			month: 0,
			year: 0
		};
	}
}

export const dateFormatter = (date: any, prefix = ".") => {
	if (!checkIsValidDate(date)) {
		return "invalid date";
	}
	if (date) {
		const d = new Date(date);
		const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
		const mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
		const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
		return `${da}${prefix}${mo}${prefix}${ye}`;
	} else {
		return null;
	}
};

export const formatDates = (data: any) => {
	const vals = Object.entries(data);
	const result = [];
	for (let i = 0; i < vals.length; i++) {
		const [key, value] = vals[i];
		if (value instanceof Date) {
			result.push([key, moment(value).format("DD.MM.YYYY")]);
		}
	}
	return Object.fromEntries(result);
};
