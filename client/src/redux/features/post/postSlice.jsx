import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
    filteredPosts: [],
};

export const getAllPosts = createAsyncThunk("post/getAllPosts", async () => {
    const response = await axios.get("http://localhost:3000/post/getAll");
    return response.data.posts;
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
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        });
    },
});

export const { postsTopic } = postSlice.actions;
export default postSlice.reducer;
