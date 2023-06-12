import { combineReducers } from "@reduxjs/toolkit";
import homeSlices from "./home.slices";
import loginSlices from "./login.slices";
import profileSlices from "./profile.slices";

export default combineReducers({
  login: loginSlices,
  getBikeList: homeSlices,
  Profile:profileSlices,
  
})