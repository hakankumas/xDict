import React from "react";
import Grid from "@mui/material/Grid2";

import Topics from "./Topics";
import Posts from "./Posts";
import PostsTopic from "./PostsTopic";
import Profile from "./Profile";
import WhoAreWe from "./WhoAreWe";

import UserPosts from "./UserPosts";
import UserProfile from "./UserProfile";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function Timeline() {
    const { paramUsername } = useParams();
    const { slug } = useParams();
    const { sessionData } = useSelector((state) => state.auth);

    return (
        <div>
            <Grid container spacing={1}>
                {paramUsername === undefined ? (
                    <>
                        <Grid size={3}>
                            <Topics />
                        </Grid>
                        <Grid size={6}>
                            {slug ? <PostsTopic /> : <Posts />}
                        </Grid>
                        <Grid size={3}>
                            {sessionData ? <Profile /> : <WhoAreWe />}
                        </Grid>
                    </>
                ) : (
                    <>
                        <Grid size={3}>
                            <UserProfile paramUsername={paramUsername} />
                        </Grid>
                        <Grid size={6}>
                            <UserPosts paramUsername={paramUsername} />
                        </Grid>
                    </>
                )}
            </Grid>
        </div>
    );
}

export default Timeline;
