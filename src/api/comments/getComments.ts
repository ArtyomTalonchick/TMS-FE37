import axios from "axios";
import { CommentType } from "../../types/commentsTypes";

const getComments = async (postId: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return axios<CommentType[]>({
        method: "GET",
        url: "http://localhost:3001/comments",
        params: {
            postId,
            _sort: "id",
            _order: "desc",
        },
    });
};

export default getComments;
