import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../Constant/reduxConstant";
import { UserLoginService } from "../Services/login.services";

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