import React from "react";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
function Error() {
    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={12}>
                        <div>
                            <h1>Error Page</h1>
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
                </Grid>
            </Container>
        </div>
    );
}

export default Error;
