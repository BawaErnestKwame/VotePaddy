import React from 'react'
import './Forgot.css'
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <div className='forgot-cont'>
        <div className="items">
            <div className="password-email">
                <h1>Forgot Password?</h1>
                <p>Enter your email to reset your password</p>
            </div>

            <div className="label-remember-password">
             
                <p>Remember your Password?<Link>Login</Link></p>
             
                </div>
                <label htmlFor="">Email <span>*</span></label>
                <input type="text" placeholder='Enter your email address' />


          
            <p className='reset-password'>Reset Password</p>



        </div>


    </div>
  )
}

export default Forgot