import { combineReducers } from "@reduxjs/toolkit";
import loginSlices from "./login.slices";

export default combineReducers({
  login: loginSlices,
})