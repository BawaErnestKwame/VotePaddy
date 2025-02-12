import React from 'react'
import './Navbar.css'
import logo from '../assets/mlogo.jpg'
import { NavLink } from 'react-router-dom'




const Navbar = () => {
  return (
    <>
    
    <div className="navbar">
        <div className="top-nav">
            <div className="logo">
                <img src={logo} alt="" />

            </div>
          
                <input type="text"  placeholder='Search...'  className='search-input'/>

                <button className='event-btn'>Events</button>
                <button className='signup-btn'>SignUp</button>
           

        </div>

        <div className="bottom-list-nav">
           
            <ul>
   <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='./about' >About Us</NavLink></li>
   <li> <NavLink to='./contact' >Contact Us</NavLink> </li>
   <li> <NavLink to='./event' >Events</NavLink> </li>
   <li> <NavLink to='voting' >Voting Events</NavLink> </li>
   <li> <NavLink to='.ticket' >Ticketing Events</NavLink> </li>
</ul>

        </div>

    </div>


<div className="side_navbar">
  <ul>
    
    <li to='./overview' ><NavLink>Overview</NavLink></li>
    <li to='./events' ><NavLink>Events</NavLink></li>
    <li><NavLink to='./votes' >Votes</NavLink></li>
    <li><NavLink to='./nominees' >Nominees</NavLink></li>
    <li><NavLink to='./ticket' >Tickets</NavLink></li>
    <li><NavLink to='./settings' > Settings</NavLink></li>
    <li><NavLink to='./logout' >Logout</NavLink></li>

  </ul>

</div>
     
</>
  )
}

export default Navbar