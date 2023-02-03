import { useCallback, useState } from "react";

import { ThemeTypes } from "./type";

const useTheme = () => {
	const [theme, setTheme] = useState<ThemeTypes>(() => (localStorage.getItem("theme") || "light") as ThemeTypes);

	const onToggleTheme = useCallback((e: boolean) => {
		setTheme((prevV) => {
			if (prevV === "dark") {
				return "light";
			}
			return "dark";
		});

		if (e) {
			document.body.classList.add("dark");
			localStorage.setItem("theme", "dark");
			document.body.classList.remove("light");
		} else {
			document.body.classList.add("light");
			localStorage.setItem("theme", "light");
			document.body.classList.remove("dark");
		}
	}, []);

	const getClass = useCallback((classPrefix: string) => `${classPrefix}_${theme}`, [theme]);

	return {
		state: {
			theme
		},
		actions: {
			onToggleTheme,
			getClass
		}
	};
};

export default useTheme;
