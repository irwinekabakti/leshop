import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./action/category-slice";

const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
  },
});

export default store;
