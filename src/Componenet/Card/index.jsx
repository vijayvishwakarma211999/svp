
import React from "react";
import { Card, CardContent, CardMedia, Grid, Pagination, Typography } from "@mui/material";


const CardComponenet = ({images,titles,id}) => {


  return (
   
    <Card sx={{ minWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={images}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {titles}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                       {id}

            </Typography>
          </CardContent>
         
        </Card>

  )
}

export default CardComponenet
