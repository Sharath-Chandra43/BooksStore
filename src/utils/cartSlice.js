import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state,   
            action) => {
                 state.items = state.items.filter(item => item.isbn13 !== action.payload);   
           
               },
        clearCart:(state,action)=>{
            state.items.length=0;
        }, 
        

    }
})

export const { addItem,clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;