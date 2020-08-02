import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from '../pages/homepage/homepage';
import ShopPage from '../pages/shop/shop';
import SignInAndSignUpPage from '../pages/sign-in/sign-in-up';
import Header from '../components/header/header';
import { auth } from '../firebase/firebase.utils'

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
      console.log('getSignInInfo displayName',displayName)
      setDisplayName(displayName);
   }
   useEffect(()=>{
      getSignInInfo(displayName);
      console.log('I ran?')
   },[displayName]);

  return (
    <div>
      <Header displayName={displayName} getSignInInfo={getSignInInfo} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/e-commerce' component={HomePage} />
        <Route exact path='/e-commerce/shop' component={ShopPage} />
        <Route exact path='/e-commerce/signin' render={()=><SignInAndSignUpPage getSignInInfo={getSignInInfo} />} />
      </Switch>
    </div>
  );
}

export default App;
