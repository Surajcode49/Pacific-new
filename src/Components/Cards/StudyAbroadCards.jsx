import React from "react";
import Photo from "../../Assets/usa.png";

const StudyAbroadCards = ({image, title, content}) => {
  return (
    <div className="studycard-main">
      <div className="card-img">
        <img src={Photo} alt="" className="study-card-img" />
      </div>
      <div className="study-card-content">
        <div className="study-card-title">
          <span>Study In Canada</span>
        </div>
        <div className="study-card-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            maiores necessitatibus dolorem saepe accusantium ea, fugiat earum
            nisi vel a!
          </p>
        </div>
        <div className="card-btn">
            <button className="study-card-btn">Search Courses</button>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadCards;
