import React from "react";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Item = styled(Paper)(({ theme }) => ({
    fontFamily: "monospace",
    boxShadow: "none",
    backgroundColor: "transparent",
    textAlign: "center",
}));

function WhoAreWe() {
    return (
        <div>
            <Grid
                container
                sx={{
                    backgroundColor: "#c5e4ff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                    minHeight: "100vh",
                    gap: "10px",
                    paddingTop: "25px",
                }}
            >
                <Grid sx={{ width: "80%" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi qui cum nam placeat debitis aliquid accusantium
                    deleniti tempore vero porro. Facilis temporibus numquam ut
                    suscipit id quae necessitatibus libero velit.
                </Grid>
                <Grid sx={{ width: "80%" }}>
                    Assumenda numquam eligendi eaque asperiores culpa
                    repellendus possimus saepe. Adipisci aspernatur nulla maxime
                    quos. Architecto accusamus aliquam modi ab ut ipsa delectus.
                </Grid>
                <Grid sx={{ width: "80%" }}>
                    Eius dolore similique tempora, veniam eveniet fugiat
                    perferendis, adipisci, impedit totam cupiditate libero
                    dignissimos quis labore alias soluta ab quaerat consequuntur
                </Grid>
                <Grid sx={{ width: "80%" }}>
                    Unde cumque voluptate quas a ad harum. Nesciunt
                    reprehenderit odit sapiente.
                </Grid>
                <Grid
                    sx={{
                        width: "80%",
                        marginTop: "10%",
                        boxShadow: "0px 0px 5px 0px gray",
                        borderRadius: "10px",
                        backgroundColor: "whitesmoke",
                        padding: "15px 20px",
                    }}
                >
                    <Item>
                        <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: "bold", fontSize: "16px" }}
                        >
                            xDict is a MERN Stack project.
                        </Typography>
                    </Item>

                    <Item>
                        <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: "bold", fontSize: "16px" }}
                        >
                            Powered by Hakan KUMAŞ
                        </Typography>
                    </Item>
                    <Item
                        sx={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            fontSize: "30px",
                            paddingTop: "10px",
                            margin: "0px 50px",
                            cursor: "pointer",
                        }}
                    >
                        <Link
                            to="https://github.com/hakankumas"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <FaGithub />
                        </Link>
                        <Link
                            to="https://www.linkedin.com/in/hakankumas/"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <FaLinkedin />
                        </Link>
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
}

export default WhoAreWe;
