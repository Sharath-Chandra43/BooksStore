import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
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
          },
          removeItem: (state, action) => {
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
          },
        clearCart:(state,action)=>{
            state.items.length=0;
        }, 
        

    }
})

export const { addItem,clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;