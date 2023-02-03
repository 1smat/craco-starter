import { QueryStatus } from "@tanstack/react-query";

export type Nullable<Type = any> = {
	[Key in keyof Type]: Type[Key] | null;
};

export type NS10Codes = 3 | 6 | 8 | 10 | 12 | 14 | 18 | 22 | 24 | 26 | 27 | 30 | 33 | 35 | 0;

interface IPaginatedData<T> {
	totalCount: number;
	items: T[];
	status: QueryStatus;
}

interface ISelectOption<T = string> {
	label: string;
	value: T;
}

interface IAntTableColumn<FilterFields = any, FieldNames = string> {
	title: any;
	key: string;
	dataIndex: string;
	filter?: {
		fields: Array<{
			label?: string;
			name: FieldNames;
			type?: "" | "date";
			placeholder?: string;
			className?: string;
		}>;
	};
	render?: any;
	children?: IAntTableColumn<FilterFields, FieldNames>[];
}

export type { IPaginatedData, ISelectOption, IAntTableColumn };

export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
