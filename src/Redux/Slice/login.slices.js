import { createSlice } from "@reduxjs/toolkit";
import { userLoginAsync } from "../AsyncThunk/login.asyncThunk";
import { THUNK_STATUS } from "../Constant/reduxConstant";
const initialState={
user: null,
token: null,
userLoginStatus: null,
}
export const LoginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(userLoginAsync.pending,(state, action)=>{
            state.userLoginStatus = THUNK_STATUS.LOADING;
        });
        builder.addCase(userLoginAsync.fulfilled,(state,action)=>{
            state.userLoginAsync = THUNK_STATUS.SUCCESS;
        });
        builder.addCase(userLoginAsync.rejected,(state,action)=>{
            state.userLoginAsync=THUNK_STATUS.FAILED;
        });
    },
});
export const loginState =(state)=> state.loginState;
export default LoginSlice.reducer;