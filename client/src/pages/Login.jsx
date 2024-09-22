import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [statusText, setStatusText] = useState("");

    const dispatch = useDispatch();
    const { sessionData, systemMessage } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!username || !password) {
            alert("Please fill all the fields");
            return;
        }
        setUsername(username);
        setPassword(password);
        const condition = {
            username,
            password,
        };
        dispatch(login(condition));
    };

    useEffect(() => {
        // console.log({ sessionData, systemMessage });
        if (sessionData) {
            navigate("/user/");
        } else {
            setStatusText(systemMessage);
            setUsername("");
            setPassword("");
        }
    }, [sessionData, systemMessage]);

    return (
        <div>
            <Container maxWidth="lg">
                <Grid
                    container
                    justifyContent="center"
                    sx={{ padding: "20px" }}
                >
                    <Grid size={{ xs: 12, sm: 8, md: 6 }}>
                        {statusText && <div>{statusText}</div>}

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                border: "1px solid black",
                                padding: "10px",
                            }}
                        >
                            <h1>Login</h1>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="username"
                            />
                            <input
                                type="text"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="password"
                            />
                            <button onClick={handleSubmit}>Login</button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Login;
