import React from 'react'
import './Navbar.css'
import logo from '../assets/logo-D8_S4TTo.jpg'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    
    <div className="navbar">
        <div className="top-nav">
            <div className="logo">
                <img src={logo} alt="" />

            </div>
          
                <input type="text"  placeholder='Search...'  className='search-input'/>

                <button className='event-btn'>Event</button>
                <button className='signup-btn'>SignUp</button>
           

        </div>

        <div className="bottom-list-nav">
            <ul>
         <NavLink>    <li> Home</li></NavLink>
            <NavLink> <li>About Us</li></NavLink>
             <NavLink><li>Contact Us</li></NavLink>
            <NavLink> <li>Events</li></NavLink>
             <NavLink><li>Voting Events </li></NavLink>
           <NavLink>  <li>Ticketing Events</li></NavLink>
            </ul>

        </div>

    </div>
     

  )
}

export default Navbar