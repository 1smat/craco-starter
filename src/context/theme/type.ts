type ThemeTypes = "dark" | "light";

interface IThemeContextState {
	theme: ThemeTypes;
}

interface IThemeContextActions {
	onToggleTheme: (e: boolean) => void;
	getClass: (classPrefix: string) => string;
}

interface IThemeContext {
	state: IThemeContextState;
	actions: IThemeContextActions;
}

export type { IThemeContext, IThemeContextActions, IThemeContextState, ThemeTypes };
