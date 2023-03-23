import React from "react";
import { useAppSelector } from "../../../store/store";
import Loader from "../../ui/loader/Loader";
import PostsCard from "./card/PostsCard";
import PostsFilter from "./filter/PostsFilter";
import S from "./Posts.styled";

const Posts: React.FC = () => {
    const posts = useAppSelector((state) => state.posts.posts);
    const loading = useAppSelector((state) => state.posts.loading);

	return (
		<S.container>
            {loading && (
                <Loader />
            )}
            <PostsFilter />
            <S.postsList>
                {posts.map((post) => (
                    <PostsCard
                        key={post.id}
                        dataItem={post}
                    />
                ))}
            </S.postsList>
        </S.container>
	);
};

export default Posts;
