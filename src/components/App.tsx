import {
    CssBaseline,
    PaletteMode,
    Paper,
    ThemeProvider,
    createTheme,
    useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
import CollapsibleNavbar from "./CollapsibleNavbar";
import Navbar from "./Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import HomePage from "./Pages/HomePage";
import Projects from "./Pages/Projects";

function App() {
    // checks if dark mode is the on in the browser
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    // sets mode depending on 'darkThemeMq'
    const storedTheme = localStorage.getItem("theme");
    const initialMode = storedTheme
        ? (storedTheme as PaletteMode)
        : darkThemeMq.matches
        ? "dark"
        : "light";

    const [mode, setMode] = useState<PaletteMode>(initialMode);

    const lightTheme = createTheme({
        palette: {
            mode: mode === "dark" ? "dark" : "light",
            primary: {
                main: "#3e89a8",
                dark: "#2b5f76",
                light: "#64a0b8",
                contrastText: "rgb(35,70,85)",
            },
            secondary: {
                main: "#7a8498",
                light: "#949cac",
                dark: "#555c6a",
                contrastText: "#ffffff",
            },
            error: {
                main: "#ff1000",
                light: "#ff3f33",
                dark: "#b20b00",
                contrastText: "#ffffff",
            },
            info: {
                main: "#317f59",
                contrastText: "#ffffff",
                dark: "#22583e",
                light: "#5a987a",
            },
            success: {
                main: "#60e475",
                light: "#7fe990",
                dark: "#439f51",
                contrastText: "#000000",
            },
            warning: {
                main: "#ff9800",
                light: "#ffac33",
                dark: "#b26a00",
                contrastText: "#030303",
            },
        },
    });

    useEffect(() => {
        // store the selected theme in localStorage
        localStorage.setItem("theme", mode);
    }, [mode]);

    const isMobile = useMediaQuery("(max-width:600px)");

    function handleThemeChange() {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    }

    return (
        <div className="App">
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <Paper
                    sx={
                        mode === "light"
                            ? { bgcolor: "#cfcfcf", minHeight: "100vh" }
                            : { bgcolor: "#37474F", minHeight: "100vh" }
                    }
                >
                    {!isMobile ? (
                        <Navbar
                            mode={mode}
                            handleThemeChange={handleThemeChange}
                        />
                    ) : (
                        <CollapsibleNavbar
                            mode={mode}
                            handleThemeChange={handleThemeChange}
                        />
                    )}
                    <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/projects" element={<Projects />}></Route>
                    </Routes>
                </Paper>
            </ThemeProvider>
        </div>
    );
}

export default App;
