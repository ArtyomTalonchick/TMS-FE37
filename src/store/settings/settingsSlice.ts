import { createSlice } from "@reduxjs/toolkit";
import { LanguageType } from "../../types/languageTypes";
import { ThemeNameType, ThemeType, darkTheme, lightTheme } from "../../theme/theme";

interface SettingsStateType {
    language: LanguageType;
    theme: ThemeType;
    themeName: ThemeNameType;
}

const languages: LanguageType[] = ["en", "ru"];
const themeNames: ThemeNameType[] = ["dark", "light"];

const getInitialState = (): SettingsStateType => {
    let language = localStorage.getItem("language") as LanguageType;
    if (!languages.includes(language)) {
        language = "en";
    }

    let themeName = localStorage.getItem("themeName") as ThemeNameType;
    if (!themeNames.includes(themeName)) {
        themeName = "light";
    }
    const theme = themeName === "dark" ? darkTheme : lightTheme;

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
            state.themeName = state.themeName === "light" ? "dark" : "light";
            state.theme = state.themeName === "dark" ? darkTheme : lightTheme;
            localStorage.setItem("themeName", state.themeName);
        },
    },
});

export const settingsActions = {
    ...settingsSlice.actions,
};

const settingsReducer = settingsSlice.reducer;
export default settingsReducer;
