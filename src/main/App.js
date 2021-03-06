import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from '../pages/homepage/homepage';
import ShopPage from '../pages/shop/shop';
import Contact from '../pages/contact/contact';
import SignInAndSignUpPage from '../pages/sign-in/sign-in-up';
import Header from '../components/header/header';
import CheckoutPage from '../pages/checkout/checkout';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import { setCurrentUser } from '../redux/user/user.actions';
import { selectCurrentUser } from '../redux/user/user.selectors';

function App() {
   const [displayName, setDisplayName]=useState('');
   const { currentUser } = auth;

   useEffect(()=>{
      // check if user is already logged in and display it in header
      auth.onAuthStateChanged((user) =>{
         const getUsername=user && user.email.split('@')[0];
         const userName = getUsername && getUsername.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
         user && setDisplayName(user.displayName || userName);
      })
   })

   const getSignInInfo=(displayName)=>{
      setDisplayName(displayName);
   }

   useEffect(()=>{
      getSignInInfo(displayName);
   },[displayName]);

  return (
    <div className='page-layout'>
      <Header displayName={displayName} getSignInInfo={getSignInInfo} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/e-commerce' component={HomePage} />
        <Route exact path='/e-commerce/shop' component={ShopPage} />
        <Route exact path='/e-commerce/shop/:collectionId' component={ShopPage} />
        <Route exact path='/e-commerce/signin' render={()=><SignInAndSignUpPage displayName={displayName} getSignInInfo={getSignInInfo} />} /> 
        <Route exact path='/e-commerce/contact' component={Contact} />
        <Route exact path='/e-commerce/checkout' component={CheckoutPage} />
        <Route path='*' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
