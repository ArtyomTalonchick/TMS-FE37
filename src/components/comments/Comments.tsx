import React, { useEffect } from "react";
import { commentsActions } from "../../store/comments/commentsSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Loader from "../ui/loader/Loader";
import S from "./Comments.styled";
import CommentsForm from "./form/CommentsForm";
import CommentsItem from "./item/CommentsItem";

interface PropsType {
    postId: number;
}

const Comments: React.FC<PropsType> = ({
    postId,
}) => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector((state) => state.comments.loading);
    const comments = useAppSelector((state) => state.comments.comments);

    useEffect(() => {
        dispatch(commentsActions.getComments(postId));
    }, [postId]);

    return (
        <S.container>
            Comments
            {loading && (
                <Loader />
            )}
            <CommentsForm postId={postId} />
            {comments.map((dataItem) => (
                <CommentsItem key={dataItem.id} dataItem={dataItem} />
            ))}
        </S.container>
    );
};

export default Comments;
