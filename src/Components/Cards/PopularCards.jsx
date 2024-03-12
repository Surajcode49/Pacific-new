import React from 'react'
import img from '../../Assets/computer-min.png';

const PopularCards = ({title, sub1, sub2, sub3, img}) => {
  return (
    <div className='popular-cards-main'>
      <div className="popular-course-cards-part">
            <img src={img} alt="" width={40}/>
            <div className="popular-cards-content">
                <div className="popular-card-title">{title}</div>
                <div className="popular-lists">
                    <li>{sub1}</li>
                    <li>{sub2}</li>
                    <li>{sub3}</li>
                </div>
            </div>
      </div>
    </div>
  )
}

export default PopularCards
