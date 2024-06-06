import React from 'react'
import './PlayVideo.css'
import alimeGirl from '../../assets/animeGirl.mp4'
import duck from '../../assets/duck.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faShare, faSave, faUser } from '@fortawesome/free-solid-svg-icons'

const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={alimeGirl} controls autoPlay muted></video>
        <h3>Best channel to learn farming that help you to win dark souls 3</h3>
        <div className="play-video-info">
            <p>1525 Views &bull; 1 day ago</p>
            <div>
                <span><FontAwesomeIcon icon={faThumbsUp}/>125</span> 
                <span><FontAwesomeIcon icon={faThumbsDown}/>2</span> 
                <span><FontAwesomeIcon icon={faShare} />Share</span> 
                <span><FontAwesomeIcon icon={faSave}/>Save</span> 
            </div>
        </div>
        <hr/>
        <div className="publisher">
            <img src={duck} alt=''/>
            <div>
                <p>Vịt</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className='vid-description'>
            <p>Channle that makes learning easy</p>
            <p>Subscribe Vịt to watch more tutorials on web development</p>
            <hr />
            <h4>130 Comments</h4>

            <div className="comment">
                <img src={duck} alt=''/>
                <div>
                    <h3>Johnny sins <span>1 day ago</span></h3>
                    <p>
                        yeahhhhhhhhhhhhh, that damn nice man
                    </p>
                    <div className='comment-action'>
                        <FontAwesomeIcon icon={faThumbsUp}/>
                        <span>244</span>
                        <FontAwesomeIcon icon={faThumbsDown}/>
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={duck} alt=''/>
                <div>
                    <h3>Johnny sins <span>1 day ago</span></h3>
                    <p>nice</p>
                    <div className='comment-action'>
                        <FontAwesomeIcon icon={faThumbsUp}/>
                        <span>244</span>
                        <FontAwesomeIcon icon={faThumbsDown}/>
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={duck} alt=''/>
                <div>
                    <h3>Johnny sins <span>1 day ago</span></h3>
                    <p>
                        Random thing
                    </p>
                    <div className='comment-action'>
                        <FontAwesomeIcon icon={faThumbsUp}/>
                        <span>244</span>
                        <FontAwesomeIcon icon={faThumbsDown}/>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default PlayVideo