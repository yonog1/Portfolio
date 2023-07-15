import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/cards/Pages/About";
import Projects from "./components/cards/Pages/Projects";
import Contact from "./components/cards/Pages/Contact";
import { createTheme, PaletteMode } from "@mui/material";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
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

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
