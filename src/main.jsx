import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Products from "./routes/Products.jsx";
import { CounterContextProvider } from "./context/CounterContext.jsx";
import { TitleColorContextProvider } from "./context/TitleColorContext.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* criando provider */}
        <CounterContextProvider>
            <TitleColorContextProvider>
                <RouterProvider router={router} />
            </TitleColorContextProvider>
        </CounterContextProvider>
    </React.StrictMode>
);
