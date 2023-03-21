import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postsApi from "../../api/posts/postsApi";
import { PostType } from "../../types/postsTypes";

interface PostsStateType {
    posts: PostType[];
    error?: string;
    loading: boolean;
}

const initialState: PostsStateType = {
    posts: [],
    error: undefined,
    loading: false,
};

const getPostsList = createAsyncThunk<PostType[], void, { rejectValue: string }>(
    "posts/getPostsList",
    async (data, thunksApi) => {
        try {
            const response = await postsApi.getPostsList();
            return response.data;
        } catch {
            return thunksApi.rejectWithValue("Server error");
        }
    },
);

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPostsList.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            // state.posts = [];
        });

        builder.addCase(getPostsList.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        builder.addCase(getPostsList.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.posts = payload;
        });
    },
});

export const postsActions = {
    ...postsSlice.actions,
    getPostsList,
};

const postsReducer = postsSlice.reducer;
export default postsReducer;
