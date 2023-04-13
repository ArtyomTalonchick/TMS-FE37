import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postActions } from "../../../store/post/postSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import Comments from "../../comments/Comments";
import Loader from "../../ui/loader/Loader";
import TextField from "../../ui/textField/TextField";
import S from "./PostItem.styled";
import C from "../../../styledComponents";
import { PostType } from "../../../types/postsTypes";

const PostItem: React.FC = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const dispatch = useAppDispatch();
	const loading = useAppSelector((state) => state.post.loading);
	const post = useAppSelector((state) => state.post.post);
	const userId = useAppSelector((state) => state.auth.id);
	const { id } = useParams();
	const postId = +(id ?? 0);

	useEffect(() => {
		if (post) {
			setTitle(post.title);
			setBody(post.body);
		}
	}, [post]);

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

	const handleEdit = () => {
		const newPost: PostType = {
			...post!,
			title,
			body,
		};

		dispatch(postActions.editPost(newPost));
	};

	const isOwnPost = userId === post?.userId;

	return (
		<>
			<S.container>
				{loading && (
					<Loader />
				)}
				{post && (
					<>
						<TextField label="Title" value={title} setValue={setTitle} disabled={!isOwnPost} />
						<TextField label="Body" value={body} setValue={setBody} disabled={!isOwnPost} />
						{post.image && (
							<S.img
								alt="not found"
								src={post.image}
							/>
						)}
						{isOwnPost && (
							<C.button type="button" onClick={handleEdit}>
								Edit
							</C.button>
						)}
					</>
				)}
			</S.container>
			<Comments postId={postId} />
		</>
	);
};

export default PostItem;
