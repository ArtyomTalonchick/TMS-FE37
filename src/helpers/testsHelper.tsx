import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "../theme/theme";

export const renderWithProviders = (component: JSX.Element) => render(
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
            {component}
        </BrowserRouter>
    </ThemeProvider>
);
