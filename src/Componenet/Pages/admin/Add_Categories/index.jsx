import { EmojiEmotions, LockOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import { Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { AddCategorieAsync } from '../../../../Redux/AsyncThunk/home.asyncThunk'

const AddCategories = () => {
    const dispatch = useDispatch();

  return (
    <>
     <Formik 
     initialValues={{
        name:"",
        image:"",
     }}
     onSubmit={(values)=>{
        values.image= "https://placeimg.com/640/480/any"
        dispatch(AddCategorieAsync(values)).unwrap().then((res)=>{
            console.log(res,"add res _________________")
        })
        .catch((err)=>{
            console.log(err,"err__________")
        })
     }}
     >

     {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
     })=>(
           <form onSubmit={handleSubmit}> 
           <Box
             sx={{
               marginTop: 8,
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
             }}
           >
             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
               <EmojiEmotions />
             </Avatar>
             <Typography component="h1" variant="h5">
              Add Caregories
             </Typography>
             <Box  sx={{ mt: 1 }}>
               <TextField
                 margin="normal"
                 required
                 fullWidth
                 value={values.name}
                 onChange={handleChange}
                 id="name"
                 label="Categories Name"
                 name="name"
                 autoComplete="name"
                 autoFocus
               />
          
           
               <Button
                 type="submit"
                 fullWidth
                 variant="contained"
                 sx={{ mt: 3, mb: 2 }}
               >
                 Submit
               </Button>    
             
             </Box>
           </Box>
           </form>
     )}
        </Formik> 
    </>
  )
}

export default AddCategories
