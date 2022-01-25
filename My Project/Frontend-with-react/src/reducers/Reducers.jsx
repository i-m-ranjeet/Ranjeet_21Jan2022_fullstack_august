import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  products: [],
  cartlist: [],
  message: "",
  show_msg: false,
  show_cart: "-100%"
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setProducts: (state,action) => {
      state.products = action.payload
     
    },
    addToCart: (state, action) => {
      state.cartlist = []
      for (const key in action.payload) {
        let obj ={}
        obj.course_name =key
        obj.quantity =  action.payload[key]
        state.cartlist.push(obj);
    } 
    },
    setShow_cart: (state) => {
      if (state.show_cart == "0%"){
        state.show_cart = "-100%"
      }else{
        state.show_cart = "0%"
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProducts, addToCart, setShow_cart } = checkoutSlice.actions

export default checkoutSlice.reducer