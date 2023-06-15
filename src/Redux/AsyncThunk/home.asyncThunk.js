import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../Constant/reduxConstant";
import { AddCategoryService, AddProductService, CategoryService, HomeServices } from "../Services/home.services";

export const HomeAsyncThunk=createAsyncThunk(
    ASYNC_ROUTES.HOME,
    async(payload,{rejectWithValue})=>{
        try{
            const response = await HomeServices(payload)
            return response
        }
        catch(err){
            return rejectWithValue(err);
        }
    }
);
// categories 
export const CategorieAsync=createAsyncThunk(
    ASYNC_ROUTES.CATEGORY,
    async(payload,{rejectWithValue})=>{
        try{
            const response = await CategoryService(payload)
            return response
        }
        catch(err){
            return rejectWithValue(err);
        }
    }
);
// Add categories 

export const AddCategorieAsync=createAsyncThunk(
    ASYNC_ROUTES.ADD_CATEGORY,
    async(payload,{rejectWithValue})=>{
        try{
            const response = await AddCategoryService(payload)
            return response
        }
        catch(err){
            return rejectWithValue(err);
        }
    }
);

// Add Products 

export const AddProductAsync=createAsyncThunk(
    ASYNC_ROUTES.ADD_PRODUCTS,
    async(payload,{rejectWithValue})=>{
        console.log(payload,"title_____________________")
        try{
            const response = await AddProductService(payload)
            return response
        }
        catch(err){
            return rejectWithValue(err);
        }
    }
);
