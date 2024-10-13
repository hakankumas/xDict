import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../utils/api";

const initialState = {
    posts: [],
    filteredPosts: [],
    postsOfUser: [],
};

export const getAllPosts = createAsyncThunk("post/getAllPosts", async () => {
    const response = await api().get("/post/getAll");
    return response.data.posts;
});

export const addPost = createAsyncThunk("post/add", async (condition) => {
    const response = await api().post("/post/add", condition);
    return response.data.newPost;
});

export const deletePost = createAsyncThunk("post/delete", async (condition) => {
    const response = await api().post("/post/delete", condition);
    return response.data.deletedPost;
});

export const updatePost = createAsyncThunk("post/update", async (condition) => {
    const response = await api().post("/post/update", condition);
    return response.data.updatedPost;
});

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        postsTopic: (state, action) => {
            state.filteredPosts = state.posts.filter(
                (post) => post.topic.slug === action.payload
            );
        },
        postOfUser: (state, action) => {
            state.postsOfUser = state.posts.filter(
                (post) => post.user.username === action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        }),
            builder.addCase(addPost.fulfilled, (state, action) => {
                state.posts = [...state.posts, action.payload];
            }),
            builder.addCase(deletePost.fulfilled, (state, action) => {
                state.posts = [
                    ...state.posts.filter(
                        (post) => post._id !== action.payload._id
                    ),
                ];
            }),
            builder.addCase(updatePost.fulfilled, (state, action) => {
                state.posts = [
                    ...state.posts.map((post) =>
                        post._id !== action.payload._id ? post : action.payload
                    ),
                ];
            });
    },
});

export const { postsTopic, postOfUser } = postSlice.actions;
export default postSlice.reducer;
