import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.total = existingItem.price * existingItem.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1, total: action.payload.price });
      }
      state.totalPrice = state.cartItems.reduce((sum, item) => sum + item.total, 0);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      state.totalPrice = state.cartItems.reduce((sum, item) => sum + item.total, 0);
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.total = item.price * item.quantity;
      }
      state.totalPrice = state.cartItems.reduce((sum, item) => sum + item.total, 0);
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.total = item.price * item.quantity;
      }
      state.totalPrice = state.cartItems.reduce((sum, item) => sum + item.total, 0);
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     cartItems: [],
//     totalPrice: 0
// }

// export const createSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {
//             const existingItem = state.cartItems.find(item => item.id === action.payload.id)
//             if (existingItem) {
//                 existingItem.quantity += 1
//                 existingItem.total = existingItem.price * existingItem.quantity
//             } else {
//                 state.cartItems.push({ ...action.payload, quantity: 1, total: action.payload.price })
//             }
//             state.totalPrice = state.cartItems.reduce((sum,item)=>sum+item.total,0)
//         }
//     }
// })