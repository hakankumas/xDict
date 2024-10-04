import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
    filteredPosts: [],
    postsOfUser: [],
};

export const getAllPosts = createAsyncThunk("post/getAllPosts", async () => {
    const response = await axios.get("http://localhost:3000/post/getAll");
    return response.data.posts;
});

export const addPost = createAsyncThunk("post/add", async (condition) => {
    const response = await axios.post(
        "http://localhost:3000/post/add",
        condition
    );
    return response.data.newPost;
});

export const deletePost = createAsyncThunk("post/delete", async (condition) => {
    const response = await axios.post(
        "http://localhost:3000/post/delete",
        condition
    );
    return response.data.deletedPost;
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
            });
    },
});

export const { postsTopic, postOfUser } = postSlice.actions;
export default postSlice.reducer;
