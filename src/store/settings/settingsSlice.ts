import { createSlice } from "@reduxjs/toolkit";
import { ThemeNameType } from "../../types/themeTypes";

interface SettingsStateType {
    themeName: ThemeNameType;
}

const themeNames: ThemeNameType[] = ["dark", "light"];

const getInitialState = (): SettingsStateType => {
    let themeName = localStorage.getItem("themeName") as ThemeNameType;
    if (!themeNames.includes(themeName)) {
        themeName = "light";
    }
    document.body.setAttribute("data-theme", themeName);

    return {
        themeName,
    };
};


const settingsSlice = createSlice({
    name: "settings",
    initialState: getInitialState(),
    reducers: {
        toggleTheme: (state) => {
            state.themeName = state.themeName === "light" ? "dark" : "light";
            localStorage.setItem("themeName", state.themeName);
            document.body.setAttribute("data-theme", state.themeName);
        },
    },
});

export const settingsActions = {
    ...settingsSlice.actions,
};

const settingsReducer = settingsSlice.reducer;
export default settingsReducer;
