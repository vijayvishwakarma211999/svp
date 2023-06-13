

import React from "react";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";


import { Button, List, styled,  } from "@mui/material";
import  ItemList, { AdminList, CustmerList } from "../itemList";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../../Redux/Slice/login.slices";
import { useDispatch } from "react-redux";
const SidebarComponent = ({ open, setOpen }) => {
const navigate = useNavigate()
const dispatch = useDispatch()
  const drawerWidth = 240;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const handleLogout=()=>{
    dispatch(removeToken())
  }

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        {/* <IconButton onClick={handleDrawerClose}>
          <ChevronLeft />
          </IconButton> */}
      </DrawerHeader>
      <Divider />
      <List>
     
<ItemList {...{open,setOpen}}/>

      </List>
      <Button variant="contained" onClick={handleLogout}>
Logout 
     </Button>
    </Drawer>
  );
};

export default SidebarComponent;
