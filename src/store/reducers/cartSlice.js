import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    // ADD TO CART

    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.id === item.id);

      // IF PRODUCT ALREADY EXISTS

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.id === existItem.id
            ? {
                ...x,

                // ADD CUSTOM QUANTITY

                quantity: x.quantity + item.quantity,
              }
            : x,
        );
      } else {
        // ADD NEW PRODUCT

        state.cartItems.push({
          ...item,

          quantity: item.quantity || 1,
        });
      }

      // SAVE TO LOCAL STORAGE

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // REMOVE FROM CART

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // INCREASE QUANTITY

    increaseQty: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // DECREASE QUANTITY

    decreaseQty: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item,
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // CLEAR CART

    clearCart: (state) => {
      state.cartItems = [];

      localStorage.removeItem("cartItems");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
