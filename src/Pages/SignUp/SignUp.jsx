import React from 'react'
import { NavLink } from 'react-router-dom'
import image2 from '../../assets/image2.jpeg'

const SignUp = () => {
  return (
    <div className='signup-page'>
        <img src={image2} alt="" />

        <div className="form-container">
            <h2>Hello, Welcome Back!</h2>
            <p>Log into your account</p>
            <form action="">
                <div className="input-field">
                    <input type="text" placeholder='Log in with Google'/>
                </div>

                <div className="input-field">
                    <label htmlFor="">Email<span>*</span></label>
                    <input type="email" placeholder='name@domain.com'/>
                </div>
                <div className="input-field">
                    <label htmlFor="">Password<span>*</span><span>*</span></label>
                    <input type="password" placeholder='Enter your password'/>
                </div>

                <div className="remember-forgot">
                    <input type="check" />
                    <p>Forgot Password</p>
                </div>

                <button className='login-btn'>Log In</button>
                <p>Don't have an account? <NavLink>Sign Up</NavLink> </p>
            </form>
        </div>

    </div>
  )
}

export default SignUp