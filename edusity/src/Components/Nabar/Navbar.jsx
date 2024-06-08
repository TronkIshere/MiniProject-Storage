import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faSlash } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
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