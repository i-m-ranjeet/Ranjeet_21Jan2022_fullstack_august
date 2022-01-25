import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  cartlist: [],
  show_cart: "-100%",
  promotions:[],
  promoapprovel:false,
  show_promos:"-100%",
  discount:0,
  message: "",
  // show_msg: false,
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
      if (state.show_cart === "0%"){
        state.show_cart = "-100%"
      }else{
        state.show_cart = "0%"
      }
    },
    setMessage:(state, action)=>{
      state.message = action.payload 
    },
    addToPromotions:(state, action)=>{
      state.promotions = action.payload.data
    },
    setShow_promos:(state)=>{
      if (state.show_promos === "-100%"){
        state.show_promos = "0"
      }else{
        state.show_promos = "-100%"
      }
    },
    setPromoapproval:(state, action)=>{
      state.promoapprovel = state.promotions.filter((promo)=>promo.code === action.payload).length?true:false
      state.discount = state.promotions.filter((promo)=>promo.code === action.payload).length?
      state.promotions.filter((promo)=>promo.code === action.payload)[0].discount:0
    }
  },
})

// Action creators are generated for each case reducer function
export const { setProducts, addToCart, setShow_cart,setShow_promos, setMessage, addToPromotions, setPromoapproval } = checkoutSlice.actions

export default checkoutSlice.reducer