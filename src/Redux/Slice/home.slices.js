import { createSlice } from "@reduxjs/toolkit"
import { HomeAsync } from "../AsyncThunk/home.asyncThunk"
import { THUNK_STATUS } from "../Constant/reduxConstant"

const initialState={
    data:null,
    homeStatus:null,
}
export const homeSlice = createSlice({
    name:"getBikeList",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(HomeAsync.pending,(state,action)=>{
            state.homeStatus =THUNK_STATUS.LOADING;
        });
        builder.addCase(HomeAsync.fulfilled,(state,action)=>{
            state.homeStatus=THUNK_STATUS.SUCCESS;
            console.log(action,"action")
            state.data=action?.payload?.data;
        });
        builder.addCase(HomeAsync.rejected,(state,action)=>{
            state.homeStatus=THUNK_STATUS.FAILED;
        });
    },
});
export const homeState = (state)=> state.homeState;
export default homeSlice.reducer;