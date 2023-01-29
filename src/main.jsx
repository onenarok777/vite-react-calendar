import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@mui/material";
import theme from "./configs/theme"

import App from "./App";
import Auth from "./Auth";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
