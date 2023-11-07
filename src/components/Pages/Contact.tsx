import { Box, Grid, Link, Typography } from "@mui/material";

function Contact() {
    return (
        <Box p={4}>
            <Typography variant="h2" gutterBottom>
                Contact Me
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" paragraph>
                        Have a question or want to work together? Feel free to
                        get in touch with me through the form below.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        You can also reach out to me through the following
                        channels:
                    </Typography>
                    <Box display="flex" flexDirection="column">
                        <Typography variant="body1" paragraph>
                            Email:{" "}
                            <Link href="mailto:yonatangoldin69@gmail.com">
                                yonatangoldin69@gmail.com
                            </Link>
                        </Typography>

                        <Typography variant="body1" paragraph>
                            LinkedIn:{" "}
                            <Link
                                href="https://www.linkedin.com/in/yonatan-goldin-098b221b3/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://www.linkedin.com/in/yonatan-goldin-098b221b3/
                            </Link>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            GitHub:{" "}
                            <Link
                                href="https://github.com/yonog1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                github.com/yonog1
                            </Link>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            UpWork:{" "}
                            <Link
                                href="https://www.upwork.com/freelancers/~011afb53578258acb8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://www.upwork.com/freelancers/~011afb53578258acb8
                            </Link>
                        </Typography>
                        {/* Add more contact information if needed */}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Contact;
