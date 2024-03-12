import React from "react";
import { Link } from "react-router-dom";
import img1 from "../Assets/Success1.webp";
import img2 from "../Assets/Success2.webp";
import img3 from "../Assets/Success3.webp";

const SucessSection = () => {
    return (
        <div>
            <section id="timeline">
                <div className="sucess-section-heading">Success Story</div>
                <section className="sucess-intro">
                    <div className="sucess-section-intro-content">
                        <div className="sucess-section-title"> Pacific-Overseas</div>
                        <p className="sucess-section-description" style={{textAlign:'justify'}}>
                            At Pacific Educational Consultant and Classes, our proudest
                            moments come from the success stories of our students. Over the
                            years, we have witnessed countless individuals transform their
                            dreams into reality through our guidance and support. These
                            success stories are a testament to the effectiveness of our
                            educational programs, personalized coaching, and comprehensive
                            assistance services. Join the ranks of our success stories and let
                            us be a part of your journey to academic and professional
                            achievement.
                        </p>
                        <Link to="https://www.instagram.com/ielts_peckota/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" href="#featured" className="sucess-section-btn">
                            Read More
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
            </section>
        </div>
    );
};

export default SucessSection;
