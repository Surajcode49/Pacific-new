import React from 'react'
import { GiBookCover } from "react-icons/gi";

const Studycontentcard = ({ onClick, title }) => {
  return (
    <div className='study-content-card-main' onClick={onClick}>
      <div className="study-content-card-icon">
        <GiBookCover />
      </div>
      <span className='study-card-content-part' style={{fontSize: "0.8rem"}}>{title}</span>
    </div>
  )
}

export default Studycontentcard
