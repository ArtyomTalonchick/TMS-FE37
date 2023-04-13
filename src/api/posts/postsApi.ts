import createPost from "./createPost";
import editPost from "./editPost";
import getPostItem from "./getPostItem";
import getPostsList from "./getPostsList"

const postsApi = {
    getPostsList,
    editPost,
    getPostItem,
    createPost,
};

export default postsApi;
