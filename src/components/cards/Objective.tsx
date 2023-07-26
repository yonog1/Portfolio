import { Card, CardContent, Typography } from "@mui/material";

export default function ObjectiveText() {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h5">Objective</Typography>
                    <Typography
                        variant="body1"
                        sx={{ wordBreak: "break-word", padding: ".5rem" }}
                    >
                        Finding an entry into the tech field that will allow me
                        to combine my experience from the army in Networking and
                        System administration, together with my knowledge of
                        programming and web development.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
