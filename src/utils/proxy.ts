export function createProxyWithHandler<T extends Record<string, unknown>>(obj: T, defaultValue: any) {
	return new Proxy(obj, {
		get: (target: T, key: string) => {
			return Reflect.has(target, key) ? target[key] : defaultValue;
		}
	});
}
