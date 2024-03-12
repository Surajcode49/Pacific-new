import React from 'react'
import PopularLinkCards from '../Components/Cards/popularLinkCards'
import linkimg from '../Assets/link1.jpg'

const PopularLink = () => {
  return (
    <div className='popular-links-main'>
      <div className="popular-links-title">Popular Links</div>
      <div className="popular-link-lists">
        <PopularLinkCards imageUrl={linkimg}/>
        <PopularLinkCards imageUrl={linkimg}/>
        <PopularLinkCards imageUrl={linkimg}/>
        <PopularLinkCards imageUrl={linkimg}/>
      </div> 
    </div>
  )
}

export default PopularLink
