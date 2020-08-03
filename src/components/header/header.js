import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'

import './header.scss'

const Header = ({ displayName, getSignInInfo, hidden }) => {
   const cartItems = useSelector(state=>state.cart.cartItems);
   const [ hide, setHide ] = useState(false);
   const handleLogout = () => {
      localStorage.clear();
      getSignInInfo('');
      auth.signOut();
      alert('Signing you out!');
   }
   const handleHover = ()=>{
      return cartItems && cartItems.length===0 && setHide(true);
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
            <Link className='option' to='/e-commerce/contact'>
               CONTACT
            </Link>
            {displayName ? (
               <Link to='/e-commerce/signin' onClick={handleLogout}>SIGN-OUT</Link>
            ) : (
               <Link className='option' to='/e-commerce/signin'>
                  SIGN-IN
               </Link>
            )}
            <Link className='option' to='/e-commerce/checkout' onMouseOver={handleHover}><CartIcon /></Link>
            {hide ? <CartDropdown cartItems={cartItems}/>: null }
         </div>
      </div>
   )
}

export default Header
