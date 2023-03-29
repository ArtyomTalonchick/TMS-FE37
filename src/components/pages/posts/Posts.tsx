import React from "react";
import { useAppSelector } from "../../../store/store";
import Loader from "../../ui/loader/Loader";
import PostsFilter from "./filter/PostsFilter";
import S from "./Posts.styled";
import PostsList from "./postsList/PostsList";

const Posts: React.FC = () => {
    const posts = useAppSelector((state) => state.posts.posts);
    const loading = useAppSelector((state) => state.posts.loading);

	return (
		<S.container>
            {loading && <Loader />}
            <PostsFilter />
            <PostsList posts={posts} />
        </S.container>
	);
};

export default Posts;
