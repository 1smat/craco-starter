import { isArray, isDate, isEmpty, isObject, isPinfl, isString, isTin } from "utils/isValid";

describe("utilities isValid", () => {
	it("should be return true, if value is OBJECT", () => {
		expect(isObject(null)).toBe(false);

		const fn = () => null;
		expect(isObject(fn)).toBe(false);

		expect(isObject([1, 3, { a: 1, b: 2 }])).toBe(false);

		expect(isObject({})).toBe(true);

		expect(
			isObject({
				a: 1,
				b: 2
			})
		).toBe(true);

		expect(isObject(new String(2))).toBe(true);

		expect(isObject(Array.prototype)).toBe(false);
	});

	it("should be return true, if value is STRING", () => {
		expect(isString("foo\n")).toBe(true);

		expect(isString(-21421)).toBe(false);

		expect(isString(new String(2132131))).toBe(true);

		expect(isString(["231231", "421421"])).toBe(false);
	});

	it("should be return true, if value is ARRAY", () => {
		expect(isArray([1, 2, {}])).toBe(true);

		expect(isArray({ a: [1, 2] })).toBe(false);

		expect(isArray({})).toBe(false);

		// eslint-disable-next-line no-new-object
		const obj = new Object();
		expect(isArray(obj)).toBe(false);

		expect(isArray(new Array(10))).toBe(true);

		expect(isArray(new ArrayBuffer(8))).toBe(false);
	});

	it("should be return true, if value is DATE", () => {
		expect(isDate(new Date())).toBe(true);

		expect(isDate(Date.parse("04 Dec 1995 00:12:00 GMT"))).toBe(false);

		expect(isDate(new Date("23/25/2014"))).toBe(false);

		expect(isDate(Date.parse("foo-bar 2014"))).toBe(false);
	});

	it("should be return true, if value is TIN", () => {
		expect(isTin(undefined)).toBe(false);

		expect(isTin("undefined")).toBe(false);

		expect(isTin({})).toBe(false);

		expect(isTin(9)).toBe(false);

		expect(isTin(528391514)).toBe(true);

		expect(isTin("528391514")).toBe(true);

		expect(isTin("528391514       ")).toBe(true);

		expect(isTin("_8391514")).toBe(false);

		expect(isTin("_8391514")).toBe(false);

		expect(isTin("5283_1514")).toBe(false);
	});

	it("should be return true, if value is PINFL", () => {
		expect(isPinfl(undefined)).toBe(false);

		expect(isPinfl(14)).toBe(false);

		expect(isPinfl(41603440240015)).toBe(true);

		expect(isPinfl("32109590460016")).toBe(true);

		expect(isPinfl("	30108556740016")).toBe(true);

		expect(isPinfl("32345_7897*456")).toBe(false);

		expect(isPinfl(528391514)).toBe(false);
	});

	it("should be return true, if value is EMPTY", () => {
		// Base
		expect(isEmpty("")).toBe(true);
		expect(isEmpty({})).toBe(true);
		expect(isEmpty([])).toBe(true);

		// Advanced
		expect(isEmpty("  ")).toBe(false);
		expect(isEmpty([[], [], []])).toBe(true);
		expect(isEmpty([{}, {}])).toBe(true);
		expect(isEmpty({ a: [] })).toBe(true);

		// Deep
		expect(isEmpty([[[], [], [[]], [[[]]]]])).toBe(true);
		expect(isEmpty([[{}, {}, {}, [{}]]])).toBe(true);
		expect(isEmpty([[{}, { a: "foo" }, [1, 2], [3]]])).toBe(false);
	});
});
