import React from 'react'
import './Program.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBook, faSchool } from '@fortawesome/free-solid-svg-icons'

const Program = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt=''/>
            <div className="caption">
              <FontAwesomeIcon icon={faGraduationCap} className='caption-icon fa-4x'/>
              <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt=''/>
            <div className="caption">
              <FontAwesomeIcon icon={faBook} className='caption-icon fa-4x'/>
              <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt=''/>
            <div className="caption">
              <FontAwesomeIcon icon={faSchool} className='caption-icon fa-4x'/>
              <p>Graduation Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Program