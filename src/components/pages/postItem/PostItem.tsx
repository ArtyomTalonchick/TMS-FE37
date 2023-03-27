import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { postActions } from "../../../store/post/postSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import Loader from "../../ui/loader/Loader";
import TextField from "../../ui/textField/TextField";
import Comments from "./comments/Comments";
import S from "./PostItem.styled";

const PostItem: React.FC = () => {
	const dispatch = useAppDispatch();
	const loading = useAppSelector((state) => state.post.loading);
	const post = useAppSelector((state) => state.post.post);
	const { id } = useParams();
	const postId = +(id ?? 0)

	useEffect(() => {
		dispatch(postActions.getPost(postId));
		return () => {
			dispatch(postActions.clearPost());
		};
	}, [id]);

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
						{post.image && (
							<S.img
								alt="not found"
								src={post.image}
							/>
						)}
					</>
				)}
			</S.container>
			<Comments postId={postId} />
		</>
	);
};

export default PostItem;
