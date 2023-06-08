
import React from "react";
import { Card, CardContent, CardMedia, Grid, Pagination, Typography } from "@mui/material";


const CardComponenet = ({images}) => {


  return (
   
    <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={images}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
         
        </Card>

  )
}

export default CardComponenet
