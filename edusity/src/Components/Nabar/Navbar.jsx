import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className='container'>
        <h2 className='logo'>
            <FontAwesomeIcon icon={faGraduationCap}/>
            Edusity
        </h2>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li>
                <button className='btn'>Contant us</button> 
            </li>
        </ul>
    </nav>
  )
}

export default Navbar