import { isArray, isArrayBuffer, isBigInt, isFunction, isNull, isNumber, isObject, isRegex, isString, isUndefined } from "./isValid";
import { get as lodashGet } from "lodash";

export function _parse<T>(value: string, inCaseVal?: any): T | undefined {
	try {
		return JSON.parse(value ?? "");
	} catch (e) {
		return inCaseVal;
	}
}

export function _stringify(obj: any, inCaseVal?: any) {
	try {
		return JSON.stringify(obj);
	} catch (e) {
		return inCaseVal;
	}
}

export function _encode(str: string, inCaseVal = "") {
	try {
		return Buffer.from(str).toString("base64");
	} catch (e) {
		return inCaseVal;
	}
}

export function _decode(str: string, inCaseVal = "") {
	try {
		return Buffer.from(str, "base64").toString();
	} catch (e) {
		return inCaseVal;
	}
}

export function RGBToHex(r: number, g: number, b: number) {
	try {
		return ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
	} catch (e) {
		return "";
	}
}

export function hexToRGB(hex: string, inCase = "") {
	try {
		let alpha = false,
			h: any = hex.slice(hex.startsWith("#") ? 1 : 0);
		if (h.length === 3) h = [...h].map((x) => x + x).join("");
		else if (h.length === 8) alpha = true;
		h = parseInt(h, 16);
		return (
			"rgb" +
			(alpha ? "a" : "") +
			"(" +
			(h >>> (alpha ? 24 : 16)) +
			", " +
			((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
			", " +
			((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
			(alpha ? `, ${h & 0x000000ff}` : "") +
			")"
		);
	} catch (e) {
		return inCase;
	}
}

/**
 * NOTE: If the object has a method, it is automatically removed.
 * */
export function clean(value: Object | Array<any>, removedValues: any[] = [undefined, null]) {
	const replacer = (_: unknown, value: any) => (removedValues.includes(value) ? undefined : value);

	if (isObject(value)) {
		return JSON.parse(JSON.stringify(value, replacer));
	}

	if (Array.isArray(value)) {
		return value.filter((item) => !removedValues.includes(item));
	}

	return value;
}

export function get(obj: Object, path: string, dValue: any) {
	try {
		return lodashGet(obj, path, dValue);
	} catch (e) {
		return dValue;
	}
}

export function removeDuplicates(array: any[]) {
	try {
		return Array.from(new Set([...array]));
	} catch (e) {
		return array;
	}
}

export enum TYPES {
	ARRAY = "array",
	OBJECT = "object",
	FUNCTION = "function",
	ARRAY_BUFFER = "arrayBuffer",
	STRING = "string",
	NUMBER = "number",
	BIGINT = "bigInt",
	REGEX = "regex",
	NULL = "null",
	UNDEFINED = "undefined"
}

export function whichType(value: unknown): TYPES | "unknown" {
	if (isArray(value)) {
		return TYPES.ARRAY;
	} else if (isObject(value)) {
		return TYPES.OBJECT;
	} else if (isFunction(value)) {
		return TYPES.FUNCTION;
	} else if (isArrayBuffer(value)) {
		return TYPES.ARRAY_BUFFER;
	} else if (isString(value)) {
		return TYPES.STRING;
	} else if (isNumber(value)) {
		return TYPES.NUMBER;
	} else if (isBigInt(value)) {
		return TYPES.BIGINT;
	} else if (isRegex(value)) {
		return TYPES.REGEX;
	} else if (isNull(value)) {
		return TYPES.NULL;
	} else if (isUndefined(value)) {
		return TYPES.UNDEFINED;
	} else {
		return "unknown";
	}
}
