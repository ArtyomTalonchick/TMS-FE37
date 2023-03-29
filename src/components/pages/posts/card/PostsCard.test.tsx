import { render, screen  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../../../theme/theme";
import { PostType } from "../../../../types/postsTypes";
import PostsCard from "./PostsCard";

const renderWitProviders = (component: JSX.Element) => ({...render(
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
            {component}
        </BrowserRouter>
    </ThemeProvider>
)});

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

const dataItem: PostType = {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};

describe("PostCard", () => {
    test("Include id", () => {
        renderWitProviders(<PostsCard dataItem={dataItem} />);
        const contentElement = screen.getByText(/1/);
        expect(contentElement).toBeInTheDocument();
    });
    test("Include title", () => {
        renderWitProviders(<PostsCard dataItem={dataItem} />);
        const contentElement = screen.getByText(new RegExp(dataItem.title.substring(0, 30)));
        expect(contentElement).toBeInTheDocument();
    });
    test("Include body", () => {
        renderWitProviders(<PostsCard dataItem={dataItem} />);
        const contentElement = screen.getByText(/quia et suscipit/);
        expect(contentElement).toBeInTheDocument();
    });

    test("Handle click", () => {
        renderWitProviders(<PostsCard dataItem={dataItem} />);
        const contentElement = screen.getByText(/1/);
        userEvent.click(contentElement);

        expect(mockedNavigate).toHaveBeenCalledWith("/posts/1");
    });
});
