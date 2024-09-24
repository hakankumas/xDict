import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import topicReducer from "../features/topic/topicSlice";
import postReducer from "../features/post/postSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        topic: topicReducer,
        post: postReducer,
    },
});
