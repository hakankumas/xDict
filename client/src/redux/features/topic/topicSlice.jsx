import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    topics: [],
};

export const getAllTopics = createAsyncThunk("topic/getAllTopics", async () => {
    const response = await axios.get("http://localhost:3000/topic/getAll");
    return response.data.topics;
});

export const topicSlice = createSlice({
    name: "topic",
    initialState,
    // reducers: {
    //     xxx: (state) => {},
    // },
    extraReducers: (builder) => {
        builder.addCase(getAllTopics.fulfilled, (state, action) => {
            state.topics = action.payload;
        });
    },
});

// export const { xxx } = topicSlice.actions;
export default topicSlice.reducer;
