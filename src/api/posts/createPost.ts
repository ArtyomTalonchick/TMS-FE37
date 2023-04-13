import axios from "axios";
import { CreatePostType, PostType } from "../../types/postsTypes";

const createPost = async (data: CreatePostType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return axios<PostType>({
        method: "POST",
        url: "http://localhost:3001/posts",
        data,
    });
};

export default createPost;
