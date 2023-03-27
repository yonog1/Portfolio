import { Typography, List, ListItem, Card, CardContent } from "@mui/material";

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
                                Intro to Computer Science - University of Tel
                                Aviv
                            </ListItem>
                        </Typography>
                    </List>
                </CardContent>
            </Card>
        </div>
    );
}
