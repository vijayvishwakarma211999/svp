// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import BackGround from "../../../asets/images/KTM.jpg"
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAsync } from "../../../Redux/AsyncThunk/login.asyncThunk";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userLoginStatus } = useSelector((state)=>state.)
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };
  const formik = useFormik({
    initialValues:{
      email:"svp@gmail.com",
      password:"123456",
    },
    onSubmit:(values)=>{
      dispatch(userLoginAsync(values))
      .unwrap()
      .then((res)=>{
        if(res?.status)navigate("/");
      })
      .catch((err)=>{

      })
    }
  })
  return (
    <Box   height="100vh"
    sx={{
      backgroundImage: `url(${BackGround})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      overflow:"hidden"
    }}>
   <Formik
   initialValues={}
   >
    <form onSubmit={}>
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
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
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
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </form>
   </Formik>
    </Box>
  );
};

export default Login;
