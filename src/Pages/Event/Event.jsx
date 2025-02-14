import React from 'react'
import './Event.css'
import { NavLink } from 'react-router-dom'
import image2 from '../../assets/image2.jpeg'


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
                 <img src={image2} alt="" />
                 <div className="text">
                   <h3>Ghana Party In park</h3>
                   <div className="date-code">
                     <p>*234*879#</p>
                     <p>1st January 1970</p>
                   </div>
                 </div>
       
                 <button className='card-btn'>Buy Ticket</button>
               </div>
         <div className="card1">
                 <img src={image2} alt="" />
                 <div className="text">
                   <h3>Ghana Party In park</h3>
                   <div className="date-code">
                     <p>*234*879#</p>
                     <p>1st January 1970</p>
                   </div>
                 </div>
       
                 <button className='card-btn'>Buy Ticket</button>
               </div>
         <div className="card1">
                 <img src={image2} alt="" />
                 <div className="text">
                   <h3>Ghana Party In park</h3>
                   <div className="date-code">
                     <p>*234*879#</p>
                     <p>1st January 1970</p>
                   </div>
                 </div>
       
                 <button className='card-btn'>Buy Ticket</button>
               </div>
         <div className="card1">
                 <img src={image2} alt="" />
                 <div className="text">
                   <h3>Ghana Party In park</h3>
                   <div className="date-code">
                     <p>*234*879#</p>
                     <p>1st January 1970</p>
                   </div>
                 </div>
       
                 <button className='card-btn'>Buy Ticket</button>
               </div>
      </div>

    </div>
  )
}

export default Event