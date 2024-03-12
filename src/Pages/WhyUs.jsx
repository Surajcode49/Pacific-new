import React from "react";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserGraduate } from "react-icons/fa6";
import WhatsappBot from "../Layouts/Whatsappbot";


import whyimg from '../Assets/why us.webp'

import img1 from '../Assets/university.webp'
import img2 from '../Assets/profile.webp'
import img3 from '../Assets/expert.webp'
import img4 from '../Assets/500-visa.webp'
import img5 from '../Assets/waiver.webp'
import img6 from '../Assets/education-loan.webp'
import img7 from '../Assets/card.webp'
import img8 from '../Assets/scolorship.webp'
import img9 from '../Assets/career-counsaling.webp'

import Sidebar from '../Layouts/Sidebar';

const WhyUs = () => {
  return (
    <div className="whyus-main">
      <div className="whyus-parallax-1">
        <img src={whyimg} alt="" className="whyimg" />
      </div>

      <div className="process-main-part">
        <div className="process-main-title">Process</div>
        <VerticalTimeline lineColor="grey">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(0,209,250)", color: "#fff" }}
            icon={<FaUserGraduate />}
          >
            <div className="timeline-image">

              <img src={img1} className="timeline-image" />
            </div>

          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // date="2010 - 2011"
            contentStyle={{
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(31,141,152)" }}
            iconStyle={{ background: "rgb(17,106,104)", color: "#fff" }}
            icon={<FaUserGraduate />}
          >
            <div className="timeline-image">

              <img src={img2} className="timeline-image" />
            </div>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(0,209,250)", color: "#fff" }}
            icon={<FaUserGraduate />}
          >
            <div className="timeline-image">

              <img src={img3} className="timeline-image" />
            </div>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(17,106,104)", color: "#fff" }}
            icon={<FaUserGraduate />}
          >
            <div className="timeline-image">

              <img src={img4} className="timeline-image" />
            </div>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(0,209,250)", color: "#fff" }}
            icon={<FaUserGraduate />}
          >
            <div className="timeline-image">

              <img src={img5} className="timeline-image" />
            </div>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(17,106,104)", color: "#fff" }}
            icon={<FaUserGraduate />}
          >
            <div className="timeline-image">

              <img src={img6} className="timeline-image" />
            </div>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(0,209,250)", color: "#fff" }}
            icon={<FaUserGraduate />}
          >
            <div className="timeline-image">

              <img src={img7} className="timeline-image" />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(0,209,250)", color: "#fff" }}
            icon={<FaUserGraduate />}
          >
            <div className="timeline-image">

              <img src={img7} className="timeline-image" />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(0,209,250)", color: "#fff" }}
            icon={<FaUserGraduate />}
          >
            <div className="timeline-image">

              <img src={img8} className="timeline-image" />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(0,209,250)", color: "#fff" }}
            icon={<FaUserGraduate />}
          >
            <div className="timeline-image">

              <img src={img9} className="timeline-image" />
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>


        <div className="whyus-lower" style={{ paddingTop: '1rem', textAlign: 'justify', fontSize: '1rem', color: 'grey' }}>
          Choosing us means choosing a reliable partner committed to your academic
          success, personal growth, and seamless study abroad experience. Contact
          us today to embark on a transformative educational journey.
        </div>
        <Link to='/contact-us'><Button title="Ask Me" /></Link>
        <ScrollToTop color="#06a1ab" right="15px" />
        <Sidebar />
        <WhatsappBot />
      </div>
    </div>
  );
};

export default WhyUs;
