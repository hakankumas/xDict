import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import MentionItem from "./MentionItem";
import { postOfUser } from "../redux/features/post/postSlice";
import { useDispatch, useSelector } from "react-redux";
import ProfileInfo from "./ProfileInfo";

const Item = styled(Paper)(({ theme }) => ({
    fontFamily: "monospace",
    boxShadow: "none",
    backgroundColor: "transparent",
    textAlign: "center",
}));
function Profile() {
    const { posts, postsOfUser } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const username = localStorage?.getItem("username");

    useEffect(() => {
        dispatch(postOfUser(username));
    }, [posts]);
    return (
        <div className="profile">
            <Grid container>
                <Grid size={12}>
                    <Stack spacing={1} sx={{ marginTop: "1%" }}>
                        <ProfileInfo />
                    </Stack>

                    <Stack spacing={1} sx={{ marginTop: "10%" }}>
                        <Item>
                            <Typography variant="h6" component="div">
                                My Last Mentions
                            </Typography>
                        </Item>
                        <Item>
                            {postsOfUser &&
                                postsOfUser.map((item) => (
                                    <MentionItem key={item._id} item={item} />
                                ))}
                        </Item>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
}

export default Profile;
