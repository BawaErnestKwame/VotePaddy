import React from 'react'
import './Navbar.css'
import logo from '../assets/logo-D8_S4TTo.jpg'



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
  <li>Home</li>
  <li>About Us</li>
  <li>Contact Us</li>
  <li>Events</li>
  <li>Voting Events</li>
  <li>Ticketing Events</li>
</ul>

        </div>

    </div>
     

  )
}

export default Navbar