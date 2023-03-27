import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentsApi from "../../api/comments/commentsApi";
import { CommentType, CreateCommentType } from "../../types/commentsTypes";

interface CommentsStateType {
    comments: CommentType[];
    // postId: number | null;
    error: string | null;
    loading: boolean;
};

const initialState: CommentsStateType = {
    comments: [],
    // postId: null,
    error: null,
    loading: false,
};

const createComments = createAsyncThunk<CommentType, CreateCommentType, { rejectValue: string }>(
    "comments/createComments",
    async (data, thunksApi) => {
        try {
            const response = await commentsApi.createComment(data);
            return response.data;
        } catch {
            return thunksApi.rejectWithValue("Server error");
        }
    },
);

const getComments = createAsyncThunk<CommentType[], number, { rejectValue: string }>(
    "comments/getComments",
    async (postId, thunksApi) => {
        try {
            const response = await commentsApi.getComments(postId);
            return response.data;
        } catch {
            return thunksApi.rejectWithValue("Server error");
        }
    },
);

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createComments.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(createComments.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload ?? null;
        });
        builder.addCase(createComments.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.comments.unshift(payload);
        });

        builder.addCase(getComments.pending, (state) => {
            state.comments = [];
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getComments.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload ?? null;
        });
        builder.addCase(getComments.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.comments = payload;
        });
    },
});

export const commentsActions = {
    ...commentsSlice.actions,
    createComments,
    getComments,
};

const commentsReducer = commentsSlice.reducer;
export default commentsReducer;
