import { Card, CardContent, List, ListItem, Typography } from "@mui/material";

export default function CertificationsText() {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h5">Certifications</Typography>
                    <List>
                        <Typography variant="body1">
                            <ListItem>
                                CCNA Routing and Switching: Introduction to
                                Networks
                            </ListItem>
                            <ListItem>
                                Intro to Computer Science - Tel Aviv University
                            </ListItem>
                        </Typography>
                    </List>
                </CardContent>
            </Card>
        </div>
    );
}
