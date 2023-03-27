import axios from "axios";
import { CommentType } from "../../types/commentsTypes";

const getComments = async (postId: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await axios<CommentType[]>({
        method: "GET",
        url: "http://localhost:3001/comments",
        params: {
            postId,
        },
    });

    const sortedData = [...response.data];
    sortedData.sort((a, b) => b.id - a.id);

    return {
        ...response,
        data: sortedData,
    };
};

export default getComments;
