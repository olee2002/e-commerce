import React from 'react'
import { Link } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, history, dispatch, handleCancel }) => (
   <div className='cart-dropdown' onMouseLeave={handleCancel} style={{ height: cartItems && cartItems.length> 3 ? '490px':'400px' }}>
      <div className='cart-cancel' onClick={handleCancel}>
         X
      </div>
      <div className='cart-items'>
         {cartItems && cartItems.length > 0 && (
            <div className='message'>
               You have <strong>{cartItems.length}</strong> item(s) in your
               shopping cart.
            </div>
         )}
         {cartItems.length ? (
            cartItems.map((cartItem) => (
               <CartItem key={cartItem.id} item={cartItem} />
            ))
         ) : (
            <span className='empty-message'>Your cart is empty.</span>
         )}
      </div>
      <Link className='link-btn-container' to='/e-commerce/checkout'>
         <CustomButton onClick={handleCancel}>GO TO CHECKOUT</CustomButton>
      </Link>
   </div>
)

export default CartDropdown
