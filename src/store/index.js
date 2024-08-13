import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slices/CategorySlice"

export const store = configureStore({
    reducer:{
        category: categoryReducer 
    }
})