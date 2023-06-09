import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../Constant/reduxConstant";
import { ProfileService } from "../Services/profile.services";

export const ProfileAsyncThunk = createAsyncThunk(
    ASYNC_ROUTES.PROFILE,
    async(payload,{rejectWithValue})=>{
        try{
            const response = await ProfileService(payload)
            // console.log(payload,"___________________________data")
            return response;
        }catch(err){
            return rejectWithValue(err);

        }
    }
);
