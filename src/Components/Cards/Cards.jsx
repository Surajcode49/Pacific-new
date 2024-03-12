import React from 'react';


const Card = ({image}) => {
  return (
    <div className="card-main">
      <img
        className="card-image"
        src={image} 
        alt="Card Image"
      />
    </div>
  );
};

export default Card;
