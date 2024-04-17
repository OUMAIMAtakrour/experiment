import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import router from "./router.jsx";
import { ContextProvider } from "./Contexts/ContextProvider.jsx";
import { RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ContextProvider>
            {" "}
            <RouterProvider router={router} />
            <ToastContainer />
        </ContextProvider>
    </React.StrictMode>
);
