import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'

import './header.scss'

const Header = ({ displayName, getSignInInfo }) => {
   const cartItems = useSelector((state) => state.cart.cartItems)
   const [hide, setHide] = useState(false)
   const handleLogout = () => {
      localStorage.clear()
      getSignInInfo('')
      auth.signOut()
      alert('Signing you out!')
   }
   const handleMouseOver = () => {
      return !window.location.pathname.includes('checkout') && setHide(true)
   }

   const handleCancel = () => {
      setHide(false)
   }
   useEffect(() => {
      if (window.innerWidth < 700) {
         setHide(false)
      }
   })

   return (
      <div className='header'>
         <Link className='logo-container' to='/e-commerce'>
            <Logo className='logo' />
         </Link>
         <div className='options'>
            <div className='option' to='/e-commerce/signin'>
               {displayName ? `Welcome ${displayName}!` : null}
            </div>
            <Link className='option' to='/e-commerce/shop'>
               SHOP
            </Link>
            <Link className='option' to='/e-commerce/contact'>
               CONTACT
            </Link>
            {displayName ? (
               <Link to='/e-commerce/signin' onClick={handleLogout}>
                  SIGNOUT
               </Link>
            ) : (
               <Link className='option' to='/e-commerce/signin'>
                  SIGNIN
               </Link>
            )}
            <Link
               className='option'
               to='/e-commerce/checkout'
               onMouseOver={handleMouseOver}>
               <CartIcon />
            </Link>
            {hide ? (
               <CartDropdown
                  cartItems={cartItems}
                  handleCancel={handleCancel}
                  onMouseOver={handleMouseOver}
               />
            ) : null}
         </div>
      </div>
   )
}

export default Header
