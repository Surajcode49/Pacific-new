import React from 'react';


const cards = [
  { title: 'Study in USA', copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', button: 'View Trips' },
  { title: 'Study in Germany', copy: 'Plan your next beach trip with these fabulous destinations', button: 'View Trips' },
  { title: 'Study in Canada', copy: 'It\'s the desert you\'ve always dreamed of', button: 'Book Now' },
  { title: 'Study in NewZeland', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now' },
  { title: 'Study in Ireland', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now' },
  { title: 'Study in UK', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now' },
  { title: 'Study in Australia', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now' },
  { title: 'Study in Singapore', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now' },
];

const FlagSection = () => {
  return (
    <div className="flagSection-main">
      <div className="page-content-flag">
        {cards.map((card, index) => (
          <div key={index} className="card-flag" style={{ order: index + 1 }}>
            <div className="content-flag">
              <h2 className="title-flag">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlagSection;