import React from "react";
import serviceImg1 from "../Assets/simcard.webp";
import serviceImg2 from "../Assets/travelling insurance.webp";
import serviceImg3 from "../Assets/visa1.webp";
import serviceImg4 from "../Assets/ticket-bookings1.webp";
import ExamTable from "../Components/ExamTable";
import coch from "../Assets/coaching1.webp";
import career1 from "../Assets/career1.webp";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import exam1 from "../Assets/IELTS.png";
import exam2 from "../Assets/PTE.png";
import exam3 from "../Assets/TOEFL.png";
import exam4 from "../Assets/duolingo.webp";
import exam5 from "../Assets/GRE.jpg";
import exam6 from "../Assets/GMAT.png";
import exam7 from "../Assets/SAT-new.png";
import ScrollToTop from "react-scroll-to-top";
import Sidebar from '../Layouts/Sidebar';
import WhatsappBot from "../Layouts/Whatsappbot";


const Servicesoffer = () => {

  return (
    <div className="servicesoffer-main">
      <div className="servicesoffer-title">
        Services We Offer: Your Journey, Simplified
        <Link to="/contact-us">
          <Button title="Ask Me" />
        </Link>
      </div>
      <section className="guide-parallax-1">
        {/* <div className="parallax-inner">
          <h1 className="paralax-heading">Scroll down</h1>
        </div> */}
      </section>

      <div className="servicePart">
        <div className="service-content-part">
          {/* <div
            className="service-main-list-title"
            style={{ fontWeight: "bold" }}
          >
            Coaching
          </div> */}
          <div className="services-main-list-sublists">
            <div
              className="services-main-list-sublists-title"
              style={{ fontWeight: "bold" }}
            >
              a. Coaching:
            </div>
            <ul style={{ paddingLeft: "2rem" }}>
              <li>
                <div
                  className="service-main-list-title"
                  style={{ fontWeight: "bold" }}
                >
                  Spoken English IELTS, PTE ,TOEFL iBT, Duolingo, SAT
                </div>
              </li>
            </ul>
            <p style={{ padding: "0.5rem 2rem", textAlign: 'justify' }}>
              We offer specialized coaching in Spoken English, aiming to enhance
              communication skills for a variety of purposes, including
              business, education, and social interactions. Our program is
              designed to improve fluency, pronunciation, and confidence in
              English speaking.
              {/* <p style={{ fontWeight: 'bold' }}>IELTS, PTE ,TOEFL iBT, Duolingo, SAT</p> */}
            </p>
            <ul className="services-main-list-sublists-body">
              <li>
                <span
                  className="services-main-list-sublists-body-title"
                  style={{ fontWeight: "bold" }}
                >
                  b. Career Counseling:
                </span>
                <p style={{ padding: "0.5rem 2rem", textAlign: 'justify' }}>
                  Our expert career counseling services are tailored for
                  students planning to study abroad. We provide personalized
                  guidance on choosing the right course and university that
                  aligns with the student's academic interests and career
                  aspirations.
                </p>
              </li>
              <li className="servicesoffer-main-list-body">
                <div className="servicePart">
                  <div className="serviceImage">
                    <img src={serviceImg3} alt="" className="serviceImagepic" />
                  </div>
                  <div className="service-content-part">
                    <div className="service-main-list-title">c. Visa Assistance </div>
                    <p>
                      Navigating the complexities of visa applications is our
                      expertise. Let us handle the paperwork, appointments, and
                      requirements, ensuring a smooth and stress-free visa application
                      process for you.
                    </p>
                    <div className="services-main-list-sublists">
                      <div className="services-main-list-sublists-title">
                        Visa Assistance Services:
                      </div>
                      <ul className="services-main-list-sublists-body">
                        <li>
                          <span className="services-main-list-sublists-body-title">
                            Expert Guidance:
                          </span>
                          Our experienced team navigates the intricate visa
                          application process on your behalf.
                        </li>
                        <li>
                          <span className="services-main-list-sublists-body-title">
                            Efficiency:
                          </span>
                          Save time and energy by letting us handle paperwork,
                          appointments, and follow-ups.
                        </li>
                        <li>
                          <span className="services-main-list-sublists-body-title">
                            Success Assurance:
                          </span>
                          Benefit from our high approval rates and expertise in visa
                          applications.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span
                  className="services-main-list-sublists-body-title"
                  style={{ fontWeight: "bold" }}
                >
                  d. Loan Assistance:
                </span>
                <p style={{ padding: "0.5rem 2rem", textAlign: 'justify' }}>
                  The expense of studying abroad might be a major concern for
                  many prospective students. Pacific Educational Consultant
                  solves this issue by providing education loans for a wide
                  range of financial profiles. We guarantee that you will
                  receive the financial assistance you require on schedule and
                  at the best possible interest rate.
                </p>
              </li>
              <li>
                <span
                  className="services-main-list-sublists-body-title"
                  style={{ fontWeight: "bold" }}
                >
                  c. Scholarship Assistance:
                </span>
                <p style={{ padding: "0.5rem 2rem", textAlign: 'justify' }}>
                  Understanding the financial aspect of studying abroad is
                  crucial. We provide detailed assistance in identifying and
                  applying for scholarships that can help mitigate the costs of
                  overseas education.
                </p>
              </li>
              
              {/* <li>
                <span className="services-main-list-sublists-body-title">
                  Tailored Plans:
                </span>
                Choose from a range of insurance plans to suit your travel needs
                and preferences.
              </li> */}
            </ul>
          </div>
        </div>
        <div className="serviceImage">
          <img src={coch} alt="" className="Coch" />
          <img src={career1} alt="" className="Coch" />

          {/* <img src={serviceImg2} alt="" className="Coch"></img> */}

          {/* <img src={serviceImg2} alt="" className="Coch" /> */}
        </div>
      </div>

      <ul className="servicesoffer-main-list" style={{ listStyle: "none" }}>
        <li className="servicesoffer-main-list-body">
          <div className="servicePart">
            <div className="serviceImage">
              <img src={serviceImg1} alt="" className="serviceImagepic" />
            </div>
            <div className="service-content-part">
              <div className="service-main-list-title">SIM Card </div>
              <p>
                Stay connected wherever you go with our hassle-free SIM card
                solutions. Enjoy seamless communication, fast data, and
                convenience at your fingertips, making your travel experience
                truly global.
              </p>
              <div className="services-main-list-sublists">
                <div className="services-main-list-sublists-title">
                  SIM Card Services:
                </div>
                <ul className="services-main-list-sublists-body">
                  <li>
                    <span className="services-main-list-sublists-body-title">
                      Global Connectivity:
                    </span>
                    Stay connected with our international SIM cards
                  </li>
                  <li>
                    <span className="services-main-list-sublists-body-title">
                      Convenience:
                    </span>
                    Pre-activated SIM cards ensure instant connectivity upon
                    arrival at your destination.
                  </li>
                  <li>
                    <span className="services-main-list-sublists-body-title">
                      Data Freedom:
                    </span>
                    Enjoy high-speed data for browsing, streaming, and sharing
                    your travel moments.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li className="servicesoffer-main-list-body">
          <div className="servicePart">
            <div className="service-content-part">
              <div className="service-main-list-title">Travel Insurance </div>
              <p>
                Travel with peace of mind. Our comprehensive travel insurance
                coverage ensures you're protected against unexpected events
                during your journey. Focus on creating memories, knowing you're
                covered.
              </p>
              <div className="services-main-list-sublists">
                <div className="services-main-list-sublists-title">
                  Travel Insurance Services:
                </div>
                <ul className="services-main-list-sublists-body">
                  <li>
                    <span className="services-main-list-sublists-body-title">
                      Comprehensive Coverage:
                    </span>
                    Our travel insurance safeguards you against trip
                    cancellations, medical emergencies, and more.
                  </li>
                  <li>
                    <span className="services-main-list-sublists-body-title">
                      Peace of Mind:
                    </span>
                    Travel with confidence, knowing that unexpected situations
                    are covered.
                  </li>
                  <li>
                    <span className="services-main-list-sublists-body-title">
                      Tailored Plans:
                    </span>
                    Choose from a range of insurance plans to suit your travel
                    needs and preferences.
                  </li>
                </ul>
              </div>
            </div>
            <div className="serviceImage">
              <img src={serviceImg2} alt="" className="serviceImagepic" />
            </div>
          </div>
        </li>


        <li className="servicesoffer-main-list-body">
          <div className="servicePart">
            <div className="service-content-part">
              <div className="service-main-list-title">Air Tickets</div>
              <p>
                Fly effortlessly to your desired destinations. Our dedicated
                team finds you the best airfare options, making your travel
                dreams a reality without breaking the bank.
              </p>
              <p>
                Embark on your journeys with confidence, knowing that Pacific
                Education Consultant is your trusted partner in providing
                essential travel services.
              </p>
              <div className="services-main-list-sublists">
                <div className="services-main-list-sublists-title">
                  Air Tickets Services:
                </div>
                <ul className="services-main-list-sublists-body">
                  <li>
                    <span className="services-main-list-sublists-body-title">
                      Best Deals:
                    </span>
                    Access competitive airfare options for various destinations,
                    saving you money.
                  </li>
                  <li>
                    <span className="services-main-list-sublists-body-title">
                      Personalized Service:
                    </span>
                    Our team tailors flight options to fit your travel schedule
                    and preferences.
                  </li>
                  <li>
                    <span className="services-main-list-sublists-body-title">
                      Effortless Booking:
                    </span>
                    From comparing fares to finalizing bookings, we make flying
                    easy and convenient.
                  </li>
                </ul>
              </div>
            </div>
            <div className="serviceImage">
              <img src={serviceImg4} alt="" className="serviceImagepic" />
            </div>
          </div>
        </li>
      </ul>


      <Link to="/contact-us">
        <Button title="Ask Me" />
      </Link>

      <ScrollToTop color="#06a1ab" right="15px" />
      <Sidebar/> 
      <WhatsappBot />
    </div>
  );
};

export default Servicesoffer;
