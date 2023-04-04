import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../helpers/testsHelper";
import LoginView, { PropsType } from "./LoginView";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

jest.mock("../../../hooks/useTranslations", () => {
    return () => ({
        t: jest.requireActual("../../../resources/locales/en.json"),
        toggleLanguage: () => {},
    })
});

const renderLoginView = (props: Partial<PropsType> = {}) => 
    renderWithProviders(<LoginView loading={false} onSubmit={() => {}} {...props} />);

describe("LoginView", () => {
    describe("Include element", () => {
        test("Header", () => {
            renderLoginView();

            const headerEl = screen.getByText(/login/i);

            expect(headerEl).toBeInTheDocument();
        });

        test("Email", () => {
            renderLoginView();

            const emailField = screen.getByLabelText(/email/i);

            expect(emailField).toBeInTheDocument();
        });

        test("Password", () => {
            renderLoginView();

            const passwordField = screen.getByLabelText(/password/i);

            expect(passwordField).toBeInTheDocument();
        });

        test("Loader", () => {
            renderLoginView({ loading: true });

            const loaderEl = screen.getByRole("progressbar");

            expect(loaderEl).toBeInTheDocument();
        });
    });

    describe("Handlers", () => {
        test("Email", () => {
            renderLoginView();
            const emailField = screen.getByLabelText(/email/i);
            const emailText = "email@dsgfsd.fsd";
            
            // eslint-disable-next-line testing-library/no-unnecessary-act
            act(() => {
                userEvent.type(emailField, emailText);
            });

            expect(emailField).toHaveValue(emailText);
        });
    });
});
