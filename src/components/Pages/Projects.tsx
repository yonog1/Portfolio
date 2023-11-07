import CodeIcon from "@mui/icons-material/Code";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Typography,
} from "@mui/material";

function Projects() {
    const projectsData = [
        {
            title: "Directory Encryptor",
            description:
                "Encrypts all files under a specified directory using symmetric encryption. You may use this program at your own discretion and no responsibility will be taken for missing files/data. It is NOT RECOMMENDED to use this in your own personal machine where you keep sensitive data.",
            imageUrl:
                "https://user-images.githubusercontent.com/38842103/161384171-7ff3d982-54c6-4f57-8fb6-c0e78aaa8412.png",
            githubUrl: "https://github.com/yonog1/Directory-encryptor",
        },
        {
            title: "Ecommerce store template",
            description: "Store web site with a catalog and a basket.",
            imageUrl:
                "https://user-images.githubusercontent.com/38842103/256665922-57630e43-e197-4b31-9a56-0c896addb4e1.png",
            githubUrl: "https://github.com/yonog1/Directory-encryptor",
        },
        {
            title: "Flash Card Quiz Game",
            description:
                "Trivia card game made with Open Trivia DB (OpenTDB) and React JS on the frontend.",
            imageUrl:
                "https://user-images.githubusercontent.com/38842103/256989607-59542f20-fe85-4fa4-9f5f-8cce7211c89b.png",
            githubUrl: "https://github.com/yonog1/quiz",
        },
        // Add more projects data as needed
    ];

    return (
        <Box p={4}>
            <Typography variant="h3" gutterBottom>
                Projects :
            </Typography>
            <Grid container spacing={4}>
                {projectsData.map((project, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <Card
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                padding: 0,
                                margin: 0,
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={project.imageUrl}
                                alt={project.title}
                                height="250"
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {project.title}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <Box mt="auto" p={2}>
                                <Typography variant="overline">
                                    Source Code:
                                </Typography>
                                <Box display="flex" alignItems="center">
                                    <IconButton
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <CodeIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Projects;
