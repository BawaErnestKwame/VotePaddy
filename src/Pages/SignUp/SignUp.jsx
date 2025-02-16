import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import image from '../../assets/contactimg.jpg'
import GoogleIcon from '@mui/icons-material/Google';

const SignUp = () => {
  return (
    <div className='signup-page'>
        <img src={image} alt="" />

        <div className="form-container">
            <h2>Hello, Welcome Back!</h2>
            <p>Log into your account</p>
            <form action="">
                <button className='loginwith-googl-btn'> <GoogleIcon/> Login with google</button>

                <div className="input-fields">
                    <label htmlFor="" className='email'>Email<span>*</span></label>
                    <input type="email" placeholder='name@domain.com'/>
                </div>
                <div className="input-fields">
                    <label htmlFor="" className='password'>Password<span>*</span></label>
                    <input type="password" placeholder='Enter your password'/>
                </div>

                <div className="remember-forgot">
                    <div className="check-box">
                    <input type="checkbox" className=''/>
                    <p>Remember Me</p>

                    </div>
                  
                   <Link to=''> <p>Forgot Password?</p></Link>
                </div>

                <button className='login-btn'>Log In</button>
                <p>Don't have an account? <Link to='/Login'>Sign Up</Link> </p>
            </form>
        </div>

    </div>
  )
}

export default SignUp