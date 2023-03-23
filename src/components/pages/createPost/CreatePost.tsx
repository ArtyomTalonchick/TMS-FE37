import React, { useState } from "react";
import { postActions } from "../../../store/post/postSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import C from "../../../styledComponents";
import Loader from "../../ui/loader/Loader";
import TextField from "../../ui/textField/TextField";
import S from "./CreatePost.styled";

const CreatePost: React.FC = () => {
	const dispatch = useAppDispatch();
	const loading = useAppSelector((state) => state.post.loading);
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		dispatch(postActions.createPost({
			title,
			body,
			userId: 123,
		}));
	};

	return (
		<S.container onSubmit={onSubmit}>
			{loading && (
				<Loader />
			)}
			<TextField label="Title" value={title} setValue={setTitle} />
            <TextField label="Body" value={body} setValue={setBody} />
			<C.button type="submit">
				Submit
			</C.button>
        </S.container>
	);
};

export default CreatePost;
