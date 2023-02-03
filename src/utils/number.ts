export function addSpaceEvery3Char(num: number, count = 1, defaultValue = "0") {
	try {
		const value = String(num.toFixed(count))
			.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, " ")
			.replace(".", ",");

		return value === "null" || value === "NaN" ? defaultValue : value;
	} catch (e: any) {
		return defaultValue;
	}
}
export function getNumberDivided(a: number) {
	return ({ num = 0, isFormated = true, count = 1 }) => (isFormated ? addSpaceEvery3Char(num / a, count) : num / a);
}

export function romanize(num: number) {
	let temp = num;
	let roman: any = "";
	const lookup: any = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};
	for (const i in lookup) {
		while (temp >= lookup[i]) {
			roman += i;
			temp -= lookup[i];
		}
	}
	return roman;
}

const divideByMln = getNumberDivided(1_000_000);
const dividedByMlrd = getNumberDivided(1_000_000_000);
const dividedBy10Thousand = getNumberDivided(1_000_0);
const dividedAnyNumber = (num: number) => getNumberDivided(num);

export { divideByMln, dividedByMlrd, dividedBy10Thousand, dividedAnyNumber };
