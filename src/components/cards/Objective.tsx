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
                        Self-taught software developer with a proven ability to
                        adapt to both self-starting and collaborative
                        environments while staying focused on achieving
                        high-quality results under strict deadlines.<br></br>{" "}
                        Autodidact, and passionate about programming, looking
                        for opportunities to grow and learn as a developer.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
