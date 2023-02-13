import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export default () => {
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        Home
      </Navbar>
      <Outlet />
    </div>
  );
};
