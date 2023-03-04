import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

type Props = {};

export default function Summary({}: Props) {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h5">Summary</Typography>
                    <Typography variant="body1" padding={1}>
                        Self-taught software developer with a proven ability to
                        adapt to both self-starting and collaborative
                        environments while staying focused on achieving
                        high-quality results under strict deadlines. Autodidact,
                        and passionate about programming, looking for
                        opportunities to grow and learn as a developer.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
