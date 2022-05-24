import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-state";

const store = configureStore(authSlice);
export default store;

