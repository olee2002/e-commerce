import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CheckoutItem from '../../components/checkout-item/checkout-item'
import {
   selectCartItems,
   selectCartTotal,
} from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'

const CheckoutPage = () => {
   const dispatch = useDispatch();
   const cart = useSelector(state=>state.cart);
   const { cartItems } = cart;
   const total = cartItems && cartItems.length>0 ? cartItems.map(item=>(item.price * item.quantity)).reduce((a,b)=>a+b): 0 ;


   return (
      <div className='checkout-page'>
         <div className='checkout-header'>
            <div className='header-block'>
               <span>Product</span>
            </div>
            <div className='header-block'>
               <span>Description</span>
            </div>
            <div className='header-block'>
               <span>Quantity</span>
            </div>
            <div className='header-block'>
               <span>Price</span>
            </div>
            <div className='header-block'>
               <span>Remove</span>
            </div>
         </div>
         {cartItems ? (
            cartItems.length > 0 &&
            cartItems.map((cartItem) => (
               <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
         ) : (
            <div style={{ marginTop: 20 }}>
               Current No Item is selected. Please go back to the shop page!
            </div>
         )}
         <div className='total'>TOTAL: ${total}</div>
      </div>
   )
}

export default CheckoutPage
