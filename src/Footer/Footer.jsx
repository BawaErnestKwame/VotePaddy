import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '../assets/logo-D8_s4TTo.jpg'
const Footer = () => {
  return (
    <div className='main-footer'>

        <div className="logo-list-socials-display">


        <div className="logo">
            <img src={logo} alt="" />
            

        </div>

        <ul className='list-items'>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
        </ul>

        <div className="socials">
            <h1 className='icons'><FacebookIcon/></h1>
            <h1 className='icons'> <InstagramIcon/> </h1>
            <h1 className='icons'><TwitterIcon/></h1>
            <h1 className='icons'><GitHubIcon/></h1>
        </div>

        </div>

        <div className="copyrightreserve">
            <p>© Copyright 2024, All Rights Reserved by Votepaddy</p>
        </div>


    </div>
  )
}

export default Footer