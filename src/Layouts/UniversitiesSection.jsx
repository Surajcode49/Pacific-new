import React from 'react'
import UniversitiesCard from '../Components/Cards/UniversitiesCard';

const UniversitiesSection = () => {


  return (
    <div className='wrapper'>
    <div className="cols">
        {cardsData.map((card, index) => (
            <UniversitiesCard key={index}{...UniversitiesCard}/>
        ))}
    </div>      
    </div>
  )
}

export default UniversitiesSection;
