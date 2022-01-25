import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShow_cart } from '../reducers/Reducers';
function Nav() {
  const [animate,setAnimate]=useState({animation:"cartitems .2s linear forwards"})
  const data = useSelector((state) => state.checkout)
  const dispatch = useDispatch()
  const [cart_quantity,setCart_quantity]= useState(0)

useEffect(() => {
  let temp = 0
  for(let i=0;i<data.cartlist.length;i++){
    temp +=data.cartlist[i].quantity
  }
  setCart_quantity(temp)
}, [data.cartlist])
  return (
  <>
    <nav className="navbar">
      <h1 className="checkoutheading">Single Checkout Page</h1>
      <ul className="navlist">
        <li className="promocodes">Promo Codes</li>
        <li className="cart" onClick={()=>dispatch(setShow_cart())}>
          <i className="fas fa-shopping-cart"></i>
  <div className="itemsquantity" style={animate} key={cart_quantity}>{cart_quantity?cart_quantity:"+"}</div>
        </li>
      </ul>
    </nav>        
  </>
  );
}

export default Nav;