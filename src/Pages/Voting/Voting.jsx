import React from 'react'
import image2 from '../../assets/image2.jpeg'
import './Voting.css'

const Voting = () => {
  return (
    <div className='voting-cont'>
      <div className="title">
        <h1>Music Awards Night 2024</h1>
        <p>6 categories Available on : *234*879#</p>
      </div>

      <div className="voting-cards">
        <div className="vote-card1">
          <img src={image2} alt="" />
          <div className="card-text">
            <h2>Most Popular Student</h2>
            <p>Contestants: 5</p>
          </div>
          <button className='view-content'>Viw Contestants</button>
        </div>
        <div className="vote-card1">
          <img src={image2} alt="" />
          <div className="card-text">
            <h2>Most Popular Student</h2>
            <p>Contestants: 5</p>
          </div>
          <button className='view-content'>Viw Contestants</button>
        </div>
        <div className="vote-card1">
          <img src={image2} alt="" />
          <div className="card-text">
            <h2>Most Popular Student</h2>
            <p>Contestants: 5</p>
          </div>
          <button className='view-content'>Viw Contestants</button>
        </div>
        <div className="vote-card1">
          <img src={image2} alt="" />
          <div className="card-text">
            <h2>Most Popular Student</h2>
            <p>Contestants: 5</p>
          </div>
          <button className='view-content'>Viw Contestants</button>
        </div>
        <div className="vote-card1">
          <img src={image2} alt="" />
          <div className="card-text">
            <h2>Most Popular Student</h2>
            <p>Contestants: 5</p>
          </div>
          <button className='view-content'>Viw Contestants</button>
        </div>
        <div className="vote-card1">
          <img src={image2} alt="" />
          <div className="card-text">
            <h2>Most Popular Student</h2>
            <p>Contestants: 5</p>
          </div>
          <button className='view-content'>Viw Contestants</button>
        </div>




      </div>

    </div>
  )
}

export default Voting