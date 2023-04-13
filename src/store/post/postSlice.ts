import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postsApi from "../../api/posts/postsApi";
import { CreatePostType, PostType } from "../../types/postsTypes"

interface PostStateType {
    post: PostType | null;
    error: string | null;
    loading: boolean;
};

const initialState: PostStateType = {
    post: null,
    error: null,
    loading: false,
};

const createPost = createAsyncThunk<PostType, CreatePostType, { rejectValue: string }>(
    "posts/createPost",
    async (data, thunksApi) => {
        try {
            const response = await postsApi.createPost(data);
            return response.data;
        } catch {
            return thunksApi.rejectWithValue("Server error");
        }
    },
);

const getPost = createAsyncThunk<PostType, number, { rejectValue: string }>(
    "posts/getPost",
    async (postId, thunksApi) => {
        try {
            const response = await postsApi.getPostItem(postId);
            return response.data;
        } catch {
            return thunksApi.rejectWithValue("Server error");
        }
    },
);

const editPost = createAsyncThunk<PostType, PostType, { rejectValue: string }>(
    "posts/editPost",
    async (newPost, thunksApi) => {
        try {
            const response = await postsApi.editPost(newPost);
            return response.data;
        } catch {
            return thunksApi.rejectWithValue("Server error");
        }
    },
);

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createPost.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(createPost.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload ?? null;
        });
        builder.addCase(createPost.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.post = payload;
        });

        builder.addCase(getPost.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.post = null;
        });
        builder.addCase(getPost.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload ?? null;
        });
        builder.addCase(getPost.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.post = payload;
        });

        builder.addCase(editPost.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(editPost.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload ?? null;
        });
        builder.addCase(editPost.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.post = payload;
        });
    },
});

export const postActions = {
    ...postSlice.actions,
    createPost,
    getPost,
    editPost,
};

const postReducer = postSlice.reducer;
export default postReducer;
