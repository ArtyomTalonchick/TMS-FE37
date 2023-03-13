type ColorsIndexesType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ColorType = {[name in ColorsIndexesType]: string};

export interface ThemeType {
    colors: {
        grey: ColorType;
        error: string;
    },
}

export const baseTheme: ThemeType = {
    colors: {
        grey: {
            0: "#ECEFF1",
            1: "#CFD8DC",
            2: "#B0BEC5",
            3: "#90A4AE",
            4: "#78909C",
            5: "#607D8B",
            6: "#546E7A",
            7: "#455A64",
            8: "#37474F",
            9: "#263238",
        },
        error: "#F44336",
    },
};