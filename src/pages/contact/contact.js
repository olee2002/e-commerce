import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import './contact.scss';

const SignInAndSignUpPage = ({ getSignInInfo }) => (
  <div className='contact'>
     <div className='line'/>
     <img className='cat-box' style={{width: 600}} src="https://res.allmacwallpaper.com/get/Retina-MacBook-Air-13-inch-wallpapers/Black-Cat-2560x1600/9618-11.jpg"/>
    <div className='text'>This site is currently being built. Any inquiries about the site please contact "Dev O'lee" @ babylee2002@gmail.com</div>
    <div className='line'/>
  </div>
);

export default SignInAndSignUpPage;