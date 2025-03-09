import React from 'react'
import './Ticket.css'
import {Link } from 'react-router-dom'

const Ticket = () => {
  return (
    <div className='ticket-container'>
      <div className="ticket-container-text-btn">
        <h1>404</h1>
        <h2>Uh-oh!</h2>
        <p>We couldn't find that page</p>
       <Link to='/'> <button>Return Home</button></Link>
      </div>

    </div>
  )
}

export default Ticket