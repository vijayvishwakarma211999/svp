import { EmojiEmotions } from '@mui/icons-material'
import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import { Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { AddProductAsync } from '../../../../Redux/AsyncThunk/home.asyncThunk'

const AddProduct = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik 
       initialValues={{
        description:"",
        price:"",
       }}
        onSubmit={(values)=>{
          values.images= ["https://placeimg.com/640/480/any"]
          values.title ="New Product"
          values.categoryId="1"
          dispatch(AddProductAsync(values)).unwrap().then((res)=>{
            console.log(res,"_________")
          })
          .catch((err)=>{
            console.log(err,"err_____")
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
              Add Product
             </Typography>
             <Box  sx={{ mt: 1 }}>
               {/* <TextField
                 margin="normal"
                 required
                 fullWidth
                 value={values.name}
                 onChange={handleChange}
                 id="name"
                 label="Product Name"
                 name="name"
                 autoComplete="name"
                 autoFocus
               /> */}
                      <TextField
                 margin="normal"
                 required
                 fullWidth
                 value={values.price}
                 onChange={handleChange}
                 id="price"
                 label="Product Price"
                 name="price"
                 autoComplete="=proce"
                 autoFocus
               />
                <TextField
                 margin="normal"
                 required
                 fullWidth
                 value={values.description}
                 onChange={handleChange}
                 id="description"
                 label="Product Description"
                 name="description"
                 autoComplete="=proce"
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

export default AddProduct
