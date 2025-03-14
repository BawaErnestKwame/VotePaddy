import React from 'react'
import './Home.css'
import firstimg from "../assets/image1.jpeg"
import image2 from "../assets/image2.jpeg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpeg"
import image5 from "../assets/image5.jpeg"
import image6 from "../assets/image6.jpeg"
import image7 from "../assets/image7.jpeg"
import image8 from "../assets/image8.jpeg"
import image10 from "../assets/image10.jpeg"
import image11 from "../assets/image11.jpeg"
import image12 from "../assets/image12.jpeg"
import image13 from "../assets/image13.png"
import image14 from "../assets/image14.jpeg"
import image15 from "../assets/image15.jpeg"
import image16 from "../assets/image16.jpeg"
import { NavLink, Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Home = () => {
  return (
    <>
    
    <div className="header">
      <div className="header-text"
        // initial={{ opacity: 0, y: 100 }}
        // animate={{ opacity: 1, y: 0 }} 
        // transition={{ duration: 1.5 }}
        // whileInView={{ opacity: 1, y: 0 }} 
        // viewport={{ once: false, amount: 0.3 }}
      
      >
        <h1><span>Vote</span> for Your Favorites and Book Tickets to Exclusive <span>Events!</span></h1>
        <p>Support your favorite candidates and enjoy live performances by purchasing your event tickets here.</p>
        <div className="header-buttons">
         <Link to='./SignUp'> <button className='vote-now'>Vote Now</button></Link>
          <button className="buy-ticket">
            Buy Tickets
          </button>
        </div>
      </div>


    </div>

    <div className="featured-eventcontainer"
     
    >
      
        <h1>Featured Events</h1>
        <div className="small-text-btn">
          <p>Explore our upcoming and live events</p>
      <Link to='./Event'>    <button className='viewall-btn'>View all</button></Link>
      </div>

      <div className="featured-cards">
        <div className="card1">
          <img src={firstimg} alt="" />
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
          <img src={image3} alt="" />
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
          <img src={image4} alt="" />
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
          <img src={image5} alt="" />
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
          <img src={image6} alt="" />
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
          <img src={firstimg} alt="" />
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
          <img src={image7} alt="" />
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
          <img src={image8} alt="" />
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
          <img src={image16} alt="" />
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
          <img src={image10} alt="" />
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
          <img src={image11} alt="" />
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
          <img src={image12} alt="" />
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
          <img src={image13} alt="" />
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
          <img src={image14} alt="" />
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
          <img src={image3} alt="" />
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

    <div className="howit-works-page">
      <h1>How It Works</h1>
      <div className="cards">
        <div className="ticket-Purchasing"
       
      //  initial={{ opacity: 0, x: -300 }} 
      //  whileInView={{ opacity: 1, x: 0 }} 
      //  transition={{ duration: 1.8}}
      //  viewport={{ once: true, amount: 0.5 }} 
        >
          <h3>Ticket Purchasing Instructions</h3>
          <ul>
            <li><span>1</span> Browse Events</li>
            <li><span>2</span>Select Your Tickets</li>
            <li><span>3</span>Complete Payment</li>
            <li><span>4</span>Receive Your Ticket</li>
          </ul>
     <NavLink to='./Ticket'>    <button className='purchasing-btn'>Buy Tickets</button></NavLink>

        </div>

        <div className="voting-instructions"
            // initial={{ opacity: 0, x: 300 }} 
            // whileInView={{ opacity: 1, x: 0 }} 
            // transition={{ duration: 1.8}}
            // viewport={{ once: true, amount: 0.5 }} 
        >
          <h3>Voting Instructions</h3>

          <ul>
            <li><span>1</span>Browse Voting Categories</li>
            <li><span>2</span>Select Your Candidate or Event</li>
            <li><span>3</span>Submit Your Vote</li>
            <li><span>4</span>Complete payment to confirm vote</li>
          </ul>

        <Link to='./SignUp'>  <button className='vote-now'>Vote Now</button></Link>

        </div>
      </div>
    </div>
    </>
  )
}

export default Home