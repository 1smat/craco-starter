import { isValidElement } from "react";

import { PINFL_LENGTH, TIN_LENGTH } from "../constants";

// ==================== Commmon ====================
export function isArray(value: unknown) {
	return Array.isArray(value) && value instanceof Array;
}

export function isObject(value: unknown) {
	const type = value ? typeof value : undefined;
	return type === "object" && !Array.isArray(value);
}

export function isFunction(value: unknown) {
	return typeof value === "function";
}

export function isString(value: unknown) {
	return toString.call(value) === "[object String]";
}

export function isNumber(value: unknown) {
	return typeof value === "number" && isFinite(value);
}

export function isRegex(value: unknown) {
	return toString.call(value) === "[object RegExp]";
}

export function isArrayBuffer(value: unknown) {
	return toString.call(value) === "[object ArrayBuffer]";
}

export function isNull(value: unknown) {
	return value === null;
}

export function isUndefined(value: unknown) {
	return value === undefined;
}

export function isBigInt(value: unknown) {
	return Object.prototype.toString.call(value) === "[object BigInt]";
}

export function isError(value: unknown) {
	const tag = toString.call(value);
	switch (tag) {
		case "[object Error]":
			return true;
		case "[object Exception]":
			return true;
		case "[object DOMException]":
			return true;
		default:
			return value instanceof Error;
	}
}

export function isDate(value: unknown) {
	if (Object.prototype.toString.call(value) === "[object Date]" && value instanceof Date && !isNaN(value.valueOf())) {
		return true;
	}
	return false;
}

export function isEmpty(value: unknown): boolean {
	if (!value && value !== 0) return true;
	if (Array.isArray(value)) {
		if (!value.length) return true;
		return value.every(isEmpty);
	}
	if (typeof value === "object") {
		return Object.values(value).every(isEmpty);
	}
	return false;
}

export function isReactElement(value: unknown) {
	return isValidElement(value);
}

// ==================== General ====================
export function isTin(tin: unknown) {
	if (!tin) return false;
	return TIN_LENGTH === String(tin).trim().length && isNumber(Number(tin));
}

export function isPinfl(pinfl: unknown) {
	if (!pinfl) return false;
	return PINFL_LENGTH === String(pinfl).trim().length && isNumber(Number(pinfl));
}
