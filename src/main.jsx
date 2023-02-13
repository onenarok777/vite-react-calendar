import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@mui/material";
import theme from "./configs/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout 
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutUser from "./layouts/LayoutUser";

// auth
import Auth from "./Auth";

// admin page
import UserManagement from "./pages/admin/UserManagement";
import AdminHome from "./pages/admin/AdminHome";

// user page
import UserHome from "./pages/user/UserHome";

// error page
import Error from "./pages/Error";

// Config Route
const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="" element={<AdminHome />} />
          <Route path="UserManagement" element={<UserManagement />} />
        </Route>
        <Route path="/" element={<LayoutUser />}>
          <Route path="" element={<UserHome />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
