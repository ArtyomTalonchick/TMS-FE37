import React, { useState } from "react";
import { commentsActions } from "../../../../../store/comments/commentsSlice";
import { useAppDispatch } from "../../../../../store/store";
import TextField from "../../../../ui/textField/TextField";
import S from "./CommentsForm.styled";

interface PropsType {
    postId: number;
}

const CommentsForm: React.FC<PropsType> = ({ postId }) => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState("");
    
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(commentsActions.createComments({
            postId,
            body: value,
        }));
        setValue("");
    };

	return (
        <S.container onSubmit={onSubmit}>
            <TextField label="Comment" value={value} setValue={setValue} />
            <S.button type="submit">
                Submit
            </S.button>
        </S.container>
		
	);
};

export default CommentsForm;
