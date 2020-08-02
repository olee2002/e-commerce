import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'

import './header.scss'

const Header = ({ displayName, getSignInInfo, hidden }) => {
   const handleLogout = () => {
      localStorage.clear();
      getSignInInfo('');
      auth.signOut();
      alert('Signing you out!');
   }
   return (
      <div className='header'>
         <Link className='logo-container' to='/'>
            <Logo className='logo' />
         </Link>
         <div className='options'>
            <div className='option' to='/e-commerce/signin'>
               {displayName && `Welcome ${displayName}!`}
            </div>
            <Link className='option' to='/shop'>
               SHOP
            </Link>
            {displayName ? (
               <Link to='/e-commerce/signin' onClick={handleLogout}>SIGN-OUT</Link>
            ) : (
               <Link className='option' to='/e-commerce/signin'>
                  SIGN-IN
               </Link>
            )}
            <Link className='option' to='/e-commerce/contact'>
               CONTACT
            </Link>
            <Link className='option' to='/e-commerce/checkout'><CartIcon /></Link>
            {!hidden ? null : <CartDropdown />}
         </div>
      </div>
   )
}

export default Header
