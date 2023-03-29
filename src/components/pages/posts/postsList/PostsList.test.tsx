import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../../../theme/theme";
import { PostType } from "../../../../types/postsTypes";
import PostsCard from "../card/PostsCard";
import PostsList from "./PostsList";

jest.mock("../card/PostsCard");
const PostsCardMock = PostsCard as jest.Mock;

const renderWitProviders = (component: JSX.Element) => ({...render(
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
            {component}
        </BrowserRouter>
    </ThemeProvider>
)});

const data: PostType[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
];

describe("PostsList", () => {
    test("Values", () => {
        renderWitProviders(<PostsList posts={data} />);
        expect(PostsCardMock.mock.calls).toHaveLength(2);
        expect(PostsCardMock.mock.calls[0][0]).toMatchObject({ dataItem: data[0] });
        expect(PostsCardMock.mock.calls[1][0]).toMatchObject({ dataItem: data[1] });
    });
});
