import { ThemeOptions, createTheme } from "@mui/material";
import { navbarMode } from "./../index";

export const themeOptions: ThemeOptions = createTheme({
    palette: {
        mode: navbarMode === "light" ? "light" : "light",
        primary: {
            main: "#3e89a8",
        },
        secondary: {
            main: "#51535e",
        },
        error: {
            main: "#ff1000",
        },
        warning: {
            main: "#ff9800",
        },
        info: {
            main: "#317f59",
        },
        success: {
            main: "#60e475",
        },
    },
});
