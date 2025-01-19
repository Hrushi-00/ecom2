import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cartItems");
  return savedCart ? JSON.parse(savedCart) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromLocalStorage(),
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items)); // Save to local storage
    },
    removeItem: (state, action) => {
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      ); // Filter out the item by ID
      state.items = filteredItems; // Update the state with filtered items
      localStorage.setItem("cartItems", JSON.stringify(state.items)); // Save to local storage
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems"); // Clear from local storage
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
