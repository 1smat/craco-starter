import { clean, get } from "utils/general";

describe("clean utils", () => {
	it("should be remove property from object depends on removedValues param", () => {
		const exampleObject = {
			foo: "hi",
			baz: null,
			bar: undefined,
			str: "",
			qwx: { x: 0, y: undefined }
		};
		expect(clean(exampleObject, [undefined, null, ""])).toEqual({
			foo: "hi",
			qwx: { x: 0 }
		});

		expect(clean({}, [undefined, null, "", false, 0, NaN])).toEqual({});

		expect(
			clean(
				{
					name: "",
					baz: {
						bar: [1, 2, 3],
						asd: { a: { b: { x: null, y: NaN } } }
					}
				},
				[undefined, null, "", false, 0, NaN]
			)
		).toEqual({
			baz: {
				bar: [1, 2, 3],
				asd: { a: { b: {} } }
			}
		});

		const objectWithUnknownProp = {
			foo: [1, 2, 3],
			1: "unknown",
			2: "unknown",
			3: "unknown"
		};

		expect(clean(objectWithUnknownProp, ["unknown", null])).toEqual({
			foo: [1, 2, 3]
		});
	});

	it("should be remove values depends from array depends on removedValues param", () => {
		expect(clean([1, 2, 3, 1, 1, 6], [1])).toEqual([2, 3, 6]);

		const fooData = [undefined, 2, false, 1, -Infinity, 6];
		expect(clean(fooData, [undefined, false, null, -Infinity, 0])).toEqual([2, 1, 6]);
	});

	it("gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place", () => {
		const object = { a: [{ b: { c: 3 } }] };
		expect(get(object, "a[0].b.c", 0)).toBe(3);

		const APIData = {
			// before: data: [],
			// after: (when data changed from backend, but we accept array)
			data: {
				id: 2,
				data: [
					{ username: "Eva", age: 18 },
					{ username: "John", age: 24 }
				]
			}
		};

		expect(get(APIData, "data", [])).toEqual([]);
	});
});
