import { ExpandMore, Favorite, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ProfileAsyncThunk } from "../../../Redux/AsyncThunk/profile.asyncThunk";

const Profile = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProfileAsyncThunk())
      .unwrap()
      .then((res) => {
        // console.log(res.data, "res__________");
        return setData(res.data);
      })
      .catch((err) => {
        return;
      });
  },[]);
console.log(data,"dara____________________")
  return (
    <Box sx={{ maxWidth: 345 }}>
    
      
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
           avatar={
            <Avatar sx={{ bgcolor: red[500] }} src={data?.avatar} aria-label="recipe">
              
            </Avatar>
          }
          title={data?.name}
        />
        
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Email :{data?.email}
          </Typography>
        </CardContent>
          {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
            <ExpandMore
              aria-label="show more"
            ></ExpandMore>
          </CardActions> */}
      </Card>
      
    </Box>
  );
};

export default Profile;
