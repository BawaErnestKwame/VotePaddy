import React from 'react';
import './App.css';
import Navbar from './Navebar/Navbar'; // Ensure correct folder name
import Home from './Home/Home';
import About from './Pages/About/About';

import Contact from './Pages/Contact/Contact';
import Event from './Pages/Event/Event';
import Voting from './Pages/Voting/Voting';
import Ticket from './Pages/Ticket/Ticket';
import Footer from './Footer/Footer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/event' element={<Event />} />
        <Route path='/voting' element={<Voting />} />
        <Route path='/ticket' element={<Ticket />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
