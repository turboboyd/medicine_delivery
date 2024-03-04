import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "util/const";

export const placeOrder = createAsyncThunk(
  "cart/placeOrder",
  async (orderData, { rejectWithValue }) => {
    console.log("orderData: ", orderData);
    console.log("JSON.stringify(orderData): ", JSON.stringify(orderData));
    try {
      const response = await fetch(`${API_BASE_URL}/stores/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      console.log("response: ", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  cart: [],
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, storeId, quantity = 1 } = action.payload;
      const selectedStore = product.availableInStores.find(
        (store) => store.storeId === storeId
      );

      if (selectedStore) {
        const newCartItem = {
          medicineId: product._id,
          name: product.name,
          storeId: selectedStore.storeId,
          quantity,
          price: selectedStore.price,
          availableQuantity: selectedStore.availableQuantity,
        };
        state.cart.push(newCartItem);
      }
    },
    removeFromCart: (state, action) => {
      const { medicineId, storeId } = action.payload;
      console.log("medicineId, storeId : ", medicineId, storeId);
      const index = state.cart.findIndex(
        (item) => item.medicineId === medicineId && item.storeId === storeId
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    updateCartItem: (state, action) => {
      const { medicineId, storeId, quantity } = action.payload;
      const itemIndex = state.cart.findIndex(
        (item) => item.medicineId === medicineId && item.storeId === storeId
      );
      if (itemIndex !== -1) {
        state.cart[itemIndex].quantity = quantity;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cart = [];
      });
  },
});

export const { addToCart, removeFromCart, updateCartItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
