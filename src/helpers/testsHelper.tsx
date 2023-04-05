import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { lightTheme } from "../theme/theme";

export const renderWithProviders = (component: JSX.Element) => render(
    <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
            {component}
        </BrowserRouter>
    </ThemeProvider>
);
