import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setProducts: (state,action) => {
      state.products = action.payload
      console.log(action.payload);
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProducts, decrement, incrementByAmount } = checkoutSlice.actions

export default checkoutSlice.reducer