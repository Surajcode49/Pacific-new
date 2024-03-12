import React from "react";
import { Link } from "react-router-dom";
import img1 from '../Assets/20240112_183107_0004.png';

const Appointment = () => {
  return (
    <div className="appointment-main">
    <div className="appint-i">
      <img src={img1} alt="" className="app-img"/>
    </div>
      <div className="appointment-part">
        <div className="appointment-right">
          <div className="appointment-btn-part">
            <Link to="/contact-us">
              <button className="appointment-btn">
                Request An Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
