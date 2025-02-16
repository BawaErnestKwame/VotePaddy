import './SignUp.css'

import React from 'react'
import image from '../../assets/contactimg.jpg';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';


const SignUp = () => {
  return (
    <div className='signup-page'>
    <img src={image} alt="Login Page Visual" />

    <div className="form-container">
      <h2>Hello, Welcome to VotePaddy</h2>
      <p>Create an account</p>
      <form action="">
        <button className='loginwith-google-btn'>
          <GoogleIcon /> Sign Up with Google
        </button>

        <div className="input-fields">
          <label htmlFor="" className='UserName'>UserName<span>*</span></label>
          <input type="text" placeholder=' Enter your  UserName' required />
        </div>
        <div className="input-fields">
          <label htmlFor="" className='email'>Email<span>*</span></label>
          <input type="email" placeholder='name@domain.com' required />
        </div>

        <div className="input-fields">
          <label htmlFor="" className='password'>Password<span>*</span></label>
          <input type="password" placeholder='Enter your password' required />
        </div>

        <div className="remember-forgot">
          <div className="check-box">
            <input type="checkbox" />
            <p>Remember Me</p>
          </div>
        </div>

        <button className='login-btn'>Create Account</button>
        <p>Don't have an account? <Link to='/Login'>Sign In</Link></p>
      </form>
    </div>
  </div>
  )
}

export default SignUp