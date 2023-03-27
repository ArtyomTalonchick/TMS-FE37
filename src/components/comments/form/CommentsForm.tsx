import React, { useState, useEffect } from "react";
import { commentsActions } from "../../../store/comments/commentsSlice";
import { useAppDispatch } from "../../../store/store";
import TextField from "../../ui/textField/TextField";
import S from "./CommentsForm.styled";

interface PropsType {
    postId: number;
}

const CommentsForm: React.FC<PropsType> = ({
    postId,
}) => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const validate = () => {
        if (value.length === 0) {
            setError("Required field");
        }
    }

    useEffect(() => {
        setError("");
    }, [value]);

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        validate();

        if (!error) {
            dispatch(commentsActions.createComment({
                body: value,
                postId,
            }));
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