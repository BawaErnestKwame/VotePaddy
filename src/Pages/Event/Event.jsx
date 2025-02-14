import React from 'react'
import './Event.css'
import { NavLink } from 'react-router-dom'


const Event = () => {
  return (
    <div className='event-container'>
      
        <h2>Discover events near you</h2>
        <div className="title-btns">

        <div className="btns-container">
          <div className="left-btns">
           <NavLink> <button className='votings-btn btn'>Voting</button></NavLink>
            <NavLink><button className="ticketing-btn btn">Ticketing</button></NavLink>

          </div>
          <div className="right-btns">
         <select name="" id="">
          <option value="current">Current Value</option>
          <option value="current">Past Event</option>
         </select>
            <button className="view-all-btn">View All</button>

          </div>
        </div>
      </div>

      <div className="event-cards">
        <div className="card1">
          <img src="" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Event