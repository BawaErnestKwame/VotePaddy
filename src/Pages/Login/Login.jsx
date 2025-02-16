import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import image from '../../assets/contactimg.jpg';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  return (
    <div className='signup-page'>
      <img src={image} alt="Login Page Visual" />

      <div className="form-container">
        <h2>Hello, Welcome Back!</h2>
        <p>Log into your account</p>
        <form action="">
          <button className='loginwith-google-btn'>
            <GoogleIcon /> Login with Google
          </button>

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
            <Link to='/forgot-password'><p>Forgot Password?</p></Link>
          </div>

          <button className='login-btn'>Log In</button>
          <p>Don't have an account? <Link to='/SignUp'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
