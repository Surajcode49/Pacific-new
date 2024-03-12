import React from "react";
import img1 from '../Assets/goal-setting.webp'
import img2 from '../Assets/programandcoosing university.webp'
import img3 from '../Assets/financial-planning.webp'
import img4 from '../Assets/language-process.webp'
import img5 from '../Assets/application-procss.webp'
import img6 from '../Assets/visa-applications.webp'
import img7 from '../Assets/stay-connected.webp'
// import img8 from '../Assets/Visa-Expertise.webp'
// import img9 from '../Assets/Test-Preparation.webp'
// import img10 from '../Assets/24-7-supports.webp'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserGraduate } from "react-icons/fa6";

const Process = () => {
  return (
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


        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(17,106,104)", color: "#fff" }}
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

            <img src={img10} className="timeline-image" />
          </div>
        </VerticalTimelineElement> */}


        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "rgb(2,0,36)",
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,103,1) 0%, rgba(0,212,255,1) 100%)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(0,209,250)", color: "#fff" }}
          icon={<FaUserGraduate />}
        >
          <div className="timeline-image">

            <img src={img11} className="timeline-image" />
          </div>
        </VerticalTimelineElement> */}


        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FaUserGraduate />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Process;
