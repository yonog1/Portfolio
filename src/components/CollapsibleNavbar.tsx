import { GitHub, LightMode, LinkedIn, ModeNight } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    PaletteMode,
    Switch,
    Toolbar,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
    mode: PaletteMode;
    handleThemeChange: () => void;
}

function CollapsibleNavbar({ mode, handleThemeChange }: Props) {
    const navBtnsStyle =
        mode === "light"
            ? { color: "#10384a", fontSize: "1rem" }
            : { color: "#ffffff", fontSize: "1rem" };

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const closeDrawer = () => {
        setMobileOpen(false);
    };

    const drawer = (
        <Box
            sx={{
                width: 250,
            }}
            role="presentation"
        >
            <List>
                <ListItem>
                    <Link to={"/"} onClick={closeDrawer}>
                        <Button sx={navBtnsStyle}>Home</Button>
                    </Link>
                </ListItem>
                <ListItem onClick={closeDrawer}>
                    <Link to={"/about"}>
                        <Button sx={navBtnsStyle}>About</Button>
                    </Link>
                </ListItem>
                <ListItem onClick={closeDrawer}>
                    <Link to={"/contact"}>
                        <Button sx={navBtnsStyle}>Contact</Button>
                    </Link>
                </ListItem>
                <ListItem onClick={closeDrawer}>
                    <Link to={"/projects"}>
                        <Button sx={navBtnsStyle}>Projects</Button>
                    </Link>
                </ListItem>
            </List>

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
        </Box>
    );

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h4"
                        fontFamily="Segoe UI"
                        sx={{ flexGrow: 1, textAlign: "center" }}
                    >
                        Yonatan Goldin
                    </Typography>
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
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
            >
                {drawer}
            </Drawer>
        </>
    );
}

export default CollapsibleNavbar;
