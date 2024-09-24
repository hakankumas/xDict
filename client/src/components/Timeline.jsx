import React from "react";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import Topics from "./Topics";
import Posts from "./Posts";
import Tags from "./Tags";
function Timeline() {
    return (
        <div>
            <Container maxWidth="xl">
                <Grid container spacing={1}>
                    <Grid size={3}>
                        <Topics />
                    </Grid>
                    <Grid size={6}>
                        <Posts />
                    </Grid>
                    <Grid size={3}>
                        <Tags />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Timeline;
