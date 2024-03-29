import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";
import authReducer from "./auth/authSlice";
import commentsReducer from "./comments/commentsSlice";
import postReducer from "./post/postSlice";
import postsReducer from "./posts/postsSlice";
import settingsReducer from "./settings/settingsSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        settings: settingsReducer,
        posts: postsReducer,
        post: postReducer,
        comments: commentsReducer,
    },
});


type AppDispatchType = typeof store.dispatch;

export const useAppDispatch: () => AppDispatchType = useDispatch;

type RootStateType = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
