import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, handleCancel }) => {
   const dispatch = useDispatch();
   const item = useSelector(state=>state.cart)
   
   return (
   <div className='cart-dropdown' onMouseLeave={handleCancel} style={{ height: cartItems && cartItems.length> 2 ? '440px':'300px' }}>
      <div className='cart-items'>
         {cartItems && cartItems.length > 0 && (
            <div className='message'>
               You have <strong>{cartItems.map(item=>item.quantity).reduce((a,b)=>a+b)}</strong> item(s) in your
               shopping cart.
            </div>
         )}
         {cartItems.length ? (
            cartItems.map((cartItem) => (
               <div className='container'>
               <CartItem key={cartItem.id} item={cartItem} />
               <strong className='cursor' onClick={() => dispatch(clearItemFromCart(cartItem))}>X</strong>
               </div>
            ))
         ) : (
            <span className='empty-message'>Your cart is empty.</span>
         )}
      </div>
      <Link className='link-btn-container' to='/e-commerce/checkout'>
         <CustomButton onClick={handleCancel}>GO TO CHECKOUT</CustomButton>
      </Link>
   </div>
)}

export default CartDropdown
