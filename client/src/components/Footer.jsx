import Grid from "@mui/material/Grid2";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    fontFamily: "monospace",
    boxShadow: "none",
    backgroundColor: "transparent",
    textAlign: "center",
}));

function Footer() {
    return (
        <footer>
            <Grid container>
                <Grid
                    size={4}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Item>
                        <Typography
                            variant="subtitle2"
                            color="white"
                            component="div"
                        >
                            xDict is a MERN Stack project.
                        </Typography>
                    </Item>
                </Grid>

                <Grid
                    size={4}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Item>
                        <Typography
                            variant="subtitle2"
                            color="white"
                            component="div"
                        >
                            Powered by Hakan KUMAŞ
                        </Typography>
                    </Item>
                </Grid>
                <Grid
                    size={4}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "30px",
                        paddingTop: "10px",
                    }}
                >
                    <Item
                        sx={{
                            margin: "0px 15px",
                            cursor: "pointer",
                            color: "white",
                        }}
                    >
                        <Link
                            to="https://github.com/hakankumas"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            <FaGithub />
                        </Link>
                    </Item>
                    <Item
                        sx={{
                            margin: "0px 15px",
                            cursor: "pointer",
                            color: "white",
                        }}
                    >
                        <Link
                            to="https://www.linkedin.com/in/hakankumas/"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            <FaLinkedin />
                        </Link>
                    </Item>
                </Grid>
            </Grid>
        </footer>
    );
}

export default Footer;
