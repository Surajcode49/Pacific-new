import React, { useEffect, useRef } from 'react';
// import bgImg from '../Assets/travel.jpg';
import bgImg from '../Assets/travel-concept-with-landmarks_1.webp';
import logogif from '../Assets/logonew.gif';
import img1 from '../Assets/images (6).webp'
import img2 from '../Assets/images (4).webp'
import img5 from '../Assets/travel-concept-with-landmarks_1.webp'
import img6 from '../Assets/CC.webp'
import man from "../Assets/page_01-transformed.png";

 
const ParallaxMountains = () => {



  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      document.getElementById('mountain_left').style.left = `-${value / 0.7}px`;
      document.getElementById('clouds_2').style.left = `-${value * 2}px`;
      document.getElementById('mountain_right').style.left = `${value / 0.7}px`;
      document.getElementById('clouds_1').style.left = `${value * 2}px`;
      document.getElementById('text').style.top = `-${value}px`;
      document.getElementById('man').style.height = `${window.innerHeight - value}px`;
      
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='mounatin-body'>
      <section className="top">
        <img src={bgImg} id="bg" alt="Background" />
        <img src={logogif} id="text" alt="text"/>

        

        <img src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_1.png" id="clouds_1" alt="Clouds 1" />
        <img src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_2.png" id="clouds_2" alt="Clouds 2" />
        <img src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_left.png" id="mountain_left" alt="Mountain Left" />
        <img src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_right.png" id="mountain_right" alt="Mountain Right" /> 
       

        <img src={man}  id='man' alt="Man" />


        {/* <img src={img3} id="man" alt="Man" /> */}
        {/* <img src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_1.png" id="clouds_1" alt="Clouds 1"/> */}
        {/* <img src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_2.png" id="clouds_2" alt="Clouds 2" /> */}
        {/* <img src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_left.png" id="mountain_left" alt="Mountain Left" /> */}
        {/* <img src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_right.png" id="mountain_right" alt="Mountain Right" /> */}
      </section>
    </div>
  );
};

export default ParallaxMountains;
