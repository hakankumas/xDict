import React from "react";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";

function Services() {
    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={9}>
                        <div>
                            <h1>Services Page - Content</h1>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Molestias aliquid dolorum
                                saepe, numquam mollitia fuga ducimus cumque,
                                sapiente eius ex facere cum tenetur
                                reprehenderit quas quo ab placeat. Itaque
                                aliquam obcaecati corporis molestiae sunt nam,
                                excepturi doloribus fuga tempore quis id magnam
                                et quidem vitae ducimus commodi alias aut ex!
                            </p>
                        </div>
                    </Grid>
                    <Grid size={3}>Sidebar</Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Services;
