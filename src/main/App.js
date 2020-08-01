import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from '../pages/homepage';
import ShopPage from '../pages/shop';
import SignInAndSignUpPage from '../pages/sign-in';
import Header from '../components/header';

function App() {
   const [currentUser, setCurrentUser]=useState('')
   useEffect(()=>{
      
   },[])
  return (
    <div>
      <Header currentUser={currentUser}/>
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
