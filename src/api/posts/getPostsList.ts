import axios from "axios";
import { PostType } from "../../types/postsTypes";


const getPostsList = () => (
    axios<PostType[]>({
        method: "GET",
        url: "http://localhost:3001/posts",
    })
);

export default getPostsList;
