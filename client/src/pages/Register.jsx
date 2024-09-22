import React, { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
function Register() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [statusText, setStatusText] = useState("");
    const handleSubmit = (e) => {
        if (!email || !username || !password) {
            alert("Please fill all the fields");
            return;
        }
        e.preventDefault();
        setEmail(email);
        setUsername(username);
        setPassword(password);
        const query = {
            email,
            username,
            password,
        };
        axios
            .post("http://localhost:3000/user/register", query)
            .then((res) => {
                setStatusText(res.data.message);
            })
            .catch((err) => {
                setStatusText(err.response.data.message);
            });

        setEmail("");
        setUsername("");
        setPassword("");
    };

    return (
        <div>
            <Container maxWidth="lg">
                <Grid
                    container
                    justifyContent="center"
                    sx={{ padding: "20px" }}
                >
                    <Grid size={{ xs: 12, sm: 8, md: 6 }}>
                        <form
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                border: "1px solid black",
                                padding: "10px",
                            }}
                        >
                            <h1>Register</h1>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email"
                            />
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
                            {statusText && <div>{statusText}</div>}

                            <button onClick={handleSubmit}>Register</button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Register;
