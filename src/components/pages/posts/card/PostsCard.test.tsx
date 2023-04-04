import { screen } from "@testing-library/react";
import { PostType } from "../../../../types/postsTypes";
import PostsCard from "./PostsCard";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../../../helpers/testsHelper";

const dataItem: PostType = {
    "userId": 1,
    "id": 1234324290432,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedNavigate,
}));

describe("PostCard component", () => {
    test("Contain id", () => {
        renderWithProviders(<PostsCard dataItem={dataItem} />);

        const idElement = screen.getByText(/1234324290432/);

        expect(idElement).toBeInTheDocument();
    });

    test("Contain title", () => {
        renderWithProviders(<PostsCard dataItem={dataItem} />);

        const titleElement = screen.getByText(new RegExp(dataItem.title));

        expect(titleElement).toBeInTheDocument();
    });

    test("Handle click", () => {
        renderWithProviders(<PostsCard dataItem={dataItem} />);

        const titleElement = screen.getByText(new RegExp(dataItem.title));

        userEvent.click(titleElement);

        expect(mockedNavigate).toHaveBeenCalledWith("/posts/1234324290432");
    });

    // test("Not contain", () => {
    //     renderWithProviders(<PostsCard dataItem={dataItem} />);

    //     const el = screen.queryByText(/ngjvhsdnhfvhfdmndbf/);

    //     expect(el).not.toBeInTheDocument();
    // });

    // test("Contain", async () => {
    //     renderWithProviders(<PostsCard dataItem={dataItem} />);

    //     const clickEl = screen.getByRole("button");

    //     userEvent.click(clickEl);

    //     const el = await screen.findByText(/ngjvhsdnhfvhfdmndbf/);

    //     expect(el).toBeInTheDocument();
    // });
});
