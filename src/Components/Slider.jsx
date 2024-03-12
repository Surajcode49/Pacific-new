import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import image1 from '../Assets/20240112_183107_0002.png'
import image2 from '../Assets/20240112_183107_0004.png'
import image3 from '../Assets/20240112_182418_0008.png'
import image4 from '../Assets/20240112_183107_0003.png'
import image5 from '../Assets/20240112_182418_0005.png'


const YourComponent = () => {
    const [count, setCount] = useState(0);

    const directions = {
        prev: 0,
        next: 1
    };

    const sliders = [image1, image2, image3, image4, image5];

    const onNavigationClick = (directionIndex) => {
        const controlledCount = countController(directionIndex);

        setCount(controlledCount.new);
    };

    const countController = (directionIndex) => {
        const result = { new: 0, old: count };
        const max = sliders.length;

        if (directionIndex === directions.next) {
            result.new = count === max - 1 ? 0 : count + 1;
        }

        if (directionIndex === directions.prev) {
            result.new = count === 0 ? max - 1 : count - 1;
        }
        return result;
    };

    return (
        <div className="slider-container">
            <div className="slider">
                <div className="slider-content">
                    {sliders.map((slide, index) => (
                        <figure key={index} className={index === count ? 'show' : ''}>
                            <img src={slide} />
                        </figure>
                    ))}
                </div>
                <div className="slider-navigation" style={{marginTop:'10rem'}}>
                    <button onClick={() => onNavigationClick(directions.prev)} className='pointer-btn'>
                        <FaArrowLeft />
                    </button>
                    <button onClick={() => onNavigationClick(directions.next)} className='pointer-btn'>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default YourComponent;