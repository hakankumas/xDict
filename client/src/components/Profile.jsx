import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
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
    const [postSharedByUser, setPostSharedByUser] = useState("");
    const [topicOfPostSharedByUser, setTopicOfPostSharedByUser] = useState("");
    useEffect(() => {
        dispatch(postOfUser(username));
    }, [posts]);

    useEffect(() => {
        if (postsOfUser) {
            const postSharedByUser_x = postsOfUser.length;
            const topicOfPostSharedByUser_x = new Set(
                postsOfUser.map((post) => post.topic._id)
            ).size;

            setPostSharedByUser(postSharedByUser_x);
            setTopicOfPostSharedByUser(topicOfPostSharedByUser_x);
        }
    }, [postsOfUser]);
    return (
        <div className="profile">
            <Grid container>
                <Grid size={12} spacing={1} sx={{ marginTop: "1%" }}>
                    <ProfileInfo />
                </Grid>
                {!postSharedByUser ? (
                    <Grid size={12} spacing={1} sx={{ marginTop: "10%" }}>
                        <Item>
                            <Typography
                                variant="h6"
                                sx={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    fontStyle: "italic",
                                }}
                            >
                                No Mention
                            </Typography>
                        </Item>
                    </Grid>
                ) : (
                    <>
                        <Grid className="my-count">
                            <Grid>
                                <Item>
                                    <Typography variant="caption">
                                        TOPIC
                                    </Typography>
                                </Item>
                                <Item>
                                    <Typography variant="h6">
                                        {topicOfPostSharedByUser}
                                    </Typography>
                                </Item>
                            </Grid>
                            <Grid>
                                <Item>
                                    <Typography variant="caption">
                                        POST
                                    </Typography>
                                </Item>
                                <Item>
                                    <Typography variant="h6">
                                        {postSharedByUser}
                                    </Typography>
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid size={12} spacing={1} sx={{ marginTop: "7%" }}>
                            <Item sx={{ marginBottom: "10px" }}>
                                <Typography variant="h6">
                                    My Last Mentions
                                </Typography>
                            </Item>
                            <Item sx={{ marginBottom: "25%" }}>
                                {postsOfUser &&
                                    postsOfUser.map((item) => (
                                        <MentionItem
                                            key={item._id}
                                            item={item}
                                        />
                                    ))}
                            </Item>
                        </Grid>
                    </>
                )}
            </Grid>
        </div>
    );
}

export default Profile;
