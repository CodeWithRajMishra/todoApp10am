import { createSlice } from "@reduxjs/toolkit";
const productSlice= createSlice({
    name:"myproduct",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state, actions)=>{
            state.cart.push(actions.payload);
        }
    }
})
export const{addToCart} = productSlice.actions;
export default productSlice.reducer;

