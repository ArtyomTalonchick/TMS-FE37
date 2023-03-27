import React, { useEffect } from "react";
import { commentsActions } from "../../../../store/comments/commentsSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import Loader from "../../../ui/loader/Loader";
import S from "./Comments.styled";
import CommentsItem from "./CommentsItem";
import CommentsForm from "./form/CommentsForm";

interface PropsType {
    postId: number;
}

const Comments: React.FC<PropsType> = ({ postId }) => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector((state) => state.comments.comments);
    const loading = useAppSelector((state) => state.comments.loading);

    useEffect(() => {
        if (postId) {
            dispatch(commentsActions.getComments(postId));
        }
    }, [postId]);

	return (
		<S.container>
            <CommentsForm postId={postId} />
            {loading && <Loader />}
			{comments.map((dataItem) => <CommentsItem key={dataItem.id} dataItem={dataItem} />)}
            {comments.length === 0 && !loading && (
                "No comments"
            )}
        </S.container>
	);
};

export default Comments;
