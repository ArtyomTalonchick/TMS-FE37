import React, { useEffect } from "react";
import { postsActions } from "../../../store/posts/postsSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";

const Posts: React.FC = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.posts.posts);

    useEffect(() => {
        dispatch(postsActions.getPostsList());
    }, []);

    console.log(posts);

	return (
		<div>
            Posts
        </div>
	);
};

export default Posts;
