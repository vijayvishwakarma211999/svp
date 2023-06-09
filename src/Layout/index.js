

import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";

import { Outlet } from "react-router-dom";
import AppBarComponent from "./MainLayout/AppBar";
import SidebarComponent from "./MainLayout/SideBar";
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarComponent {...{open,setOpen}} />
      <SidebarComponent {...{open,setOpen}} />
      <Box component="main" sx={{ flexGrow: 1 } } >
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
