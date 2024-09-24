import "./scss/index.scss";
import React, { useEffect, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./components/Logout";

import UserHome from "./pages/UserHome";
import { isSession } from "./redux/features/auth/authSlice";

function App() {
    // console.log("App is rendered.");
    const ls_username = localStorage?.getItem("username");
    const ls_token = localStorage?.getItem("token");
    const ls_isSession = JSON.parse(localStorage?.getItem("isSession"));

    const { sessionData } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (ls_username && ls_token && ls_isSession) {
            dispatch(isSession());
        }
    }, []);

    const session = useMemo(() => {
        return sessionData;
    }, [sessionData]);

    return (
        <div>
            <Header sessionData={session} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/topic/:slug" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />

                <Route path="/user/" element={<UserHome />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
