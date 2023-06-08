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
    reducers:{
        removeToken: (state, action) => {
            state.token = null;
            state.user = null;
          },
    },
    extraReducers:(builder)=>{
        builder.addCase(userLoginAsync.pending,(state, action)=>{
            state.userLoginStatus = THUNK_STATUS.LOADING;
        });
        builder.addCase(userLoginAsync.fulfilled,(state,action)=>{
            state.userLoginAsync = THUNK_STATUS.SUCCESS;
         state.token = action?.payload?.data?.access_token
        });
        builder.addCase(userLoginAsync.rejected,(state,action)=>{
            state.userLoginAsync=THUNK_STATUS.FAILED;
        });
    },
});
export const {removeToken}=LoginSlice.actions;


export const loginState =(state)=> state.loginState;
export default LoginSlice.reducer;