import {
    Card,
    CardContent,
    Grid,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import React from "react";

export default function Resume() {
    return (
        <>
            <Grid container padding={"1vh"} spacing={2}>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">Summary</Typography>
                            <Typography variant="body1">
                                Self-taught software developer with a proven
                                ability to adapt to both self-starting and
                                collaborative environments while staying focused
                                on achieving high-quality results under strict
                                deadlines. Autodidact, and passionate about
                                programming, looking for opportunities to grow
                                and learn as a developer.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">Certifications</Typography>
                            <List>
                                <Typography variant="body1">
                                    <ListItem>
                                        CCNA Routing and Switching: Introduction
                                        to Networks
                                    </ListItem>
                                    <ListItem>
                                        Intro to Computer Science - University
                                        of Tel Aviv
                                    </ListItem>
                                </Typography>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <List>
                                <Typography variant="h5">Skills</Typography>
                                <ListItem>Javascript / React / Node</ListItem>
                                <ListItem>HTML / CSS</ListItem>
                                <ListItem>Python</ListItem>
                                <ListItem>C# / ASP.NET</ListItem>
                                <ListItem>Computer Networking</ListItem>
                                <ListItem>
                                    Multilingual {"(English, Spanish, Hebrew)"}
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <List>
                                <Typography variant="h5">Experience</Typography>
                                <Typography variant="h6">
                                    System Administrator | IDF - Technological
                                    Unit | 03/2021 - Now
                                </Typography>
                                <ListItem>
                                    Manage user accounts, security groups and
                                    permissions to limit information access to
                                    only those who are authorized to view and/or
                                    edit it.
                                </ListItem>
                                <ListItem>
                                    Maintained and developed network
                                    infrastructure while managing networking
                                    hardware.
                                </ListItem>
                                <ListItem>
                                    Created automated solutionsfor end users to
                                    facilitate their workflow.
                                </ListItem>

                                <Typography variant="h6">
                                    Computer Lab Supervisor | Appleseeds |
                                    01/2018 - 02/2020
                                </Typography>
                                <ListItem>
                                    Troubleshot computer hardware and gave
                                    adequate solutions to fix/overcome the
                                    issues.
                                </ListItem>
                                <ListItem>
                                    Trained 5 junior techs to manage tickets,
                                    take care of daily workload and communicate
                                    with customers.
                                </ListItem>
                                <ListItem>
                                    Talked with suppliers to purchase hardware
                                    components for replacements and lab
                                    equipment.
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
