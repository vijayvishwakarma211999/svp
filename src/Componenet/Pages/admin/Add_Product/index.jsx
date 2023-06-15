import { EmojiEmotions } from "@mui/icons-material";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import ButtonAtoms from "../../../../atom/Button";
import TextFiledAtoms from "../../../../atom/TextFiled";
import TypographyAtom from "../../../../atom/Typography";
import { AddProductAsync } from "../../../../Redux/AsyncThunk/home.asyncThunk";

const AddProduct = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          description: "",
          price: "",
          title: "",
          categoryId: "",
        }}
        onSubmit={(values) => {
          console.log(values, "intitalvalue");
          values.images = ["https://placeimg.com/640/480/any"];
          // values.title ="New Product"
          values.categoryId = "1";
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
        {({ values, handleChange, handleBlur, handleSubmit }) => (
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
                  maxWidth: "460px"
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
                <TextFiledAtoms
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
                />
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
