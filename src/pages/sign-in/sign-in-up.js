import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import './sign-in.scss';

const SignInAndSignUpPage = ({ getSignInInfo }) => (
  <div className='sign-in-and-sign-up'>
    <SignIn getSignInInfo={getSignInInfo} />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;