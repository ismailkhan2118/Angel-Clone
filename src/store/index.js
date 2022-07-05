import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-state";

const store = configureStore({
    reducer: {
        auth: authSlice
    }
});
export default store;

