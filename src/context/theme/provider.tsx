import React from "react";

import ThemeContext from "./context";
import { IThemeContext } from "./type";
import useTheme from "./use";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
	const value: IThemeContext = useTheme();

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
