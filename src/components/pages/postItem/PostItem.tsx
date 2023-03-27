import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { postActions } from "../../../store/post/postSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import Comments from "../../comments/Comments";
import Loader from "../../ui/loader/Loader";
import TextField from "../../ui/textField/TextField";
import S from "./PostItem.styled";

const PostItem: React.FC = () => {
	const dispatch = useAppDispatch();
	const loading = useAppSelector((state) => state.post.loading);
	const post = useAppSelector((state) => state.post.post);
	const { id } = useParams();
	const postId = +(id ?? 0);

	useEffect(() => {
		if (postId) {
			dispatch(postActions.getPost(postId));
		}
	}, [id]);

	if (!postId) {
		return (
			<div>
				Error
			</div>
		);
	}

	return (
		<>
			<S.container>
				{loading && (
					<Loader />
				)}
				{post && (
					<>
						<TextField label="Title" value={post.title} disabled />
						<TextField label="Body" value={post.body} disabled />
					</>
				)}
			</S.container>
			<Comments postId={postId} />
		</>
	);
};

export default PostItem;
