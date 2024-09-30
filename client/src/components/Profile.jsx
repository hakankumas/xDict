import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import MentionItem from "./MentionItem";

const Item = styled(Paper)(({ theme }) => ({
    fontFamily: "monospace",
    boxShadow: "none",
    backgroundColor: "transparent",
    textAlign: "center",
}));
function Profile() {
    return (
        <div className="profile">
            <Grid container>
                <Grid size={12}>
                    <Stack spacing={1} sx={{ marginTop: "1%" }}>
                        <Item>
                            <img
                                src="https://randomuser.me/portraits/men/42.jpg"
                                style={{ borderRadius: "50%" }}
                            />
                        </Item>
                        <Item>
                            <h4>Anakin Skywalker</h4>
                        </Item>
                        <Item>
                            <h5>@skywalker</h5>
                        </Item>
                    </Stack>

                    <Stack spacing={1} sx={{ marginTop: "10%" }}>
                        <Item>
                            <Typography variant="h6" component="div">
                                My Last Mentions
                            </Typography>
                        </Item>
                        <Item>
                            <MentionItem />
                        </Item>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
}

export default Profile;
