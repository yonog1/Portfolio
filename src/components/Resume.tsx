import { Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";

export default function Resume() {
    return (
        <>
            <Grid container padding={"4vh"} spacing={2}>
                <Grid container xs={3}>
                    <Typography variant="h5">Lorem</Typography>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae, tenetur officia quidem modi quae iste magni
                        ipsam, debitis optio quas amet nam quod voluptates
                        dignissimos. Iure ea totam explicabo inventore?
                    </Typography>
                </Grid>

                <Grid item xs={3} justifyContent="flex-end">
                    <Typography variant="h5">Lorem1</Typography>
                    <List>
                        <Typography variant="body1">
                            <ListItem>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Soluta iusto perspiciatis
                                quisquam, consequuntur voluptatem animi quis
                            </ListItem>
                            <ListItem>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Soluta iusto perspiciatis
                                quisquam, consequuntur voluptatem animi quis
                            </ListItem>
                        </Typography>
                    </List>
                </Grid>

                <Grid container xs={3}>
                    <List>
                        <Typography variant="h5">Lorem2</Typography>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    </List>
                </Grid>

                <Grid container xs={6} marginTop="15vh">
                    <List>
                        <Typography variant="h5">Lorem3</Typography>
                        <Typography variant="h6">
                            Lorem ipsum dolor sit amet
                        </Typography>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>

                        <Typography variant="h6">
                            Lorem ipsum dolor sit amet
                        </Typography>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    </List>
                </Grid>
            </Grid>
        </>
    );
}
