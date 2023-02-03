import { camelCase, kebabCase, paskalCase, snakeCase, titleCase } from "utils/font";

describe("utilities fonts", () => {
	it("should be return string value to camelCase", () => {
		expect(camelCase("Random Text Foo BAZ")).toBe("randomTextFooBaz");

		expect(camelCase("foo_b2az_bar_5qwx")).toBe("fooB2azBar5qwx");

		expect(camelCase("FoO_baZ_bAr_qwX")).toBe("fooBazBarQwx");

		expect(camelCase("Foo-BAZ-bar_qwx")).toBe("fooBazBarQwx");
	});

	it("should be return string value to kebabCase", () => {
		expect(kebabCase("Random Text Foo BAZ")).toBe("random-text-foo-baz");

		expect(kebabCase("foo_baz_bar_qwx")).toBe("foo-baz-bar-qwx");

		expect(kebabCase("FoO_baZ_bAr_qwX")).toBe("foo-baz-bar-qwx");

		expect(kebabCase("Foo-BAZ-bar_qwx")).toBe("foo-baz-bar-qwx");
	});

	it("should be return string value to snakeCase", () => {
		expect(snakeCase("Random Text Foo BAZ")).toBe("random_text_foo_baz");

		expect(snakeCase("foo_baz_bar_qwx")).toBe("foo_baz_bar_qwx");

		expect(snakeCase("FoO_baZ_bAr_qwX")).toBe("foo_baz_bar_qwx");

		expect(snakeCase("Foo-BAZ-bar_qwx")).toBe("foo_baz_bar_qwx");
	});

	it("should be return string value to paskalCase", () => {
		expect(paskalCase("Random Text Foo BAZ")).toBe("RandomTextFooBaz");

		expect(paskalCase("foo_baz_bar_qwx")).toBe("FooBazBarQwx");

		expect(paskalCase("FoO_baZ_bAr_qwX")).toBe("FooBazBarQwx");

		expect(paskalCase("Foo-BAZ-bar_qwx")).toBe("FooBazBarQwx");
	});

	it("should be return string value to titleCase", () => {
		expect(titleCase("Random Text Foo BAZ")).toBe("Random Text Foo Baz");

		expect(titleCase("foo_baz_bar_qwx")).toBe("Foo Baz Bar Qwx");

		expect(titleCase("FoO_baZ_bAr_qwX")).toBe("Foo Baz Bar Qwx");

		expect(titleCase("Foo-BAZ-bar_qwx")).toBe("Foo Baz Bar Qwx");
	});
});
