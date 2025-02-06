import { createSlice } from "@reduxjs/toolkit";
import { calculateTotal } from "../../utils/functions";

const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return { items: [] };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { items: [] };
  }
};

const saveCartState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch {
    console.error("Error al guardar el carrito");
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartState(),
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      saveCartState(state);
    },
    removeItem: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== idToRemove);
      saveCartState(state);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartState(state);
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

// Selectors
export const selectCartItemsQuantity = (state) => state.cart.items.length;
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) => calculateTotal(state.cart.items);
export const selectCartItemById = (state, id) =>
  state.cart.items.find((item) => item.id === id);
