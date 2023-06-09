import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Box,
  Button,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { ROUTE_DEFINATION } from "../../../utils/constant/route.constant";
import { useNavigate } from "react-router-dom";
const AppBarComponent = ({ open, setOpen }) => {
  const drawerWidth = 240;
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <AppBar position="fixed" open={open}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "block" }),
              }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Mini variant drawer
            </Typography>
          </Toolbar>
          <Stack p={2}>
            <Button 
            // onClick={()=>navigate(ROUTE_DEFINATION.PROFILE)} 
            
            variant="contained" href={ROUTE_DEFINATION.PROFILE}>
              Profile
            </Button>
          </Stack>
        </Box>
      </AppBar>
    </>
  );
};

export default AppBarComponent;
