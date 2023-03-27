import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lightTheme, ThemeNames, ThemeType } from "../../theme/theme";
import { LanguageType } from "../../types/languageTypes";

interface SettingsStateType {
    language: LanguageType;
    themeName: ThemeNames;
    theme: ThemeType;
}

const languages: LanguageType[] = ["en", "ru"];
const themeNames: ThemeNames[] = [ThemeNames.dark, ThemeNames.light];

const getInitialState = (): SettingsStateType => {
    let language = localStorage.getItem("language") as LanguageType;
    if (!languages.includes(language)) {
        language = "en";
    }
    let themeName = localStorage.getItem("theme") as ThemeNames;
    if (!themeNames.includes(themeName)) {
        themeName = ThemeNames.dark;
    }
    const theme = themeName === ThemeNames.light ? lightTheme : darkTheme;
    return {
        language,
        themeName,
        theme,
    };
};


const settingsSlice = createSlice({
    name: "settings",
    initialState: getInitialState(),
    reducers: {
        toggleLanguage: (state) => {
            state.language = state.language === "en" ? "ru" : "en";
            localStorage.setItem("language", state.language);
        },
        toggleTheme: (state) => {
            state.themeName = state.themeName === ThemeNames.light ? ThemeNames.dark : ThemeNames.light;
            state.theme = state.themeName === ThemeNames.light ? lightTheme : darkTheme;
            localStorage.setItem("theme", state.themeName);
        }
    },
});

export const settingsActions = {
    ...settingsSlice.actions,
};

const settingsReducer = settingsSlice.reducer;
export default settingsReducer;
