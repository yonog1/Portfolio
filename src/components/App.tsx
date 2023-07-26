import {
    CssBaseline,
    PaletteMode,
    Paper,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../styles/App.css";
import Navbar from "./Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import HomePage from "./cards/Pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
]);

function App() {
    const [mode, setMode] = useState<PaletteMode>("light");

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

    function handleThemeChange() {
        mode === "light" ? setMode("dark") : setMode("light");
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
                    <Navbar
                        mode={mode}
                        handleThemeChange={handleThemeChange}
                    ></Navbar>
                    <RouterProvider router={router} />
                </Paper>
            </ThemeProvider>
        </div>
    );
}

export default App;
