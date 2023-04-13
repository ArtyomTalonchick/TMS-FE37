import axios from "axios";
import { PostType } from "../../types/postsTypes";

const editPost = async (data: PostType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return axios<PostType>({
        method: "PUT",
        url: `http://localhost:3001/posts/${data.id}`,
        data,
    });
};

export default editPost;
