import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentsApi from "../../api/comments/commentsApi";
import { CommentType, CreateCommentType } from "../../types/commentsTypes";

interface CommentsStateType {
    comments: CommentType[];
    error: string | null;
    loading: boolean;
}

const initialState: CommentsStateType = {
    comments: [],
    error: null,
    loading: false,
};

const getComments = createAsyncThunk<CommentType[], number, { rejectValue: string }>(
    "comments/getComments",
    async (postId, thunksApi) => {
        try {
            const response = await commentsApi.getComments(postId);
            return response.data;
        } catch {
            return thunksApi.rejectWithValue("Server error");
        }
    }
);

const createComment = createAsyncThunk<CommentType, CreateCommentType, { rejectValue: string }>(
    "comments/createComment",
    async (data, thunksApi) => {
        try {
            const response = await commentsApi.createComment(data);
            return response.data;
        } catch {
            return thunksApi.rejectWithValue("Server error");
        }
    }
);

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getComments.pending, (state) => {
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

        builder.addCase(createComment.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(createComment.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload ?? null;
        });
        builder.addCase(createComment.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.comments.unshift(payload);
        });
    },
});

export const commentsActions = {
    ...commentsSlice.actions,
    getComments,
    createComment,
};

const commentsReducer = commentsSlice.reducer;
export default commentsReducer;
