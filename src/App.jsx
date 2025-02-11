import React from 'react'
import './App.css'
import Navbar from './Navebar/Navbar'
import Home from './Home/Home';
import Footer from './Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>

      <Routes>
        <Route path='./' element={<Home/>}  />
        <Route path='./About Us' element={<AboutUs/>}  />
        <Route path='./Contact Us' element={<Contact/>}  />
        <Route path='./Events' element={<Events/>}  />
        <Route path='./Voting Events' element={<VotingEvent/>}  />
        <Route path='./Ticketing Events' element={<Ticketing/>}  />
      </Routes>
      <Footer/>
     

    </div>
  )
}

export default App