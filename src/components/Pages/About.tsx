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
                        Hello there! I'm Yonatan, a self taught developer who is
                        very passionate about technology. I love learning new
                        tools and technologies to help me build my projects and
                        apps in the quickest and simplest way possible. For me,
                        each time I'm faced with a situation where I need to
                        learn something new to implement or use, I see it as a
                        challenge!
                    </Typography>
                    <Typography variant="body1" paragraph>
                        In my free time, I enjoy working on my personal projects
                        and staying up-to-date with the latest technologies. I
                        also love competitive video games, such as
                        Counter-Strike and Rocket League. One of my biggest
                        passions is football and keeping up with the best teams
                        and competitions around the globe.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        I'm a self-learner who is driven by curiosity,
                        introspective in the decisions I make and how I express
                        myself, and always try to learn from the people around
                        me. I have experience working with Python and the Django
                        and C# and .Net Core for desktop apps and web framework,
                        Javascript for web programming and C# .Net for desktop
                        apps and web APIs. {<br />}At ExLibris I work with
                        Python, Powerhsell and Bash for scripting and
                        automation, Gitlab and general OS administration and
                        configuration for troubleshooting and constantly keep
                        learning about storage administration for our Netapp
                        systems and the VMware suit of services for a deeper
                        understanding of our VM management tools and
                        infrastructure. {<br />}I believe in continuous learning
                        and always strive to expand my knowledge in the
                        ever-evolving tech landscape.
                    </Typography>
                </Grid>
            </Grid>
            {/* Additional Dynamic Section - Experience */}

            <Typography variant="h5" gutterBottom>
                Experience
            </Typography>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <Box mt={4}>
                        <Typography variant="h6" gutterBottom>
                            System Administrator and Network Engineer | IDF |
                            Mar 2021 - Jun 2023
                        </Typography>
                        <Typography variant="body1" paragraph>
                            - Developed and maintained IT and networking
                            infrastructure.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            - Collaborated with cross-functional teams to
                            deliver high-quality networking and automation
                            solutions for clients/users.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box mt={4}>
                        <Typography variant="h6" gutterBottom>
                            Associate Inrfastructure Engineer | ExLibris | Dec
                            2023 - Now
                        </Typography>
                        <Typography variant="body1" paragraph>
                            - Hardware management and maintenance of the
                            company’s Data Center and communication with
                            vendors.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            - Enterprise compute virtualization and storage
                            virtualization platforms administration like VMware
                            Horizon, vCenter and vSphere and Netapp Ontap and
                            System Manager.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            - Linux server administration and environment
                            maintenance coordination with developers, QA, etc.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default About;
