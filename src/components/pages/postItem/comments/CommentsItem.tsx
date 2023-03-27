import React from "react";
import { CommentType } from "../../../../types/commentsTypes";
import TextField from "../../../ui/textField/TextField";

interface PropsType {
    dataItem: CommentType;
}

const CommentsItem: React.FC<PropsType> = ({ dataItem }) => {
	return (
		<TextField label={dataItem.email} value={dataItem.body} disabled />
	);
};

export default CommentsItem;
