import { Grid, Typography } from "@mui/material";
import React from "react";

export default function ObjectiveText() {
    return (
        <div>
            <Grid item xs={3}>
                <Typography variant="h5">Objective</Typography>
                <Typography variant="body1">
                    Self-taught software developer with a proven ability to
                    adapt to both self-starting and collaborative environments
                    while staying focused on achieving high-quality results
                    under strict deadlines. Autodidact, and passionate about
                    programming, looking for opportunities to grow and learn as
                    a developer.
                </Typography>
            </Grid>
        </div>
    );
}
