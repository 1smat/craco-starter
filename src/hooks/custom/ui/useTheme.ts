import { useContext } from "react";

import { IThemeContext, ThemeContext } from "context/theme";

const useTheme = () => useContext<IThemeContext>(ThemeContext);

export default useTheme;
