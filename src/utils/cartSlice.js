import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        cartLength:0,
        orderSuccessMessage:null,
        errorMessage:null
    },
    reducers:{
        addItem: (state, action) => {
            const existingItem = state.items.find(
              (item) => item.isbn13 === action.payload.isbn13
            );
      
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.items.push({ ...action.payload, quantity: 1 });
            }

            state.cartLength = state.items.reduce(
              (total, item) => total + item.quantity,
              0
            );
          },
          removeItem: (state, action) => {
            const existingItem = state.items.find(
              (item) => item.isbn13 === action.payload.isbn13
            );
      
            if (existingItem) {
              state.items = state.items.filter(
                (item) => item.isbn13 !== action.payload.isbn13
              );
            }
            state.cartLength = state.items.reduce(
              (total, item) => total + item.quantity,
              0
            );
          },
         decrementItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.isbn13 === action.payload.isbn13
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.isbn13 !== action.payload.isbn13
        );
      }
      state.cartLength = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
      clearCart:(state,action)=>{
            state.items.length=0;
      }, 
    
      orderCompleted:(state,action)=>{
        state.items = [];
      state.cartLength = 0;
      state.orderSuccessMessage = "Order successfully!";
      state.errorMessage=null
    },
    ErrorMessage:(state,action)=>{
    state.errorMessage=action.payload
  },

    }
})

export const { addItem,clearCart, removeItem,decrementItem,orderCompleted,ErrorMessage } = cartSlice.actions;
export default cartSlice.reducer;