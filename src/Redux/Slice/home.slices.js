import { createSlice } from "@reduxjs/toolkit"
import { AddCategorieAsync, AddProductAsync, CategorieAsync,HomeAsyncThunk } from "../AsyncThunk/home.asyncThunk"
import { THUNK_STATUS } from "../Constant/reduxConstant"

const initialState={
    data:null,

    categories:null,
    status:{
        homeStatus:null,
        categoriesStatus:null,
        productStatus:null,

    }
}
export const homeSlice = createSlice({
    name:"getBikeList",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(HomeAsyncThunk.pending,(state,action)=>{
            state.status.homeStatus =THUNK_STATUS.LOADING;
        });
        builder.addCase(HomeAsyncThunk.fulfilled,(state,action)=>{
            state.status.homeStatus=THUNK_STATUS.SUCCESS;
            // console.log(action,"action")
            state.data=action?.payload?.data;
        });
        builder.addCase(HomeAsyncThunk.rejected,(state,action)=>{
            state.status.homeStatus=THUNK_STATUS.FAILED;
        });

// categories 
        builder.addCase(CategorieAsync.pending,(state,action)=>{
            state.status.categoriesStatus =THUNK_STATUS.LOADING;
        });
        builder.addCase(CategorieAsync.fulfilled,(state,action)=>{
            state.status.categoriesStatus=THUNK_STATUS.SUCCESS;
            console.log(action.payload.data,"action catgories___________________")
            state.categories=action?.payload?.data;
        });
        builder.addCase(CategorieAsync.rejected,(state,action)=>{
            state.status.categoriesStatus=THUNK_STATUS.FAILED;
        });
        //  Add categories

        builder.addCase(AddCategorieAsync.pending,(state,action)=>{
            state.status.categoriesStatus =THUNK_STATUS.LOADING;
        });
        builder.addCase(AddCategorieAsync.fulfilled,(state,action)=>{

            state.status.categoriesStatus=THUNK_STATUS.SUCCESS;
            
        });
        builder.addCase(AddCategorieAsync.rejected,(state,action)=>{
            state.status.categoriesStatus=THUNK_STATUS.FAILED;
        });
             //  Add products

             builder.addCase(AddProductAsync.pending,(state,action)=>{
                state.status.productStatus =THUNK_STATUS.LOADING;
            });
            builder.addCase(AddProductAsync.fulfilled,(state,action)=>{
    
                state.status.productStatus=THUNK_STATUS.SUCCESS;
                
            });
            builder.addCase(AddProductAsync.rejected,(state,action)=>{
                state.status.productStatus=THUNK_STATUS.FAILED;
            });
    },
});
export const homeState = (state)=> state.homeState;
export default homeSlice.reducer;