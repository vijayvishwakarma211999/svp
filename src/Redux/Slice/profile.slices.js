import { createSlice } from "@reduxjs/toolkit"
import { ProfileAsyncThunk } from "../AsyncThunk/profile.asyncThunk"
import { ASYNC_ROUTES, THUNK_STATUS } from "../Constant/reduxConstant"


const initialState={
data:null,
ProfileStatus:null,
}
export const ProfileSlices = createSlice({
name:"Profile",
initialState,
reducers:{},
extraReducers:(builder)=>{
    builder.addCase(ProfileAsyncThunk.pending,(state , action)=>{
        state.ProfileStatus = THUNK_STATUS.LOADING;
    });
    builder.addCase(ProfileAsyncThunk.fulfilled,(state , action)=>{
        state.ProfileStatus = THUNK_STATUS.SUCCESS;
        // console.log(action,"action_______________________")

        state.data = action?.payload?.data;
    });
    builder.addCase(ProfileAsyncThunk.rejected,(state,action)=>{
        state.ProfileStatus = THUNK_STATUS.FAILED;
    });
},
});
export const ProfileState = (state)=>state.ProfileState;
export default ProfileSlices.reducer;
