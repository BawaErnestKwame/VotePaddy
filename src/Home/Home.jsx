import React from 'react'
import './Home.css'
const Home = () => {
  return (
    
    <div className="header">
      <div className="header-text">
        <h1><span>Vote</span> for Your Favorites and Book Tickets to Exclusive <span>Events!</span></h1>
        <p>Support your favorite candidates and enjoy live performances by purchasing your event tickets here.</p>
        <div className="header-buttons">
          <button className='vote-now'>Vote Now</button>
          <button className="buy-ticket">
            Buy Tickets
          </button>
        </div>
      </div>


    </div>
  )
}

export default Home