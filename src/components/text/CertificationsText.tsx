import { Grid, Typography, List, ListItem } from "@mui/material";
import React from "react";

export default function CertificationsText() {
    return (
        <div>
            <Grid item xs={3}>
                <Typography variant="h5">Certifications</Typography>
                <List>
                    <Typography variant="body1">
                        <ListItem>
                            CCNA Routing and Switching: Introduction to Networks
                        </ListItem>
                        <ListItem>
                            Intro to Computer Science - University of Tel Aviv
                        </ListItem>
                    </Typography>
                </List>
            </Grid>
        </div>
    );
}
