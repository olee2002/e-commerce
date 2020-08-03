import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

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
   const [currentUser, setCurrentUser]=useState('')
   const [displayName, setDisplayName]=useState('');

   useEffect(()=>{
      // check if user is already logged in and display it in header
      auth.onAuthStateChanged((user) =>{
         user && setDisplayName(user.displayName);
      })
   })

   const getSignInInfo=(displayName)=>{
      setDisplayName(displayName);
   }
   useEffect(()=>{
      getSignInInfo(displayName);
   },[displayName]);

  return (
    <div>
      <Header displayName={displayName} getSignInInfo={getSignInInfo} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/e-commerce' component={HomePage} />
        <Route exact path='/e-commerce/shop' component={ShopPage} />
        <Route exact path='/e-commerce/shop/:collectionId' component={ShopPage} />
        <Route exact path='/e-commerce/signin' render={()=><SignInAndSignUpPage displayName={displayName} getSignInInfo={getSignInInfo} />} /> 
        <Route exact path='/e-commerce/contact' component={Contact} />
        <Route exact path='/e-commerce/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
}

export default App;
