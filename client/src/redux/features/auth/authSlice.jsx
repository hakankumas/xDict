import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../utils/api";

const initialState = {
    user: {},
    sessionData: false,
    systemMessage: null,
};

export const login = createAsyncThunk(
    "auth/login",
    async (condition, { rejectWithValue }) => {
        try {
            const response = await api().post("/user/login", condition);
            const username = response.data.user.username;
            const token = response.data.token;
            const message = response.data.status;
            const returnData = {
                username,
                token,
                message,
            };
            localStorage.setItem("username", username);
            localStorage.setItem("token", token);
            localStorage.setItem("isSession", true);
            return returnData;
        } catch (error) {
            console.log(error);
            if (error.response.data.message) {
                return rejectWithValue(error.response.data.message); // Backend'den gelen hata mesajı
            } else {
                return rejectWithValue("Something went wrong."); // Özel hata mesajı
            }
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        isSession: (state) => {
            state.user = {
                username: localStorage.getItem("username"),
                token: localStorage.getItem("token"),
            };
            state.sessionData = JSON.parse(localStorage.getItem("isSession"));
            state.systemMessage = null;
        },
        logout: (state) => {
            state.user = {};
            state.sessionData = false;
            state.systemMessage = null;
            localStorage.removeItem("username");
            localStorage.removeItem("token");
            localStorage.removeItem("isSession");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.user = {
                    username: action.payload.username,
                    token: action.payload.token,
                };
                state.sessionData = true;
                state.systemMessage = action.payload.message;
            })
            .addCase(login.rejected, (state, action) => {
                state.sessionData = false;
                state.systemMessage = action.payload || action.error.message;
            });
    },
});

export const { isSession, logout } = authSlice.actions;
export default authSlice.reducer;
