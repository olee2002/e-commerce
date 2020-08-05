import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import './contact.scss';

const SignInAndSignUpPage = ({ getSignInInfo }) => (
  <div className='contact'>
     <div className='line'/>
     <img className='cat-box' style={{width: 600}} src="./black-cat.jpg"/>
    <div className='text'>This site is currently being built. Any inquiries about the site please contact "Dev O'lee" @ babylee2002@gmail.com</div>
    <div className='line'/>
  </div>
);

export default SignInAndSignUpPage;