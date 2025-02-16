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
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Forgot from './Pages/Forgot/Forgot';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/event' element={<Event/>}/>
        <Route path='/voting' element={<Voting/>} />
        <Route path='/ticket' element={<Ticket/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/forgot' element={<Forgot/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
