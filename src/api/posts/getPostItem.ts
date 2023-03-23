import axios from "axios";
import { PostType } from "../../types/postsTypes";

const getPostItem = async (id: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return axios<PostType>({
        method: "GET",
        url: `http://localhost:3001/posts/${id}`,
    });
};

export default getPostItem;
