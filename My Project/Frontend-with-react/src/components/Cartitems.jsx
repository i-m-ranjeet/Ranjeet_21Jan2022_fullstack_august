import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addToCart, setMessage, setPromoapproval } from '../reducers/Reducers'
function Cartitems() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.checkout)
    const [promo,setPromo]= useState(false)
    const [whichpromo,setWhichpromo]=useState("")
    

    const removeFromCart = (name) => {
        axios.get(`http://127.0.0.1:8000/remove/${name}`).then((res) => {
            // console.log(res.data);
            dispatch(addToCart(res.data))
        })
        dispatch(setMessage(name+ " Removed from Cart"))
    }

    const ToCart=(id, name)=>{
        axios.get(`http://127.0.0.1:8000/add/${id}`).then((res)=>{
            dispatch(addToCart(res.data))
      })
      dispatch(setMessage(name+ " Added to Cart"))
    }

    const Promo=(e)=>{
        setWhichpromo(e.target.value)
    }
    const promoApplied=()=>{
        dispatch(setPromoapproval(whichpromo))
    }

    return (
        <div className='cartholder' style={{ right: data.show_cart }}>
            <div className='cartitems'>
                <h1 className='cartheading'>Your Cart</h1>
                {data.cartlist.length?<div className='productdata'>
                    <div>Product</div>
                    <div>Quantity</div>
                    <div>Price</div>
                    <div>Amount</div>

                </div>:""}
                {
                    data.cartlist.length?data.cartlist.map(item => (
                        <div className='cartitem' key={item.course_name}>
                            <div>{item.course_name}</div>
                            <div className='quantity'>
                                {item.quantity < 2 ? <div className='add_removebtn' onClick={() => removeFromCart(item.course_name)}><i className="far fa-trash-alt"></i></div> : <div className='add_removebtn' onClick={() => removeFromCart(item.course_name)}><i className="fas fa-minus-square"></i></div>}
                                <div className='quantitycounter'>{item.quantity}</div>
                                <div className='add_removebtn' onClick={()=>ToCart(Number(item.course_name[item.course_name.length-1]), item.course_name)}><i className="fas fa-plus-square"></i></div>
                            </div>
                            <div className='price'>${data.products.filter(product=>product.name===item.course_name)[0].price_p_m}</div>
                            <div className='amount'>${(data.products.filter(product=>product.name===item.course_name)[0].price_p_m *item.quantity).toFixed(2)}</div>
                        </div>
                    )):<div className='emptycart'>Empty</div>
                }
                <div className="totalamount">
                    <div>
                        {promo?<div className='promo'>
                            <input type="text" name="" id="" className='promofield' placeholder='Enter your promo here...' onChange={Promo}/> 
                            <div className='applypromo' onClick={promoApplied}>Apply</div>
                            {data.promoapprovel?<div className='promostatus' style={{color: "rgb(43, 131, 77)"}}>applied... &#10004;</div>:
                            <div className='promostatus' style={{color: "rgb(230, 33, 33)"}}>enter valid promo... &#10008;</div>}{console.log(data.promoapprovel)}
                        </div>:<div onClick={()=>setPromo(true)}  className="havepromo">Have a promocode</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cartitems
