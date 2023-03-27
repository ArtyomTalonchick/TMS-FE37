import axios from "axios";
import { CommentType, CreateCommentType } from "../../types/commentsTypes";

const createComment = async (data: CreateCommentType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return axios<CommentType>({
        method: "POST",
        url: "http://localhost:3001/comments",
        data: {
            ...data,
            email: "our@gmail.com",
        },
    });
};

export default createComment;
