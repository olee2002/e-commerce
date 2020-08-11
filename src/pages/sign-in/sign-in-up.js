import React from 'react';
import { useHistory } from 'react-router-dom';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import { auth } from '../../firebase/firebase.utils';

import './sign-in.scss';

const SignInAndSignUpPage = ({ displayName, getSignInInfo }) => {
   const { currentUser } = auth;
   const history = useHistory();
   if(currentUser && currentUser.email){
      console.log('currentUser.email',currentUser.email)
      history.push('/e-commerce')
   } 
   return (
  <div className='sign-in-and-sign-up'>
    <SignIn getSignInInfo={getSignInInfo} />
    {!displayName && <SignUp />}
  </div>
);
   }

export default SignInAndSignUpPage;