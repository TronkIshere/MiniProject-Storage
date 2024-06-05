import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faCar, faHeadset, faHome, faMicrochip, faMusic, faNewspaper, faTelevision, faVideo, faVolleyball } from '@fortawesome/free-solid-svg-icons'
import duck from '../../assets/duck.jpg'


const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link">
          <FontAwesomeIcon icon={faHome} className='side-link-icon'/>
          <p>Home</p>
        </div>

        <div className="side-link">
          <FontAwesomeIcon icon={faHeadset} className='side-link-icon'/>
          <p>Gaming</p>
        </div>

        <div className="side-link">
          <FontAwesomeIcon icon={faCar} className='side-link-icon'/>
          <p>Automobiles</p>
        </div>

        <div className="side-link">
          <FontAwesomeIcon icon={faVolleyball} className='side-link-icon'/>
          <p>Sports</p>
        </div>

        <div className="side-link">
          <FontAwesomeIcon icon={faTelevision} className='side-link-icon'/>
          <p>Entertainment</p>
        </div>

        <div className="side-link">
          <FontAwesomeIcon icon={faMicrochip} className='side-link-icon'/>
          <p>Technology</p>
        </div>

        <div className="side-link">
          <FontAwesomeIcon icon={faMusic} className='side-link-icon'/>
          <p>Music</p>
        </div>

        <div className="side-link">
          <FontAwesomeIcon icon={faBlog} className='side-link-icon'/>
          <p>Blogs</p>
        </div>

        <div className="side-link">
          <FontAwesomeIcon icon={faNewspaper} className='side-link-icon'/>
          <p>News</p>
        </div>
        <hr/>
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={duck}></img> <p>Vịt</p>
        </div>

        <div className="side-link">
          <img src={duck}></img> <p>Vẫn là vịt</p>
        </div>

        <div className="side-link">
          <img src={duck}></img> <p>Vịt côn đồ</p>
        </div>

        <div className="side-link">
          <img src={duck}></img> <p>Vịt 2</p>
        </div>

        <div className="side-link">
          <img src={duck}></img> <p>Vịt to</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar