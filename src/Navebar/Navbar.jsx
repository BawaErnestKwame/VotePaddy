import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/mlogo.jpg';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="top-nav">
          <Link to='./'> 
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
          </Link>
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="event-btn">Events</button>
          <button className="signup-btn">SignUp</button>

          {/* Menu Button (Opens Sidebar) */}
          <button className="menu-btn" onClick={() => setSideNavOpen(true)}>
            <MenuIcon />
          </button>
        </div>

        {/* Side Navbar */}
        <div className={`side-navbar ${sideNavOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={() => setSideNavOpen(false)}>
            <CloseIcon />
          </button>
          <ul>
            <li><NavLink to="/" onClick={() => setSideNavOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setSideNavOpen(false)}>About Us</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setSideNavOpen(false)}>Contact Us</NavLink></li>
            <li><NavLink to="/event" onClick={() => setSideNavOpen(false)}>Events</NavLink></li>
            <li><NavLink to="/voting" onClick={() => setSideNavOpen(false)}>Voting Events</NavLink></li>
            <li><NavLink to="/ticket" onClick={() => setSideNavOpen(false)}>Ticketing Events</NavLink></li>
          </ul>
        </div>

        {/* Bottom Navbar (For larger screens) */}
        <div className="bottom-list-nav">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/event">Events</NavLink></li>
            <li><NavLink to="/voting">Voting Events</NavLink></li>
            <li><NavLink to="/ticket">Ticketing Events</NavLink></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
