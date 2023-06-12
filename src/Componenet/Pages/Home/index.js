import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CategorieAsync, HomeAsyncThunk } from "../../../Redux/AsyncThunk/home.asyncThunk";
import CardComponenet from "../../Card";
import SelectOptionCategories from "../../SelectOption";

const Home = () => {
  const dispatch = useDispatch();
  // const filter = useSelector((state)=> state?.getBikeList?.data)
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [filter , setFilter] = useState("")


  useEffect(() => {
    dispatch(HomeAsyncThunk({page,filter}))
      .unwrap()
      .then((res) => {
        return setData(res.data);
      });
  }, [filter,page]);

  // category part

  useEffect(() => {
    dispatch(CategorieAsync())
      .unwrap()
      .then((res) => {
        return setCategory(res.data);

      })
      .catch((err) => {
        console.log(err,"err")

      });
  }, []);

  // console.log(category,"__________________")

  return (
    <>
      <Box>
      <SelectOptionCategories category={category} filter={filter} setFilter={setFilter} />
        <Grid container>
          {data.map((item) => {
            return (
              <Grid item sm={4} p={2} justifyContent="center" display="flex">
                <CardComponenet
                  id={item?.id}
                  images={item?.category?.image}
                  titles={item?.title}
                />
              </Grid>
            );
          })}
        </Grid>
        <Pagination
          color="primary"
          count={10}
          onChange={(e, value) => setPage(value)}
        />
      </Box>
    </>
  );
};

export default Home;
