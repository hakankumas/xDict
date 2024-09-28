import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    topics: [],
};

export const getAllTopics = createAsyncThunk("topic/getAllTopics", async () => {
    const response = await axios.get("http://localhost:3000/topic/getAll");
    return response.data.topics;
});

export const addTopic = createAsyncThunk("topic/add", async (condition) => {
    const response = await axios.post(
        "http://localhost:3000/topic/add",
        condition
    );
    return response.data.newTopic;
});

export const topicSlice = createSlice({
    name: "topic",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllTopics.fulfilled, (state, action) => {
            state.topics = action.payload;
        }),
            builder.addCase(addTopic.fulfilled, (state, action) => {
                state.topics = [...state.topics, action.payload];
            }),
            builder.addCase(addTopic.rejected, (state, action) => {
                console.log("Processing rejected.");
            });
    },
});

export default topicSlice.reducer;
