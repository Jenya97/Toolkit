import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../storeToolkit/TodoSlice/TodoSlice";

export default configureStore({
    reducer:{
      todos:todoReducer,
    }
})