import { EmojiEmotions } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonAtoms from "../../../../atom/Button";
import TextFiledAtoms from "../../../../atom/TextFiled";
import TypographyAtom from "../../../../atom/Typography";
import { AddProductAsync } from "../../../../Redux/AsyncThunk/home.asyncThunk";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [fil,setFil]=useState("");

  const categories = useSelector((state) => state?.getBikeList?.categories);
  const handelFilChange = (e, value) => {
    setFil(e.target.value);
  };
  return (
    <>
      <Formik
        initialValues={{
          description: "",
          price: "",
          title: "",
          // categoryId: "",
        }}
        onSubmit={(values) => {
          console.log(values, "intitalvalue");
          values.categoryId = fil;
          values.images = ["https://placeimg.com/640/480/any"];
          // values.title ="New Product"
          // values.categoryId = "1";
          dispatch(AddProductAsync(values))
            .unwrap()
            .then((res) => {
              console.log(res, "_________");
            })
            .catch((err) => {
              console.log(err, "err_____");
            });
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          handelFilterChange,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <EmojiEmotions />
              </Avatar>
              <TypographyAtom variant="h3">Add Product</TypographyAtom>
              <Box
                sx={{
                  mt: 1,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "100%",
                  maxWidth: "460px",
                }}
              >
                <TextFiledAtoms
                  margin="normal"
                  required
                  fullWidth
                  value={values.title}
                  onChange={handleChange}
                  id="title"
                  label="Title"
                  name="title"
                  // autoComplete="=proce"
                  autoFocus
                />
                <TextFiledAtoms
                  margin="normal"
                  required
                  fullWidth
                  value={values.price}
                  onChange={handleChange}
                  id="price"
                  label="Product Price"
                  name="price"
                  // autoComplete="=proce"
                  autoFocus
                />
                <TextFiledAtoms
                  margin="normal"
                  required
                  fullWidth
                  value={values.description}
                  onChange={handleChange}
                  id="description"
                  label="Product Description"
                  name="description"
                  // autoComplete="=proce"
                  autoFocus
                />
                {/* <TextFiledAtoms
                  margin="normal"
                  required
                  fullWidth
                  value={values.categoryId}
                  onChange={handleChange}
                  id="categoryId"
                  label="CategoryId"
                  name="categoryId"
                  // autoComplete="=proce"
                  autoFocus
                /> */}

                <TypographyAtom>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      onChange={handelFilChange}
                      id="demo-simple-select"
                      label="Select Category"
                      value={fil}
                    >
                      {categories.map((item) => {
                        // console.log(item,"item_____________")
                        return (
                          <MenuItem value={item.id}>{item?.name}</MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </TypographyAtom>

                <ButtonAtoms
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </ButtonAtoms>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddProduct;
