import CodeIcon from "@mui/icons-material/Code";
import DownloadIcon from "@mui/icons-material/Download";
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
                "Encrypts all files under a specified directory using symmetric encryption.",
            imageUrl:
                "https://user-images.githubusercontent.com/38842103/161384171-7ff3d982-54c6-4f57-8fb6-c0e78aaa8412.png",
            githubUrl: "https://github.com/yonog1/Directory-encryptor",
            liveDemoUrl: "https://www.example.com/project1",
        },
        {
            title: "Directory Encryptor",
            description:
                "Encrypts all files under a specified directory using symmetric encryption.",
            imageUrl:
                "https://user-images.githubusercontent.com/38842103/161384171-7ff3d982-54c6-4f57-8fb6-c0e78aaa8412.png",
            githubUrl: "https://github.com/yonog1/Directory-encryptor",
            liveDemoUrl: "https://www.example.com/project1",
        },
        {
            title: "Directory Encryptor",
            description:
                "Encrypts all files under a specified directory using symmetric encryption.",
            imageUrl:
                "https://user-images.githubusercontent.com/38842103/161384171-7ff3d982-54c6-4f57-8fb6-c0e78aaa8412.png",
            githubUrl: "https://github.com/yonog1/Directory-encryptor",
            liveDemoUrl: "https://www.example.com/project1",
        },
        // Add more projects data as needed
    ];

    return (
        <Box p={4}>
            <Typography variant="h2" gutterBottom>
                Projects
            </Typography>
            <Grid container spacing={4}>
                {projectsData.map((project, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <Card sx={{ height: "100%" }}>
                            <CardMedia
                                component="img"
                                image={project.imageUrl}
                                alt={project.title}
                                height="200"
                            />
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    {project.title}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {project.description}
                                </Typography>
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <IconButton
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <CodeIcon />
                                    </IconButton>
                                    <Typography>Download Demo</Typography>
                                    <IconButton>
                                        <DownloadIcon />
                                    </IconButton>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Projects;
