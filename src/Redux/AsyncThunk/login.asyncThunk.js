import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../Constant/reduxConstant";
import { UserLoginService, UserSignService } from "../Services/login.services";

export const userLoginAsync = createAsyncThunk(
    ASYNC_ROUTES.USER_LOGIN,
    async(payload,{rejectWithValue}) =>{
        try{
            const response = await UserLoginService(payload)
            return response;
        }catch(err){
            return rejectWithValue(err);
        }
    }
);
export const userSignAsync = createAsyncThunk(
    ASYNC_ROUTES.USER,
    async(payload,{rejectWithValue}) =>{
        try{
            const response = await UserSignService(payload)
            return response;
        }catch(err){
            return rejectWithValue(err);
        }
    }
);