import React from "react";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import Topics from "./Topics";
import Posts from "./Posts";
import Adverts from "./Adverts";
import PostsTopic from "./PostsTopic";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function Timeline() {
    const { slug } = useParams();
    const { sessionData } = useSelector((state) => state.auth);

    return (
        <div>
            <Container maxWidth="xl">
                <Grid container spacing={1}>
                    <Grid size={3}>
                        <Topics />
                    </Grid>
                    <Grid size={6}>{slug ? <PostsTopic /> : <Posts />}</Grid>
                    <Grid size={3}>
                        {sessionData ? <Profile /> : <Adverts />}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Timeline;
