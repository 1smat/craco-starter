export function camelCase(str: string, inCase = "") {
	try {
		return str
			.trim()
			.toLowerCase()
			.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
	} catch (e) {
		return inCase;
	}
}

export function snakeCase(str: string, inCase = "") {
	try {
		return str
			.trim()
			.toLowerCase()
			.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
			?.map((s) => s.toLowerCase())
			.join("_");
	} catch (e) {
		return inCase;
	}
}

export function kebabCase(str: string, inCase = "") {
	try {
		return str
			.trim()
			.toLowerCase()
			.replace(/([a-z])([A-Z])/g, "$1-$2")
			.replace(/[\s_]+/g, "-")
			.toLowerCase();
	} catch (e) {
		return inCase;
	}
}

export function paskalCase(str: string, inCase = "") {
	try {
		return str
			.trim()
			.toLowerCase()
			.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
			?.map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
			.join("");
	} catch (e) {
		return inCase;
	}
}

export function titleCase(str: string, inCase = "") {
	try {
		return str
			.trim()
			.toLowerCase()
			.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
			?.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
			.join(" ");
	} catch (e) {
		return inCase;
	}
}
