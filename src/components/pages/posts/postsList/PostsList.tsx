import React from "react";
import { PostType } from "../../../../types/postsTypes";
import PostsCard from "../card/PostsCard";
import S from "./PostsList.styled";

export interface PropsType {
    posts: PostType[];
}

const PostsList: React.FC<PropsType> = ({
    posts,
}) => {
	return (
        <S.container>
            {posts.map((post) => (
                <PostsCard
                    key={post.id}
                    dataItem={post}
                />
            ))}
        </S.container>
	);
};

export default PostsList;
