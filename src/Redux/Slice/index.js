import { combineReducers } from "@reduxjs/toolkit";
import homeSlices from "./home.slices";
import loginSlices from "./login.slices";

export default combineReducers({
  login: loginSlices,
  getBikeList: homeSlices,
})