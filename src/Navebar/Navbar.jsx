import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/mlogo.jpg';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="top-nav">
         <Link to='./' > <div className="logo">
            <img src={logo} alt="Logo" />
          </div></Link>
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="event-btn">Events</button>
          <button className="signup-btn">SignUp</button>

          {/* Menu button for mobile */}
          <button className="menu-btn" onClick={() => setSideNavOpen(true)}>
            <MenuIcon />
          </button>
        </div>

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

      {/* Side Navbar for Small Screens */}
      <div className={`side_navbar ${sideNavOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setSideNavOpen(false)}>
          <CloseIcon />
        </button>
        <ul>
          <li><HomeIcon /><NavLink to="/overview" onClick={() => setSideNavOpen(false)}>Overview</NavLink></li>
          <li><EventAvailableIcon /><NavLink to="/events" onClick={() => setSideNavOpen(false)}>Events</NavLink></li>
          <li><HowToVoteIcon/><NavLink to="/votes" onClick={() => setSideNavOpen(false)}>Votes</NavLink></li>
          <li><SupervisorAccountIcon/><NavLink to="/nominees" onClick={() => setSideNavOpen(false)}>Nominees</NavLink></li>
          <li><BookOnlineIcon/><NavLink to="/ticket" onClick={() => setSideNavOpen(false)}>Tickets</NavLink></li>
          <li><SettingsIcon /><NavLink to="/settings" onClick={() => setSideNavOpen(false)}>Settings</NavLink></li>
          <li><LogoutIcon/><NavLink to="/logout" onClick={() => setSideNavOpen(false)}>Logout</NavLink></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
