import { EmojiEmotions, LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import ButtonAtoms from "../../../../atom/Button";
import TextFiledAtoms from "../../../../atom/TextFiled";
import TypographyAtom from "../../../../atom/Typography";
import { AddCategorieAsync } from "../../../../Redux/AsyncThunk/home.asyncThunk";

const AddCategories = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          image: "",
        }}
        onSubmit={(values) => {
          values.image = "https://placeimg.com/640/480/any";
          dispatch(AddCategorieAsync(values))
            .unwrap()
            .then((res) => {
              console.log(res, "add res _________________");
            })
            .catch((err) => {
              console.log(err, "err__________");
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

              <TypographyAtom variant="h3"> Add Caregories</TypographyAtom>

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
                  value={values.name}
                  onChange={handleChange}
                  id="name"
                  label="Categories Name"
                  name="name"
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

export default AddCategories;
