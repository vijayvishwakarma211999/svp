

import React from "react";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { ChevronLeft, Inbox } from "@mui/icons-material";
import Mail from "@mui/icons-material/Mail";
import { List, styled,  } from "@mui/material";
import MenueList from "../itemList/iconLIst";
import { useNavigate } from "react-router-dom";
const SidebarComponent = ({ open, setOpen }) => {
const navigate = useNavigate()

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
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        {/* <IconButton onClick={handleDrawerClose}>
          <ChevronLeft />
          </IconButton> */}
      </DrawerHeader>
      <Divider />
      <List>
     

{MenueList.map((item,index)=>{
  return (
  <ListItem key={index} disablePadding sx={{ display: "block" }}>
  <ListItemButton
  onClick={()=>navigate(item.path)}
    sx={{
      minHeight: 48,
      justifyContent: open ? "initial" : "center",
      px: 2.5,
    }}
  >
    <ListItemIcon
      sx={{
        minWidth: 0,
        mr: open ? 3 : "auto",
        justifyContent: "center",
      }}
    >
      {/* {index % 2 === 0 ? <Inbox /> : <Mail />} */}
      {item.icon}
    </ListItemIcon>
    <ListItemText primary={item.value} sx={{ opacity: open ? 1 : 0 }} />
  </ListItemButton>
</ListItem>
  )
})}

      </List>
     
    </Drawer>
  );
};

export default SidebarComponent;
