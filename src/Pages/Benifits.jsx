import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import ScrollToTop from "react-scroll-to-top";
// import beniImg from '../Assets/benifit.webp';
import Sidebar from '../Layouts/Sidebar';
import WhatsappBot from "../Layouts/Whatsappbot";


const Benifits = () => {
    return (
        <div className="benifits-main">
            <div className="beifits-main-title">
                The Top Six Benefits of Studying Abroad for Indian Students
                <Link to='/contact-us'><Button title="Ask Me"/></Link>
            </div>
            {/* <section className="benifits-parallax-1"> */}
                {/* <div className="parallax-inner">
          <h1 className="paralax-heading">Scroll down</h1>
        </div> */}
            {/* </section> */}
            <div className="benifit-img">
                {/* <img src={beniImg} alt="" /> */}
            </div>
            <ul className="benifits-main-list">
                <li className="benifits-list-main">
                    <div className="benifit-list-title">Global Exposure:</div>
                    <p>
                        Studying abroad exposes you to diverse cultures, languages, and
                        people, broadening your worldview and enhancing your cross-cultural
                        understanding.
                    </p>
                </li>
                <li className="benifits-list-main">
                    <div className="benifit-list-title">Quality Education:</div>
                    <p>
                        Access top-notch educational institutions with advanced teaching methodologies, cutting-edge research facilities, and renowned faculty members.
                    </p>
                </li>
                <li className="benifits-list-main">
                    <div className="benifit-list-title">Enhanced Career Prospects: </div>
                    <p>
                        A degree from an international institution can boost your employability, opening doors to global job opportunities and potentially higher earning potential.
                    </p>
                </li>
                <li className="benifits-list-main">
                    <div className="benifit-list-title">Personal Growth:  </div>
                    <p>
                        Navigate new challenges independently, fostering resilience, adaptability, and self-confidence while gaining a deeper understanding of yourself.
                    </p>
                </li>
                <li className="benifits-list-main">
                    <div className="benifit-list-title">Networking:</div>
                    <p>
                        Build a global network of contacts, including fellow students, professors, and alumni, which can have long-lasting personal and professional benefits.
                    </p>
                </li>
                <li className="benifits-list-main">
                    <div className="benifit-list-title">Language Skills: </div>
                    <p>
                        If studying in a non-native language, you can improve language proficiency, a valuable skill in today's interconnected world and job market.
                    </p>
                </li>
            </ul>
            <Link to='/contact-us'><Button title="Ask Me"/></Link>

            <ScrollToTop color="#06a1ab" right="15px" />
            
            <Sidebar/> 
            <WhatsappBot />
        </div>
    );
};

export default Benifits;
