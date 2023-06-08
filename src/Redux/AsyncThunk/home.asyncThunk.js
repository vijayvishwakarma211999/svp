import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../Constant/reduxConstant";
import { HomeServices } from "../Services/home.services";

export const HomeAsync=createAsyncThunk(
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