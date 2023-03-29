import { render, screen  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../../theme/theme";
import LoginView, { PropsType } from "./LoginView";

jest.mock("../../../hooks/useTranslations", () => () => ({
    t: jest.requireActual("../../../resources/locales/en.json"),
    toggleLanguage: () => {},
}));

const renderWitProviders = (component: JSX.Element) => ({...render(
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
            {component}
        </BrowserRouter>
    </ThemeProvider>
)});

const renderLoginView = (props: Partial<PropsType> = {}) => renderWitProviders(
    <LoginView
        loading={false}
        createTokens={jest.fn()}
        {...props}
    />
);

describe("Login", () => {
    describe("Include", () => {
        test("Header", () => {
            renderLoginView();
            expect(screen.getByText(/login/i)).toBeInTheDocument();
        });
        test("Email field", () => {
            renderLoginView();
            expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        });
        test("Password field", () => {
            renderLoginView();
            expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        });
        test("Error", () => {
            const error = "Some error example";
            renderLoginView({ error });
            expect(screen.getByText(error)).toBeInTheDocument();
        });
        test("Not loader", () => {
            renderLoginView();
            expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
        });
        test("Loader", () => {
            renderLoginView({ loading: true });
            expect(screen.getByRole("progressbar")).toBeInTheDocument();
        });
    });

    describe("Handlers", () => {
        test("Email", () => {
            renderLoginView();
            const emailEl = screen.getByLabelText(/email/i);
            const email = "email.ecSdfsd";
            act(() => {
                userEvent.type(emailEl, email);
            });
            expect(emailEl).toHaveValue(email);
        });

        test("Input and submit", () => {
            const createTokens = jest.fn();
            renderLoginView({ createTokens });
            const email = "email.ecdfsd";
            const password = "fdsfsd,fdsfsd.fdsfsd"
            const emailEl = screen.getByLabelText(/email/i);
            const passwordEl = screen.getByLabelText(/password/i);
            const sumbitEl = screen.getByRole("button");
            act(() => {
                userEvent.type(emailEl, email);
                userEvent.type(passwordEl, password);
            });
            userEvent.click(sumbitEl);
            
            expect(createTokens).toHaveBeenCalledWith(expect.objectContaining({ email, password }));
        });
    });
});

