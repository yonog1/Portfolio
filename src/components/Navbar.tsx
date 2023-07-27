import { GitHub, LightMode, LinkedIn, ModeNight } from "@mui/icons-material";
import {
    AppBar,
    Box,
    Button,
    IconButton,
    PaletteMode,
    Switch,
    Toolbar,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
    mode: PaletteMode;
    handleThemeChange: () => void;
}

function Navbar({ mode, handleThemeChange }: Props) {
    return (
        <>
            <AppBar position="static">
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Box display="flex" alignItems="center">
                        {mode === "dark" ? (
                            <ModeNight sx={{ color: "yellow" }}></ModeNight>
                        ) : (
                            <LightMode sx={{ color: "yellow" }}></LightMode>
                        )}
                        <Switch
                            color="primary"
                            checked={mode === "dark"}
                            onChange={handleThemeChange}
                        />
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Typography variant="h4" fontFamily="Segoe UI">
                            Yonatan Goldin
                        </Typography>
                        <Box
                            display="flex"
                            mt={1}
                            sx={
                                mode === "light"
                                    ? { color: "rgb(35,70,85)" }
                                    : { color: "#ffffff" }
                            }
                        >
                            <Link to={"/"}>
                                <Button
                                    sx={
                                        mode === "light"
                                            ? { color: "rgb(35,70,85)" }
                                            : { color: "#ffffff" }
                                    }
                                >
                                    Home
                                </Button>
                            </Link>
                            <Link to={"/about"}>
                                <Button
                                    sx={
                                        mode === "light"
                                            ? { color: "rgb(35,70,85)" }
                                            : { color: "#ffffff" }
                                    }
                                >
                                    About
                                </Button>
                            </Link>
                            <Link to={"/contact"}>
                                <Button
                                    sx={
                                        mode === "light"
                                            ? { color: "rgb(35,70,85)" }
                                            : { color: "#ffffff" }
                                    }
                                >
                                    Contact
                                </Button>
                            </Link>
                            <Link to={"/projects"}>
                                <Button
                                    sx={
                                        mode === "light"
                                            ? { color: "rgb(35,70,85)" }
                                            : { color: "#ffffff" }
                                    }
                                >
                                    Projects
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    <Box display={"flex"}>
                        <IconButton
                            size="large"
                            href="https://www.linkedin.com/in/yonatan-goldin-098b221b3/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <LinkedIn />
                        </IconButton>
                        <IconButton
                            size="large"
                            href="https://github.com/yonog1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <GitHub />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
