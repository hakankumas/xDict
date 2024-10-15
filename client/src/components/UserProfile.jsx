import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import UserProfileInfo from "./UserProfileInfo";

const Item = styled(Paper)(({ theme }) => ({
    fontFamily: "monospace",
    boxShadow: "none",
    backgroundColor: "transparent",
    textAlign: "center",
}));
function UserProfile({ paramUsername }) {
    const { posts } = useSelector((state) => state.post);
    const [postSharedByUser, setPostSharedByUser] = useState("");
    const [topicOfPostSharedByUser, setTopicOfPostSharedByUser] = useState("");
    const filteredPosts = posts.filter(
        (post) => post.user.username === paramUsername
    );

    useEffect(() => {
        if (filteredPosts) {
            const postSharedByUser_x = filteredPosts.length;
            const topicOfPostSharedByUser_x = new Set(
                filteredPosts.map((post) => post.topic._id)
            ).size;

            setPostSharedByUser(postSharedByUser_x);
            setTopicOfPostSharedByUser(topicOfPostSharedByUser_x);
        }
    }, [filteredPosts]);
    return (
        <div className="profile">
            <Grid container>
                <Grid size={12} spacing={1} sx={{ marginTop: "1%" }}>
                    <UserProfileInfo paramUsername={paramUsername} />
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
                    </>
                )}
            </Grid>
        </div>
    );
}

export default UserProfile;
