import { Typography } from "@mui/material";

type Props = {};

export default function Summary({}: Props) {
    return (
        <div>
            <Typography variant="h5" align="center" marginTop={3}>
                Summary
            </Typography>
            <Typography variant="body1" padding={1} align="center">
                Self-taught software developer with a proven ability to adapt to
                both self-starting and collaborative environments while staying
                focused on achieving high-quality results under strict
                deadlines. Autodidact, and passionate about programming, looking
                for opportunities to grow and learn as a developer.
            </Typography>
        </div>
    );
}
