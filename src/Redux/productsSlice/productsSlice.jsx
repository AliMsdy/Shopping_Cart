import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/axiosInstance";

export const fetchProductsData = createAsyncThunk(
  "products/getProductsAsync",
  async () => {
    let response = await axios.get("products");
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    error: "",
  },
  reducers: {
    increment({ products }, action) {
      const selectedProductId = products.findIndex(
        (product) => product.id === action.payload
      );
      if (selectedProductId !== -1) products[selectedProductId].amount++;
    },
    decrement({ products }, action) {
      const selectedProductId = products.findIndex(
        (product) => product.id === action.payload
      );
      if (selectedProductId !== -1) products[selectedProductId].amount--;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        const modifiedProductsArray = action.payload.map((product) => ({
          ...product,
          amount: 0,
        }));
        state.loading = false;
        state.products = modifiedProductsArray;
      })
      .addCase(fetchProductsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
  },
});

export const { increment, decrement } = productsSlice.actions;
export default productsSlice.reducer;
