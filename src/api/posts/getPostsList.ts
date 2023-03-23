import axios from "axios";
import { PostsFilterType, PostType } from "../../types/postsTypes";

const getPostsList = async (filter: PostsFilterType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return axios<PostType[]>({
        method: "GET",
        url: "http://localhost:3001/posts",
        params: {
            _sort: filter.sortField,
            _order: filter.sortDir,
            q: filter.query,
            _page: filter.page,
            _limit: filter.limit,
        },
    });
};

export default getPostsList;
