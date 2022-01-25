import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addToCart } from '../reducers/Reducers'
function Cartitems() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.checkout)
    const removeFromCart = (name) => {
        axios.get(`http://127.0.0.1:8000/remove/${name}`).then((res) => {
            // console.log(res.data);
            dispatch(addToCart(res.data))

        })
    }
    const ToCart=(id)=>{
        axios.get(`http://127.0.0.1:8000/add/${id}`).then((res)=>{
            dispatch(addToCart(res.data))
      })
    }
    return (
        <div className='cartholder' style={{ right: data.show_cart }}>
            <div className='cartitems'>
                <h1 className='cartheading'>Your Cart</h1>
                <div className='productdata'>
                    <div>Product</div>
                    <div>Quantity</div>
                    <div>Price</div>
                    <div>Amount</div>

                </div>
                {
                    data.cartlist.map(item => (
                        <div className='cartitem' key={item.course_name}>
                            <div>{item.course_name}</div>
                            <div className='quantity'>
                                {item.quantity < 2 ? <div className='add_removebtn' onClick={() => removeFromCart(item.course_name)}><i className="far fa-trash-alt"></i></div> : <div className='add_removebtn' onClick={() => removeFromCart(item.course_name)}><i className="fas fa-minus-square"></i></div>}
                                <div className='quantitycounter'>{item.quantity}</div>
                                <div className='add_removebtn' onClick={()=>ToCart(Number(item.course_name[item.course_name.length-1]))}><i className="fas fa-plus-square"></i></div>
                            </div>
                            <div className='price'>{data.products.filter(product=>product.name===item.course_name)[0].price_p_m}</div>
                            <div className='amount'>{(data.products.filter(product=>product.name===item.course_name)[0].price_p_m *item.quantity).toFixed(2)}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cartitems
