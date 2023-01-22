import {Router, BrowserRouter, createBrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {Welcome} from "../Pages/Welcome";


function Game() {
    return null;
}

export const router = createBrowserRouter ([
    {
        path: '/',
        element: <Welcome />
    },
    {
        path: '/',
        element: <Game />
    }
])
