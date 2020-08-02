import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'

import './header.scss'

const Header = ({ displayName, getSignInInfo }) => {
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
            <Link className='option' to='/e-commerce/shop'>
               SHOP
            </Link>
            {displayName ? (
               <Link to='/e-commerce/signin' onClick={handleLogout}>SIGN-OUT</Link>
            ) : (
               <Link className='option' to='/e-commerce/signin'>
                  SIGN-IN
               </Link>
            )}
            <Link className='option' to='/e-commerce/signin'>
               CONTACT
            </Link>
         </div>
      </div>
   )
}

export default Header
