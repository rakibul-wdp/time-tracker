/* eslint-disable react/display-name */
import React, { useMemo } from "react";

import { darkPalette } from "./dark";
import { lightPalette } from "./light";

const THEME: Record<NonNullable<string>, typeof lightPalette> = {
    light: lightPalette,
    dark: darkPalette,
};

const DEFAULT_THEME: NonNullable<string> = "light";

interface TLanguageContext {
    theme: string;
    changeTheme: (arg: string) => void;
}

export const ThemeContext = React.createContext<TLanguageContext>({
    theme: DEFAULT_THEME,
    changeTheme: () => null,
});

export const ThemeContextProvider = React.memo(({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = React.useState<NonNullable<string>>(DEFAULT_THEME);

    const changeTheme = (thm: string) => {
        setTheme(thm);
    };

    const value = useMemo(() => {
        const themeValue = {
            theme,
            changeTheme,
        };
        return { themeValue };
    }, [theme]);

    return <ThemeContext.Provider value={value.themeValue}>{children}</ThemeContext.Provider>;
});

export const useTheme = () => {
    const { theme } = React.useContext(ThemeContext);
    return [THEME[theme]];
};

export const useThemeChange = () => React.useContext(ThemeContext);
