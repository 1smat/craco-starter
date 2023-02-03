/*
const foo = () => void, baz = () => void, bar = () => void,

const bad = foo(baz(bar()))
const good = COMPOSE(foo, baz, bar);
*/

export function COMPOSE(...funcs: Function[]) {
	if (funcs.length === 0) {
		return (arg: any) => arg;
	}

	if (funcs.length === 1) {
		return funcs[0];
	}

	return funcs.reduce(
		(f, g) =>
			(...args: any[]) =>
				f(g(...args))
	);
}

export function PIPE(...funcs: Function[]) {
	if (funcs.length === 0) {
		return (arg: any) => arg;
	}

	if (funcs.length === 1) {
		return funcs[0];
	}

	return funcs.reduceRight(
		(f, g) =>
			(...args: any[]) =>
				f(g(...args))
	);
}
