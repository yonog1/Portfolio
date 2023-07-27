import { Avatar, Box, Grid, Typography } from "@mui/material";
import profilePic from "../../static/images/profilePic.jpg";

function About() {
    return (
        <Box p={4}>
            <Typography variant="h2" gutterBottom>
                About Me
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Avatar
                        alt="Your Name"
                        src={profilePic}
                        sx={{ width: 300, height: 300, borderRadius: "50%" }}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="body1" paragraph>
                        Hi! I'm [Your Name], a passionate and creative developer
                        with [X] years of experience in [Your Area of
                        Expertise]. I love building user-friendly and performant
                        web applications that solve real-world problems.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        In my free time, I enjoy contributing to open-source
                        projects and staying up-to-date with the latest
                        technologies. I also love attending tech meetups and
                        conferences to connect with like-minded developers.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        My skills include [List of Skills], and I have
                        experience working with [Technologies/Frameworks]. I
                        believe in continuous learning and always strive to
                        expand my knowledge in the ever-evolving tech landscape.
                    </Typography>
                </Grid>
            </Grid>
            {/* Additional Dynamic Section - Experience */}
            <Box mt={4}>
                <Typography variant="h2" gutterBottom>
                    Experience
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Software Engineer | Company XYZ | Jan 20XX - Present
                </Typography>
                <Typography variant="body1" paragraph>
                    - Developed and maintained web applications using React and
                    Node.js.
                </Typography>
                <Typography variant="body1" paragraph>
                    - Collaborated with cross-functional teams to deliver
                    high-quality software solutions.
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Frontend Developer | Startup ABC | May 20XX - Dec 20XX
                </Typography>
                <Typography variant="body1" paragraph>
                    - Led the design and development of the company's
                    customer-facing website.
                </Typography>
                <Typography variant="body1" paragraph>
                    - Implemented responsive UI/UX designs to improve user
                    engagement.
                </Typography>
            </Box>
        </Box>
    );
}

export default About;
