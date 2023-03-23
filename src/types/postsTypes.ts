export interface PostType {
    userId: number;
    id: number;
    title: string
    body: string;
};

// export type CreatePostType = Omit<PostType, "id">;
export interface CreatePostType extends Omit<PostType, "id"> {}

export interface PostsFilterType {
    sortField: string;
    sortDir: string;
    query: string;
    limit: number;
    page: number;
}
