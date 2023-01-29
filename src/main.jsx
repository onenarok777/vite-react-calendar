import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@mui/material";
import theme from "./configs/theme";

import Auth from "./Auth";

import LayoutAdmin from "./layouts/Layout_Admin";
import LayoutUser from "./layouts/Layout_User";

import AdminHome from "./pages/admin/Admin_Home";
import UserHome from "./pages/user/User_Home";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route element={<LayoutAdmin />}>
          <Route path="/admin/home" element={<AdminHome />} />
        </Route>
        {/* <Route element={LayoutUser}>
          <Route path="/" element={<UserHome />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
