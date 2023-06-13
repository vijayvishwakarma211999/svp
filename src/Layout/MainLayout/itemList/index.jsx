import {
  AddIcCall,
  Dashboard,
  Info,
  InsertEmoticon,
  MiscellaneousServices,
} from "@mui/icons-material";
import { ROUTE_DEFINATION } from "../../../utils/constant/route.constant";

// export default MenueList;

import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Mail from "@mui/icons-material/Mail";

import { ChevronLeft, Inbox } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ItemList = ({open}) => {
  const navigate = useNavigate()
  const CustmerList = [
    {
      icon: <Dashboard />,
      value: "Dashboard",
      path: ROUTE_DEFINATION.BASE,
    },
    {
      icon: <InsertEmoticon />,
      value: "Profile",
      path: ROUTE_DEFINATION.PROFILE,
    },
    {
      icon: <Info />,
      value: "About",
      path: ROUTE_DEFINATION.ABOUT,
    },
    {
      icon: <MiscellaneousServices />,
      value: "Service",
      path: ROUTE_DEFINATION.SERVICE,
    },
    {
      icon: <AddIcCall />,
      value: "Contact",
      path: ROUTE_DEFINATION.CONTACT,
    },
  ];
  const AdminList = [
    {
      icon: <Dashboard />,
      value: "Dashboard",
      path: ROUTE_DEFINATION.BASE,
    },
    {
      icon: <InsertEmoticon />,
      value: "Profile",
      path: ROUTE_DEFINATION.PROFILE,
    },
    {
      icon: <Info />,
      value: "Add categories",
      path: ROUTE_DEFINATION.ADD_CATEGORIES,
    },
    {
      icon: <MiscellaneousServices />,
      value: "Add product",
      path: ROUTE_DEFINATION.ADD_PRODUCT,
    },
  ];
  const user = useSelector((state)=> state?.Profile.data)
  const  role = user?.role.toUpperCase()
  const menuItem = role === "ADMIN" ?  AdminList : CustmerList;
  // console.log(menuItem, "________________menuitems");
  const MenueListItems = [...menuItem];
  console.log(MenueListItems,"_______________menulistitem")
  return (
    <>
      {MenueListItems.map((item, index) => {
        return (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate(item.path)}
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
              <ListItemText
                primary={item.value}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );
};

export default ItemList;
