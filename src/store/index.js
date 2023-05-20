import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./action/product-slice";
import categorySlice from "./action/category-slice";
import modalSlice from "./action/modal-slice";
import cartSlice from "./action/cart-slice";

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    category: categorySlice.reducer,
    modal: modalSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
