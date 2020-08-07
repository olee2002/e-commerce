import React from 'react'
import { Link } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, history, dispatch, handleCancel }) => (
   <div className='cart-dropdown' onMouseLeave={handleCancel}>
      <div className='cart-cancel' onClick={handleCancel}>
         X
      </div>
      <div className='cart-items'>
         {cartItems.length ? (
            cartItems.map((cartItem) => (
               <CartItem key={cartItem.id} item={cartItem} />
            ))
         ) : (
            <span className='empty-message'>Your cart is empty</span>
         )}
      </div>
      <Link className='link-btn-container' to='/e-commerce/checkout'>
         <CustomButton onClick={() => toggleCartHidden()}>
            GO TO CHECKOUT
         </CustomButton>
      </Link>
   </div>
)

export default CartDropdown
