import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";


const SelectOptionCategories = ({category,filter,setFilter}) => {
  const handelFilterChange = (e, value) => {
    setFilter(e.target.value);
  };
  // console.log(filter,"filter_____")

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={filter}
          onChange={handelFilterChange}
          id="demo-simple-select"
          label="Select Category"
        >
{category.map((item)=>{
  // console.log(item,"item_____________")
  return(

    <MenuItem value={item.id} >
    {item?.name}
  </MenuItem>
  )
})}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectOptionCategories;
