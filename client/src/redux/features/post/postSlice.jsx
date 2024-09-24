import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
};

export const getAllPosts = createAsyncThunk("post/getAllPosts", async () => {
    const response = await axios.get("http://localhost:3000/post/getAll");
    return response.data.posts;
});

export const postSlice = createSlice({
    name: "post",
    initialState,
    // reducers: {
    //     xxx: (state) => {},
    // },
    extraReducers: (builder) => {
        builder.addCase(getAllPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        });
    },
});

// export const { xxx } = postSlice.actions;
export default postSlice.reducer;
