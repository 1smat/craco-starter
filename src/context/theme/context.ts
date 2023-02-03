import { createContext } from "react";

import { IThemeContext } from "./type";

const defaultValue: IThemeContext = {
	state: {
		theme: "light"
	},
	actions: {
		onToggleTheme(e: boolean) {
			// console.log();
		},
		getClass(c: string) {
			return "";
		}
	}
};

const ThemeContext = createContext<IThemeContext>(defaultValue);

export default ThemeContext;
