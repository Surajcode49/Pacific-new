import React from "react";
import abtimg from "../Assets/MI2.webp";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Sidebar from '../Layouts/Sidebar';
import Slider from '../Components/Slider';
import WhatsappBot from "../Layouts/Whatsappbot";


const AboutUs = () => {
  return (
    <div className="aboutus-main-page-part">
      <div className="main-abt-img">
        <div className="parallax-1">
          <img src={abtimg} alt="" className="abtimg" />
        </div>
      </div>
      <Link to="/contact-us">
        <Button title="Ask Me" />
      </Link>


      <div className="abt-lower-content">
        <h2 className="parallax-subhead">About US</h2>
        <div className="about-sub-content">
          Pacific Educational Consultant is your ultimate destination for all
          global study requirements. Renowned as India's foremost Overseas
          Education Consultancy, we specialize in educational opportunities
          worldwide
        </div>
        <p className="parallax-content">
          Welcome to Pacific Educational Consultant, India's premier Overseas
          Education Consultancy. We specialize in guiding students to the best
          educational opportunities globally, covering countries like the UK, USA,
          Canada, Australia, New Zealand, Singapore, Ireland, France, Germany,
          Switzerland, and more.
        </p>

        <h2 className="parallax-subhead">Our Expertise</h2>
        <ul className="about-expertise-main">
          <li className="about-expertise-list">	•	Personalized services at your doorstep.</li>
          <li className="about-expertise-list">	•	Vast network with leading institutions worldwide.</li>
          <li className="about-expertise-list">	•	Academic counseling, university selection, application guidance, admission support, and visa assistance.</li>
          <li className="about-expertise-list">	•	Test preparation for exams </li>
          <li className="about-expertise-list">	•	(IELTS, PTE, Spoken English, TOEFL, GRE, GMAT, SAT , Duolingo ).</li>
        </ul>





        <h2 className="parallax-subhead">Comprehensive Support</h2>
        <ul className="about-expertise-main">
          <li className="about-expertise-list">•	Bank loan assistance, travel arrangements, foreign exchange, medical and travel insurance.</li>
          <li className="about-expertise-list">•	Pre-departure guidance.</li>
        </ul>

        <h2 className="parallax-subhead">Our Team</h2>
        <ul className="about-expertise-main">
          <li className="about-expertise-list">•	Over 350 professionals across various domains.</li>
          <li className="about-expertise-list">	•	Collaborations with esteemed international institutions and organizations.</li>
        </ul>

        <h2 className="parallax-subhead">Founder's Vision</h2>
        <p className="parallax-content">Mr. Nitin Gautam's vision is rooted in empathy and understanding, providing reliable support based on personal experiences.</p>


        <h2 className="parallax-subhead">Our Values</h2>
        <ul className="about-expertise-main">
          <li className="about-expertise-list">•	Professionalism, integrity, and ethics.</li>
          <li className="about-expertise-list">•	Continuous dedication to exceptional services.</li>
        </ul>

        <p className="parallax-content">Join countless students who have trusted us to make overseas education accessible. We prioritize your best interests, ensuring personalized support with a strong emphasis on professionalism and integrity. Choose Pacific Educational Consultant, your gateway to global education excellence.</p>

        <div className="about-lists">
          <div className="about-list-heading-main">Leadership Team</div>
          <p>Our leadership comprises seasoned professionals with extensive expertise in international education, offering firsthand experience and a commitment to students' successful careers.</p>

          <div className="about-list-heading-main">Overseas Educational Advisors: </div>
          <p>Dynamic counselors with extensive experience in guiding students both domestically and internationally. Well trained advisors for guiding students in choosing the right course at an ideal institution.</p>

          <div className="about-list-heading-main">Training Faculty Members: </div>
          <p>Our faculty ensures top performance in entrance tests with small batch sizes, individual attention, and flexible scheduling.</p>

          <div className="about-list-heading-main">Administrative Team: </div>
          <p>Efficient administrative staff managing application records and conducting follow-ups on visa and application statuses.</p>


          <h2 className="parallax-subhead-1">Notable Features:</h2>
          <ul className="about-expertise-main-1">
            <li className="about-expertise-list">•	Liaisons with universities worldwide.</li>
            <li className="about-expertise-list">•	Personalized coaching for exams</li>
            <li className="about-expertise-list">•	Academic pathway planning and career testing.</li>
            <li className="about-expertise-list">•	Assistance with travel arrangements, accommodations, and foreign exchange.</li>
            <li className="about-expertise-list">•	Long-standing success and positive testimonials.</li>
          </ul>


          <div className="about-list-heading-main">Who Are We? </div>
          <p>Pacific Educational Consultant, a trailblazer in global education, brings overseas education within reach. We maintain an impeccable reputation, delivering superior-quality educational services with an extensive branch network and partnerships worldwide.</p>

          <div className="about-list-heading-main">Our Vision: </div>
          <p>To become the world's foremost Overseas Education Consultants in guiding students to unlock and realize their utmost potential.</p>

          <div className="about-list-heading-main">Our Mission:  </div>
          <p>Providing impartial, thorough, authentic, principled, and superior educational services. Bridging students with esteemed higher education institutions globally, prioritizing inclusivity and diversity.</p>


          <div className="about-list-heading-main">Our Goal: </div>
          <p>Enhancing students' lives, equipping them to thrive as global achievers and ensuring a conducive learning atmosphere.</p>
        </div>


      </div>
        <Slider />

        <Link to="/contact-us">
          <Button title="Ask Me" />
        </Link>

      <ScrollToTop color="#06a1ab" right="15px" />
      <Sidebar />
      <WhatsappBot />
    </div>
  );
};

export default AboutUs;
