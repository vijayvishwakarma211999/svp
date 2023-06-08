import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import BackGround from "../../../asets/images/sign.jpg";
import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { userSignAsync } from "../../../Redux/AsyncThunk/login.asyncThunk";
import { ROUTE_DEFINATION } from "../../../utils/constant/route.constant";

const SignUp = () => {
 const dispatch = useDispatch();
  return (
    <>
      <CssBaseline />
      <Box
           height="100vh"
           sx={{
             backgroundImage: `url(${BackGround})`,
             backgroundRepeat: "no-repeat",
             backgroundSize: "cover",
             backgroundPosition: "center",
             overflow: "hidden",
           }}
      >
     

        <Formik
        initialValues={{
            name:"",
            email:"",
            password:"",
        }}
        onSubmit={(values)=>{

            values.avatar="https://api.lorem.space/image/face?w=640&h=480&r=867"
            dispatch(userSignAsync(values)).unwrap().then((res)=>{
                return   console.log(res,"_res_")
            })
            .catch((err)=>{
             return console.log(err,"___err___")
            })
        }}

        
        >
          {({ values,error,handleChange,handleSubmit }) => (
            <form onSubmit={handleSubmit}>

            <Box  sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}>

            <Box
         
         sx={{
            m: 10,
            width: "370px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 5,
            borderRadius: "20px",
            boxShadow: "10px 10px 10px rgba(30,30,30,0.5)",
            backdropFilter: "blur(10px)",
            backgroundImage:
              " linear-gradient(to bottom right, rgb(238 232 232 / 20%), rgb(212 226 226 / 41%))",
          }}
              >
                   <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      autoComplete="given-name"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      required
                      fullWidth
                      id="firstName"
                      label="Name"
                      autoFocus
                    />
                  </Grid>
                  {/* <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      onChange={handleChange}
                      value={values.lastName}
                      autoComplete="family-name"
                    />
                  </Grid> */}
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href={(ROUTE_DEFINATION.BASE)} variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
      
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default SignUp;
