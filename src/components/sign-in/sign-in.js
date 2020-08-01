import React,{ useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/costom-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.scss';

const SignIn = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const history = useHistory();  

  const handleSubmit = event => {
    event.preventDefault();
    history.push('/')
  };

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

        <form onSubmit={handleSubmit}>
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
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn type='submit'>
              Sign in with Google
            </CustomButton>
            </div>
        </form>
      </div>
    );
}

export default SignIn;