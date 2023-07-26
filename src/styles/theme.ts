import { ThemeOptions, createTheme } from "@mui/material";
const mode = "light";
export const themeOptions: ThemeOptions = createTheme({
    palette: {
        mode: mode === "light" ? "light" : "light",
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
