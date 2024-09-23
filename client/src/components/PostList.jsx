import React from "react";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import Topics from "./Topics";
import Timeline from "./Timeline";
import Tags from "./Tags";
function PostList() {
    return (
        <div>
            <Container maxWidth="xl">
                <Grid container spacing={1}>
                    <Grid size={3}>
                        <Topics />
                    </Grid>
                    <Grid size={6}>
                        <Timeline />
                    </Grid>
                    <Grid size={3}>
                        <Tags />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default PostList;
