import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { LogoComponent } from "./components/LogoComponent/LogoComponent.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <LogoComponent />
        <App />
    </React.StrictMode>
);
