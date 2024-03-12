import React from 'react'

const StudyFlagcontent = ({ onClick, image }) => {
  return (
    <div className='study-content-card-main'  onClick={onClick}>
      <div className="study-content-card-icon">
        <img src={image} alt=""  className='study-content-card-image'/>
      </div>
      {/* <span className='study-card-content-part'>{title}</span> */}
    </div>
  )
}

export default StudyFlagcontent