import React,{ useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.scss';

const SignIn = ({ getSignInInfo }) => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const history = useHistory();  

  const handleSubmit = async event => {
    event.preventDefault();
    try {
     await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
      alert('Incorrect user information, please try again!')
    }
  };

  const handleGoogleSignIn = () => {
   const displayName = signInWithGoogle();
   getSignInInfo(displayName);
   history.push('/')
  }

  const handleChange = event => {
    const { value, name } = event.target;
    if(name==='email'){
       setEmail(event.target.value)
    } else {
       setPassword(event.target.value)
    }
  };

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
          />
           <div className='buttons'>
          <CustomButton type='submit' onClick={handleSubmit}> Sign in </CustomButton>
          <CustomButton onClick={handleGoogleSignIn} isGoogleSignIn type='submit'>
              Sign in with Google
            </CustomButton>
            </div>
        </form>      
      </div>
    );
}

export default SignIn;