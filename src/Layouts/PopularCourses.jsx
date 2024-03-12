import React from "react";
import PopularCards from "../Components/Cards/PopularCards";
import img1 from '../Assets/computer-min.png';
import img2 from '../Assets/business.png';
import img3 from '../Assets/engi-min.png';
import img4 from '../Assets/health-min.png';
import img5 from '../Assets/law.png';
import img6 from '../Assets/biological.png';

const PopularCourses = () => {
  return (
    <div className="PopularCourses-main">
      <div className="PopularCorses-part">
        <PopularCards
          title="Computer Science And IT"
          sub1="Computer Science"
          sub2="Information Technolgy"
          sub3="Software Technology"
          img={img1}
        />
        <PopularCards
          title="Business and Management"
          sub1="Master of Bussiness Administration"
          sub2="Sales and Marketing"
          sub3="Project Managment"
          img={img2}
        />
        <PopularCards
          title="Engineering"
          sub1="Mechanical Engineering"
          sub2="Civil Engineering"
          sub3="Electrical Engineering"
          img={img3}
        />
        <PopularCards
          title="Health and Science"
          sub1="Medicine and Surgery"
          sub2="Dental Studies"
          sub3="Physiotherapy"
          img={img4}
        />
        <PopularCards
          title="Law and Legal Studies"
          sub1="Legal Studies"
          sub2="International Law"
          sub3="Bussiness and Commercial"
          img={img5}
        />
        <PopularCards
          title="Biological and life Science"
          sub1="Biotechnolgy"
          sub2="Biology Sciences"
          sub3="Biomedical Engineering"
          img={img6}
        />
      </div>
    </div>
  );
};

export default PopularCourses;
