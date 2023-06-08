import React, { useEffect, useState } from 'react'
import { Grid, Pagination } from "@mui/material";
import { useDispatch } from "react-redux";
import { HomeAsync } from "../../../Redux/AsyncThunk/home.asyncThunk";


import CardComponenet from "../../Card";

const Home = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(HomeAsync())
      .unwrap()
      .then((res) => {
        return setData(res.data);
      })
      .catch((err) => {
        return;
        //  console.log(err,"err+++++++++++")
      });
  }, []);
  console.log(data, "data___________");

  return (
    <>
      <Grid container>
      {data.map((item)=>{
        return(
          <Grid sm={4} p={2}>
          <CardComponenet images={item?.category?.image} />
        </Grid>
        )
      })}
      </Grid>

      <Pagination color="primary" count={10} />
    </>
  );
};

export default Home;
