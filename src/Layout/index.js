import { Box, CssBaseline, styled } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AppBarComponent from "./MainLayout/AppBar";
import SidebarComponent from "./MainLayout/SideBar";

const MainLayout = () => {
  const [open, setOpen] = useState(false);

  const drawerWidth = 240;
  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
      ...(!open&&{
marginLeft:"-186px",
      })
    })
  );

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBarComponent open={open} setOpen={setOpen} />
        <SidebarComponent open={open} setOpen={setOpen} />
        <Main open={open}>
          <DrawerHeader />
          <Outlet />
        </Main>
      </Box>
    </>
  );
};

export default MainLayout;
