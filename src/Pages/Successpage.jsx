import React from "react";
// import Success from './Sucess';
// import Img from '../Assets/Australia.jpg'
import img1 from "../Assets/Success1.webp";
import img2 from "../Assets/Success2.webp";
import img3 from "../Assets/Success3.webp";
import im1 from "../Assets/01.webp"
import im2 from "../Assets/02.webp"
import im3 from "../Assets/03.webp"
import im4 from "../Assets/04.webp"
import im5 from "../Assets/05.webp"
import im6 from "../Assets/06.webp"
import im7 from "../Assets/07.webp"
import im8 from "../Assets/08.webp"
import im9 from "../Assets/09.webp"
import im10 from "../Assets/010.webp"
import im11 from "../Assets/011.webp"
import ScrollToTop from "react-scroll-to-top";
import Sidebar from '../Layouts/Sidebar';
import WhatsappBot from "../Layouts/Whatsappbot";



import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="sucess-main-part">
      <section className="sucess-intro">
        <div className="sucess-intro-content">
          <h1 className="sucess-title">HIGHLIGHTING OUR SUCCESS STORIES</h1>
          <p className="sucess-description">
            At Pacific Educational Consultant and Classes, our proudest moments come from
            the success stories of our students. Over the years, we have
            witnessed countless individuals transform their dreams into reality
            through our guidance and support. These success stories are a
            testament to the effectiveness of our educational programs,
            personalized coaching, and comprehensive assistance services. Join
            the ranks of our success stories and let us be a part of your
            journey to academic and professional achievement.
          </p>
          <Link to="/contact-us" className="sucess-btn">
            Join
          </Link>
        </div>

        <div className="sucess-card-container">
          <div
            style={{ "--r": -15, "--y": 40, "--x": 50 }}
            className="sucess-card"
          >
            <img src={img1} alt="" />
          </div>
          <div
            style={{ "--r": 5, "--y": -30, "--x": 30 }}
            className="sucess-card"
          >
            <img src={img2} alt="" />
          </div>
          <div
            style={{ "--r": 15, "--y": 50, "--x": 0 }}
            className="sucess-card"
          >
            <img src={img3} alt="" />
          </div>
        </div>
      </section>

      <section className="sucess-featured" id="featured">
        <div className="gradient-line"></div>
        <h1 className="sucess-featured-title">Success Stories</h1>

        <div className="grid-area">
          <div className="sucess-item art-one">
            <img src= {im1} alt="A Good Boy" />
          </div>
          <div className="sucess-item art-two">
            <img src= {im2} alt="City Life" />
          </div>
          <div className="sucess-item art-three">
            <img src= {im3} alt="An Ode to Mushrooms" />
          </div>
          <div className="sucess-item art-four">
            <img src= {im4} alt="A Woman in Complexity" />
          </div>
          <div className="sucess-item art-five">
            <img src= {im5} alt="Steampunk" />
          </div>
          <div className="sucess-item art-six">
            <img src= {im6} alt="Dragon in Silks" />
          </div>
          <div className="sucess-item art-seven">
            <img src={im6} alt="Cut and Paste Face" />
          </div>
          <div className="sucess-item art-eight">
            <img src={im7} alt="Dolphins in the Sea" />
          </div>
          <div className="sucess-item art-nine">
            <img src={im8} alt="The Raven's Song" />
          </div>
          <div className="sucess-item art-ten">
            <img src={im9} alt="Haunted House" />
          </div>
          <div className="sucess-item art-eleven">
            <img src= {im10} alt="The World of Butterflies" />
          </div>
          <div className="sucess-item art-twelve">
            <img src= {im11} alt="Lost in Thought" />
          </div>
        </div>

        <div className="sucess-lightbox">
          <div className="sucess-slide prev">
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <div className="img-container">
            <div className="img-header">
              <p>title</p>
            </div>
            <div className="img-body">
              <img src="sample.jpg" alt="" />
            </div>
          </div>
          <div className="sucess-slide next">
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
        
      </section>
      <ScrollToTop color="#06a1ab" right="15px" />
      <Sidebar/> 
      <WhatsappBot />
    </div>
  );
};

export default Success;
