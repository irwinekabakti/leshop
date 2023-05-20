import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/apiURL";
import { STATUS } from "../../utils/status";

const initialState = {
  data: [],
  status: STATUS.IDLE,
  catchProductsAll: [],
  catchProductsAllStatus: STATUS.IDLE,
  catchProductSingle: [],
  catchProductSingleStatus: STATUS.IDLE,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setCategoriesProductsAll(state, action) {
      state.catchProductsAll = action.payload;
    },
    setCategoriesStatusAll(state, action) {
      state.catchProductsAllStatus = action.payload;
    },
    setCategoriesProductSingle(state, action) {
      state.catchProductSingle = action.payload;
    },
    setCategoriesStatusSingle(state, action) {
      state.catchProductSingleStatus = action.payload;
    },
  },
});

export const {
  setCategories,
  setStatus,
  setCategoriesProductsAll,
  setCategoriesStatusAll,
  setCategoriesProductSingle,
  setCategoriesStatusSingle,
} = categorySlice.actions;

export default categorySlice;

export const fetchCategories = () => {
  return async function fetchCategoryThunk(dispatch) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await fetch(`${BASE_URL}categories`);

      const data = await response.json();
      dispatch(setCategories(data.slice(0, 5)));
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};

export const fetchProductsByCategory = (categoryID, dataType) => {
  return async function fetchCategoryProductThunk(dispatch) {
    if (dataType === "all") {
      dispatch(setCategoriesStatusAll(STATUS.LOADING));
    }

    if (dataType === "single") {
      dispatch(setCategoriesStatusSingle(STATUS.LOADING));
    }

    try {
      const response = await fetch(
        `${BASE_URL}categories/${categoryID}/products`
      );
      const data = await response.json();
      if (dataType === "all") {
        dispatch(setCategoriesProductsAll(data.slice(0, 10)));
        dispatch(setCategoriesStatusAll(STATUS.IDLE));
      }

      if (dataType === "single") {
        dispatch(setCategoriesProductSingle(data.slice(0, 20)));
        dispatch(setCategoriesStatusSingle(STATUS.IDLE));
      }
    } catch (error) {
      if (dataType === "all") {
        dispatch(setCategoriesStatusAll(STATUS.ERROR));
      }

      if (dataType === "single") {
        dispatch(setCategoriesStatusSingle(STATUS.ERROR));
      }
    }
  };
};
