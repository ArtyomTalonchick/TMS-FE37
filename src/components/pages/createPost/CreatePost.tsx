import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postActions } from "../../../store/post/postSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import C from "../../../styledComponents";
import ImageField from "../../ui/imageField/ImageField";
import Loader from "../../ui/loader/Loader";
import TextField from "../../ui/textField/TextField";
import S from "./CreatePost.styled";

const CreatePost: React.FC = () => {
    const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const post = useAppSelector((state) => state.post.post);
	const postIdRef = useRef(post?.id);
	const loading = useAppSelector((state) => state.post.loading);
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [image, setImage] = useState("");

	useEffect(() => {
		if (post?.id && post?.id !== postIdRef.current) {
			navigate(`/posts/${post?.id}`);
		}
	}, [post]);

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		dispatch(postActions.createPost({
			title,
			body,
			image,
		}));
	};

	console.log(image);

	return (
		<S.container onSubmit={onSubmit}>
			{loading && (
				<Loader />
			)}
			<TextField label="Title" value={title} setValue={setTitle} />
            <TextField label="Body" value={body} setValue={setBody} />
			<ImageField setValue={setImage} />
			<C.button type="submit">
				Submit
			</C.button>
        </S.container>
	);
};

export default CreatePost;
