import React, { useState, useEffect } from "react";
import { commentsActions } from "../../../store/comments/commentsSlice";
import { useAppDispatch } from "../../../store/store";
import TextField from "../../ui/textField/TextField";
import S from "./CommentsForm.styled";

interface PropsType {
    postId: number;
}

const getCommentFormError = (value: string): string => {
    if (value.length === 0) {
        return "Required field";
    }

    if (value.length > 20) {
        return `Max length is 20`;
    }

    return "";
}

const CommentsForm: React.FC<PropsType> = ({
    postId,
}) => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        setError("");
    }, [value]);

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newError = getCommentFormError(value);
        setError(newError);

        if (!newError) {
            dispatch(commentsActions.createComment({
                body: value,
                postId,
            }));
            setValue("");
        }
    };

    return (
        <S.container onSubmit={onSubmit}>
            <TextField
                label="Comment"
                value={value}
                setValue={setValue}
                error={error}
            />
            <S.button type="submit">
                Submit
            </S.button>
        </S.container>

    );
};

export default CommentsForm;