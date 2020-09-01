import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  dataSlice: dataSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
