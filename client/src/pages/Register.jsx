import React, { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid2";
import {
    Box,
    Button,
    Container,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Item = styled(Paper)(({ theme }) => ({
    fontFamily: "monospace",
    boxShadow: "none",
    backgroundColor: "transparent",
    textAlign: "center",
}));
function Register() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [statusText, setStatusText] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
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
            <Container maxWidth="xl">
                <Grid container direction="row" spacing={6}>
                    <Grid
                        size={{ xs: 12, sm: 8, md: 5 }}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <form
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                border: "1px solid black",
                                padding: "40px 50px",
                                margin: "0px 40px",
                                boxShadow: "1px 1px 3px 1px black",
                                borderRadius: "10px",
                                gap: "20px",
                            }}
                        >
                            <Typography
                                sx={{
                                    textAlign: "left",
                                    fontSize: "25px",
                                }}
                            >
                                Create a new account?
                            </Typography>
                            <TextField
                                label="Email"
                                type="email"
                                variant="outlined"
                                sx={{ width: "100%" }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Username"
                                variant="outlined"
                                sx={{ width: "100%" }}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <FormControl
                                sx={{ width: "100%" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                                onMouseUp={
                                                    handleMouseUpPassword
                                                }
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </FormControl>
                            <Item>
                                <Typography
                                    sx={{
                                        textAlign: "right",
                                        fontSize: "15px",
                                    }}
                                >
                                    Already have an account?{" "}
                                    <Link
                                        to="/login"
                                        style={{
                                            color: "#71bcd2",
                                            textDecoration: "none",
                                        }}
                                    >
                                        Login
                                    </Link>
                                </Typography>
                            </Item>
                            {statusText && (
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        color: "green",
                                        fontSize: "15px",
                                    }}
                                >
                                    {statusText}
                                </Typography>
                            )}
                            <Item
                                sx={{
                                    boxShadow: "none",
                                    padding: "0",
                                    display: "flex",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={handleSubmit}
                                >
                                    Let's Create!
                                </Button>
                            </Item>
                        </form>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4, md: 7 }}>
                        <Box
                            sx={{
                                width: "100%",
                                height: "100vh",
                                backgroundColor: "#71bcd2",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <Stack
                                spacing={3}
                                sx={{
                                    padding: "70px",
                                }}
                            >
                                <Item>
                                    <Typography
                                        sx={{
                                            textAlign: "start",
                                            fontWeight: "bold",
                                            fontSize: "40px",
                                        }}
                                    >
                                        xDict!
                                    </Typography>
                                </Item>
                                <Item>
                                    <Typography
                                        sx={{
                                            textAlign: "start",
                                            fontWeight: "bold",
                                            fontSize: "25px",
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet!
                                    </Typography>
                                </Item>
                                <Item>
                                    <Typography
                                        sx={{
                                            textAlign: "start",
                                            fontSize: "17px",
                                        }}
                                    >
                                        Rerum perspiciatis blanditiis nemo
                                        tempora repellendus deserunt animi alias
                                        quia at porro maxime. Consequatur,
                                        quisquam natus?
                                    </Typography>
                                </Item>
                                <Item>
                                    <Typography
                                        sx={{
                                            textAlign: "start",
                                            fontSize: "17px",
                                        }}
                                    >
                                        Mollitia aliquam, nesciunt reiciendis
                                        perspiciatis eaque dignissimos
                                        blanditiis officia libero incidunt aut.
                                    </Typography>
                                </Item>
                                <Item>
                                    <Typography
                                        sx={{
                                            textAlign: "start",
                                            fontSize: "17px",
                                        }}
                                    >
                                        Aliquid ad nam cupiditate dolore nobis
                                        asperiores rerum, odio reprehenderit
                                        minima nihil sequi dicta corrupti!
                                    </Typography>
                                </Item>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Register;
