import React from 'react'
import thumbnail from '../../assets/VuongTuLoren.jpg'
import './Feed.css'
import { Link } from 'react-router-dom'

const Feed = () => {
  return (
    <div className="feed">
      <Link to={`video/20/4521`} className='card'>
        <img src={thumbnail} alt=''/>
        <h2>Best channel to learn farming that help you to win dark souls 3</h2>
        <h3>Mr.DoingOut</h3>
        <p>20m views &bull; 1 day ago</p>
      </Link>

      <div className='card'>
        <img src={thumbnail} alt=''/>
        <h2>Best channel to learn farming that help you to win dark souls 3</h2>
        <h3>Mr.DoingOut</h3>
        <p>20m views &bull; 1 day ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail} alt=''/>
        <h2>Best channel to learn farming that help you to win dark souls 3</h2>
        <h3>Mr.DoingOut</h3>
        <p>20m views &bull; 1 day ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail} alt=''/>
        <h2>Best channel to learn farming that help you to win dark souls 3</h2>
        <h3>Mr.DoingOut</h3>
        <p>20m views &bull; 1 day ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail} alt=''/>
        <h2>Best channel to learn farming that help you to win dark souls 3</h2>
        <h3>Mr.DoingOut</h3>
        <p>20m views &bull; 1 day ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail} alt=''/>
        <h2>Best channel to learn farming that help you to win dark souls 3</h2>
        <h3>Mr.DoingOut</h3>
        <p>20m views &bull; 1 day ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail} alt=''/>
        <h2>Best channel to learn farming that help you to win dark souls 3</h2>
        <h3>Mr.DoingOut</h3>
        <p>20m views &bull; 1 day ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail} alt=''/>
        <h2>Best channel to learn farming that help you to win dark souls 3</h2>
        <h3>Mr.DoingOut</h3>
        <p>20m views &bull; 1 day ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail} alt=''/>
        <h2>Best channel to learn farming that help you to win dark souls 3</h2>
        <h3>Mr.DoingOut</h3>
        <p>20m views &bull; 1 day ago</p>
      </div>
    </div>
    
  )
}

export default Feed