import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { postActions } from "../../../store/post/postSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import Loader from "../../ui/loader/Loader";
import TextField from "../../ui/textField/TextField";
import S from "./PostItem.styled";

const PostItem: React.FC = () => {
	const dispatch = useAppDispatch();
	const loading = useAppSelector((state) => state.post.loading);
	const post = useAppSelector((state) => state.post.post);
	const { id } = useParams();

	useEffect(() => {
		dispatch(postActions.getPost(+(id ?? 0)));
	}, [id]);

	return (
		<S.container>
			{loading && (
				<Loader />
			)}
			{post && (
				<>
					<TextField label="Title" value={post.title} />
					<TextField label="Body" value={post.body} />
				</>
			)}
        </S.container>
	);
};

export default PostItem;
