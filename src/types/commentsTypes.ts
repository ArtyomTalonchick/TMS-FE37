export interface CommentType {
    postId: number;
    id: number;
    body: string;
    email: string;
};

export interface CreateCommentType extends Omit<CommentType, "id" | "email"> {}
