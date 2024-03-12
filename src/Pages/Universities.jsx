import React, { useState } from 'react';
import ScrollToTop from "react-scroll-to-top";
// import './YourComponent.scss';

const University = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleThemeToggle = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
        document.body.classList.toggle("dark-theme");
    };

    return (
        <div className="universities-main">
            <div className={`banner ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
                <div className="banner d-flex align-items-center">
                    <div className="banner-left">
                        <label className="switch d-flex">
                            <input id="toggle-theme" type="checkbox" onChange={handleThemeToggle} />
                            <span className="light-txt">light</span>
                            <span className="dark-txt">dark</span>
                        </label>  
                        <h1>Search your <br /> Dream <br /> University</h1>
                       
                        
                    </div>
                    <div className="banner-right d-flex">
                        <div className="family myanimation">
                            <img src="https://yudiz.com/codepen/real-estate/property-img-one.png" alt="img" className="img-fluid" />
                            <img src="https://yudiz.com/codepen/real-estate/property-img-two.png" alt="img" className="img-fluid" />
                            <div className="banner-right-inner">
                                <h2>42k+</h2>
                                <span>satisfied <br /> family</span>
                                <img src="https://yudiz.com/codepen/real-estate/heart-icon.svg" alt="heart-icon" className="img-fluid" />
                            </div>
                            <img src="https://yudiz.com/codepen/real-estate/property-img-three.png" alt="img" className="img-fluid" />
                            <img src="https://yudiz.com/codepen/real-estate/property-img-four.png" alt="img" className="img-fluid" />
                        </div>
                        <div className="sale myanimationtwo">
                            <img src="https://yudiz.com/codepen/real-estate/property-img-five.png" alt="img" className="img-fluid" />
                            <img src="https://yudiz.com/codepen/real-estate/property-img-six.png" alt="img" className="img-fluid" />
                            <div className="banner-right-inner">
                                <h2>30k+</h2>
                                <span>Available <br /> Unit for Sale</span>
                                <img src="https://yudiz.com/codepen/real-estate/unit-icon.svg" alt="unit-icon" className="img-fluid" />
                            </div>
                            <img src="https://yudiz.com/codepen/real-estate/property-img-seven.png" alt="img" className="img-fluid" />
                            <img src="https://yudiz.com/codepen/real-estate/property-img-eight.png" alt="img" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTop color="#06a1ab" right="15px" />
        </div>
    );
};

export default University;