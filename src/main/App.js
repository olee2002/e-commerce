import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from '../pages/homepage';
import ShopPage from '../pages/shop/shop';
import SignInAndSignUpPage from '../pages/sign-in/sign-in-up';
import Header from '../components/header/header';

function App() {
   const [currentUser, setCurrentUser]=useState('')
   const [displayName, setDisplayName]=useState('stranger');

   useEffect(()=>{
      const displayNameStored = localStorage.getItem('displayName');
      setDisplayName(displayNameStored);
   })

  return (
    <div>
      <Header currentUser={currentUser} displayName={displayName}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/e-commerce' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
