import { List, Typography, ListItem, Card, CardContent } from "@mui/material";

export default function ExperienceText() {
    return (
        <div>
            <Card>
                <CardContent>
                    <List>
                        <Typography variant="h5">Experience</Typography>
                        <Typography variant="h6">
                            System Administrator | IDF - Technological Unit |
                            03/2021 - Now
                        </Typography>
                        <ListItem>
                            Manage user accounts, security groups and
                            permissions to limit information access to only
                            those who are authorized to view and/or edit it.
                        </ListItem>
                        <ListItem>
                            Maintained and developed network infrastructure
                            while managing networking hardware.
                        </ListItem>
                        <ListItem>
                            Created automated solutionsfor end users to
                            facilitate their workflow.
                        </ListItem>

                        <Typography variant="h6">
                            Computer Lab Supervisor | Appleseeds | 01/2018 -
                            02/2020
                        </Typography>
                        <ListItem>
                            Troubleshot computer hardware and gave adequate
                            solutions to fix/overcome the issues.
                        </ListItem>
                        <ListItem>
                            Trained 5 junior techs to manage tickets, take care
                            of daily workload and communicate with customers.
                        </ListItem>
                        <ListItem>
                            Talked with suppliers to purchase hardware
                            components for replacements and lab equipment.
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </div>
    );
}
