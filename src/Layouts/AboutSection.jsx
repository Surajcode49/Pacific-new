import React from "react";
import Aboutcard from "../Components/Aboutcard";
import img from "../Assets/coachings.webp";
import img1 from "../Assets/career.webp";
import img2 from "../Assets/visa.webp";
import img4 from "../Assets/loan.webp";
// import img5 from "../Assets/b-3-2.webp";
const AboutSection = () => {
  return (
    <div className="about-section-main">
      <div className="about-section-part">
        <div className="about-title">Our Services</div>
        <div className="about-cards-part">
          <div className="about-row1">
            <Aboutcard
              imageUrl={img}
              title="Comprehensive Language Training"
              descrp="Immerse yourself in our top-notch classes tailored for IELTS, PTE, and Spoken English. We empower you with linguistic skills that open doors to global communication."
              author="Immerse yourself in our top-notch classes tailored for IELTS, PTE, and Spoken English. We empower you with linguistic skills that open doors to global communication."
              date="Immerse yourself in our top-notch classes tailored for IELTS, PTE, and Spoken English. We empower you with linguistic skills that open doors to global communication."
            />
            <Aboutcard
              imageUrl={img1}
              title="Nurturing Dreams through Career Counseling"
              descrp="Our experienced counselors provide insightful guidance, helping you make informed decisions about your academic and professional path."
            />
          </div>

          <div className="about-row1">
            <Aboutcard
              imageUrl={img2}
              title="Seamless Visa Assistance"
              descrp="Navigating the visa process can be overwhelming. Let us be your compass, ensuring a smooth journey toward your educational dreams."
            />
            <Aboutcard
              imageUrl={img4}
              title="Study Abroad Expertise"
              descrp="Embark on an enriching global education experience. Our proven track record of success aids you in accessing the finest universities and business schools worldwide."
            />
          </div>
          {/* <div className="about-row2">
            <Aboutcard
              imageUrl={img5}
              title="Empowering Futures through Financial Aid"
              descrp="We believe investing in education is an investment in the future. Explore opportunities for loans and scholarships that pave the way to academic success."
            />
          </div>
      */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
