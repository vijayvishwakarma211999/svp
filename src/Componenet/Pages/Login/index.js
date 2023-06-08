// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import BackGround from "../../../asets/images/KTM.jpg";
import {
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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAsync } from "../../../Redux/AsyncThunk/login.asyncThunk";
import { ROUTE_DEFINATION } from "../../../utils/constant/route.constant";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
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
      <CssBaseline/>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values, "value_____________");
          dispatch(userLoginAsync(values)).unwrap().then((res)=>{
            return(
              console.log(res,"res___________")
            )
          })
          .catch((err)=>{
            return(
              console.log(err,"err__________________")
            )
          })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
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
                {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    id="email"
                    label="Email Address"
                    name="email"
                    value={values.email}
                    autoComplete="email"
                    onChange={handleChange}
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href={(ROUTE_DEFINATION.SIGN_UP)} variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </form>
  )}
      </Formik>
    </Box>
  );
};

export default Login;


