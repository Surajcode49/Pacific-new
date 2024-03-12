import React, { useState, useEffect } from 'react';
import img1 from '../Assets/processimg1.webp'
import img2 from '../Assets/Vector.svg';


const ProcessComp = () => {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="process-component-main-body">
        <div className="process-heading">
            <div className="process-heading-part">Study abroad <span className='process-subheading-part'>with us</span></div>
        </div>
            <div className="process-component-main-part">
                <div className='process-comp'>
                    <div className="pro-part">
                        <div className="proLeftImg">
                            <div className="pro-offereings-leftImg-left">
                                <div className="offereing-pro-border"></div>
                                <div className="offering-left-Img-main">
                                    <img src={img1} alt="" className='process-main-left-img'/>
                                </div>
                            </div>
                            <div className="pro-offereings-leftImg-right">
                                <p className='pro-offereings-leftImg-tag'>Expertise and Experience</p>
                                <p className="pro-offereings-leftImg-desp">Benefit from our team of experienced education consultants who possess in-depth knowledge of various study destinations, universities, and programs.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='process-comp'>
                    <div className="pro-part">
                        <div className="proLeftImg">
                            <div className="pro-offereings-leftImg-left">
                                <div className="offereing-pro-border"></div>
                                <div className="offering-left-Img-main">
                                    <img src={img1} alt="" className='process-main-left-img'/>
                                </div>
                            </div>
                            <div className="pro-offereings-leftImg-right">
                                <p className='pro-offereings-leftImg-tag'>Personalized Guidance</p>
                                <p className="pro-offereings-leftImg-desp">Receive customized guidance tailored to your academic background, career goals, and preferences to ensure you make informed decisions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='process-comp'>
                    <div className="pro-part">
                        <div className="proLeftImg">
                            <div className="pro-offereings-leftImg-left">
                                <div className="offereing-pro-border"></div>
                                <div className="offering-left-Img-main">
                                    <img src={img1} alt="" className='process-main-left-img'/>
                                </div>
                            </div>
                            <div className="pro-offereings-leftImg-right">
                                <p className='pro-offereings-leftImg-tag'>Comprehensive Services</p>
                                <p className="pro-offereings-leftImg-desp">We offer end-to-end support, from helping you choose the right program and institution to assist with application submissions, visa processing, and pre-departure preparations.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='process-comp'>
                    <div className="pro-part">
                        <div className="proLeftImg">
                            <div className="pro-offereings-leftImg-left">
                                <div className="offereing-pro-border"></div>
                                <div className="offering-left-Img-main">
                                    <img src={img1} alt="" className='process-main-left-img'/>
                                </div>
                            </div>
                            <div className="pro-offereings-leftImg-right">
                                <p className='pro-offereings-leftImg-tag'>Vast Network</p>
                                <p className="pro-offereings-leftImg-desp">Leverage our extensive network of partner universities and institutions, ensuring you have access to a wide range of high-quality educational options.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='process-comp'>
                    <div className="pro-part">
                        <div className="proLeftImg">
                            <div className="pro-offereings-leftImg-left">
                                <div className="offereing-pro-border"></div>
                                <div className="offering-left-Img-main">
                                    <img src={img1} alt="" className='process-main-left-img'/>
                                </div>
                            </div>
                            <div className="pro-offereings-leftImg-right">
                                <p className='pro-offereings-leftImg-tag'>Scholarship and Funding Assistance</p>
                                <p className="pro-offereings-leftImg-desp">Maximize your financial opportunities with our assistance in identifying scholarships, grants, and financial aid to help make your study abroad dreams affordable.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='process-comp'>
                    <div className="pro-part">
                        <div className="proLeftImg">
                            <div className="pro-offereings-leftImg-left">
                                <div className="offereing-pro-border"></div>
                                <div className="offering-left-Img-main">
                                    <img src={img1} alt="" className='process-main-left-img'/>
                                </div>
                            </div>
                            <div className="pro-offereings-leftImg-right">
                                <p className='pro-offereings-leftImg-tag'>Visa Expertise</p>
                                <p className="pro-offereings-leftImg-desp">Navigate the often complex visa application process with ease, thanks to our experienced visa consultants who guide you every step of the way.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='process-comp'>
                    <div className="pro-part">
                        <div className="proLeftImg">
                            <div className="pro-offereings-leftImg-left">
                                <div className="offereing-pro-border"></div>
                                <div className="offering-left-Img-main">
                                    <img src={img1} alt="" className='process-main-left-img'/>
                                </div>
                            </div>
                            <div className="pro-offereings-leftImg-right">
                                <p className='pro-offereings-leftImg-tag'>Cultural Preparation</p>
                                <p className="pro-offereings-leftImg-desp">Prepare for a successful international experience with our cultural orientation sessions, helping you adapt to your new environment and thrive academically and personally.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='process-comp'>
                    <div className="pro-part">
                        <div className="proLeftImg">
                            <div className="pro-offereings-leftImg-left">
                                <div className="offereing-pro-border"></div>
                                <div className="offering-left-Img-main">
                                    <img src={img1} alt="" className='process-main-left-img'/>
                                </div>
                            </div>
                            <div className="pro-offereings-leftImg-right">
                                <p className='pro-offereings-leftImg-tag'>Test Preparation</p>
                                <p className="pro-offereings-leftImg-desp">Benefit from our test preparation resources and guidance to excel in language proficiency exams like IELTS, PTE, SAT and Spoken English.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='process-comp'>
                    <div className="pro-part">
                        <div className="proLeftImg">
                            <div className="pro-offereings-leftImg-left">
                                <div className="offereing-pro-border"></div>
                                <div className="offering-left-Img-main">
                                    <img src={img1} alt="" className='process-main-left-img'/>
                                </div>
                            </div>
                            <div className="pro-offereings-leftImg-right">
                                <p className='pro-offereings-leftImg-tag'>Resume Building</p>
                                <p className="pro-offereings-leftImg-desp">Receive support in building a compelling academic and extracurricular profile to enhance your chances of admission to competitive institutions.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='process-comp'>
                    <div className="pro-part">
                        <div className="proLeftImg">
                            <div className="pro-offereings-leftImg-left">
                                <div className="offereing-pro-border"></div>
                                <div className="offering-left-Img-main">
                                    <img src={img1} alt="" className='process-main-left-img'/>
                                </div>
                            </div>
                            <div className="pro-offereings-leftImg-right">
                                <p className='pro-offereings-leftImg-tag'>Career Counseling</p>
                                <p className="pro-offereings-leftImg-desp">Our career advisors can help you align your study choices with your long-term career aspirations, ensuring your educational investment pays off in the future.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='process-comp'>
                    <div className="pro-part">
                        <div className="proLeftImg">
                            <div className="pro-offereings-leftImg-left">
                                {/* <div className="offereing-pro-border"></div> */}
                                <div className="offering-left-Img-main">
                                    <img src={img1} alt="" className='process-main-left-img'/>
                                </div>
                            </div>
                            <div className="pro-offereings-leftImg-right">
                                <p className='pro-offereings-leftImg-tag'>24/7 Support</p>
                                <p className="pro-offereings-leftImg-desp">Access round-the-clock support, whether you have questions about your application, need assistance during emergencies, or simply seek advice.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offering-draw-line" style={{ transform: `translateY(${scrollY}px)` }}>
                    <div className="offering-draw-line-part">
                        <img src={img2} alt="" className='arrow' />
                    </div>
                    <svg width="5" id='mysvg' height="5000">
                        <line x1="0" y1="0" x2="0" y2="5000" fill="none" stroke="#0487F3" stroke-width="4.8484" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" id="triangle" style={{ strokeDasharray: "3383.06", strokeDashoffset: "3294.4" }}></line>
                        "Sorry , your browser"
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default ProcessComp


