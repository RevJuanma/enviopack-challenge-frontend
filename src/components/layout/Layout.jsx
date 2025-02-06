import React from "react";
import Header from "./Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import "./layout.css";
import Title from "../Title/Title";
import { Box } from "@mui/material";
import { getPageTitle } from "../../utils/functions";

const Layout = () => {
  const location = useLocation();
  return (
    <Box display={"flex"} flexDirection={"column"} minHeight="100vh">
      <Header />
      <main className="main-content">
        <Title title={getPageTitle(location)} />
        <Outlet />
      </main>
    </Box>
  );
};

export default Layout;
