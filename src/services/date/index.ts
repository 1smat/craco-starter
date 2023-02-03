import moment from "moment";

class DateService {
	formatDateForEndpoint(value: number | null) {
		if (!value) {
			return null;
		}

		return moment(new Date(value)).format("DD.MM.YYYY");
	}

	formatDateForDisplay(value: string) {
		if (!value) {
			return null;
		}

		return moment(new Date(value)).format("DD.MM.YYYY");
	}

	formatDaysInMonth(year: any, month: any) {
		if (!year) {
			return 0;
		}
		return new Date(year, month, 0).getDate();
	}
}

const dateService = new DateService();

export default dateService;
