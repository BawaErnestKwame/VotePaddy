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
import Overview from './Pages/Overview/Overview';
import Events from './Pages/Events/Events';
import Votes from './Pages/Votes/Votes';
import Nominees from './Pages/Nominees/Nominees';
import Tickets from './Pages/Tickets/Tickets';
import Settings from './Pages/Settings/Settings';
import Logout from './Pages/Logout/Logout';

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
        {/* <Route path='/overview' element={<Overview/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/votes' element={<Votes/>} />
        <Route path='/nominees' element={<Nominees />} />
        <Route path='/tickets' element={<Tickets />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/logout' element={<Logout />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
