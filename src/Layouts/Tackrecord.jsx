import React from "react";
import Counter from "../Components/Counter";

const Tackrecord = () => {
  return (
    <div className="track-record-main">
      <div className="track-part">
        <div className="trak-record-title">Our Track Record</div>
        <div className="track-records-list">
          <div className="track-degrees">
            <div className="counter-part">
              <Counter end={500} start={0} delay={10000} />
              <span>+</span>
            </div>
            <div className="degree-content">Overseas Degrees</div>
          </div>
          <div className="track-degrees">
            <div className="counter-part" style={{ color: "#0464ad" }}>
              <Counter end={2000} start={0} delay={200} />
              <span>+</span>
            </div>
            <div className="degree-content">Students Educated</div>
          </div>
          <div className="track-degrees">
            <div className="counter-part three">
              <Counter end={95} start={0} delay={200} />
              <span>%</span>
            </div>
            <div className="degree-content">Visa Success Rate Till Date</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tackrecord;

{
  /* <Counter end={500} start={0}/> */
}
