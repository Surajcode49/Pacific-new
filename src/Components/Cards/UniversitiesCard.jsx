import React, { useEffect, useRef, useState } from "react";
import img1 from "../../Assets/harvard-University-1.webp";
import img2 from "../../Assets/Cambridge-University-1.webp";
import img3 from "../../Assets/Imperial-College-London-1.webp";
import img4 from "../../Assets/MIT-University-1.webp";
import img5 from "../../Assets/oxford-1.webp";
import img6 from "../../Assets/Princeton-University-1.webp";
import img7 from "../../Assets/Stanford-University-1.webp";
import img8 from "../../Assets/CIT-University-1.webp";
import img9 from "../../Assets/Columbia-University.webp";
import img10 from "../../Assets/Cornell-University.webp";
import img11 from "../../Assets/University-of-Chicago.webp";

const App = () => {
  const familyRef = useRef(null);
  const saleRef = useRef(null);

  useEffect(() => {
    const familyAnimation = () => {
      if (familyRef.current) {
        familyRef.current.style.transition = "transform 1s ease-in-out";
        familyRef.current.style.transform = "translateY(calc(-50% + 50vh))";

        setTimeout(() => {
          familyRef.current.style.transform = "translateY(0%)";
        }, 1000);
      }
    };

    const saleAnimation = () => {
      if (saleRef.current) {
        saleRef.current.style.transition = "transform 2s ease-in-out";
        saleRef.current.style.transform = "translateY(calc(-50% + 50vh))";

        setTimeout(() => {
          saleRef.current.style.transform = "translateY(0%)";
        }, 2000);
      }
    };

    const animateImages = () => {
      familyAnimation();
      saleAnimation();
    };

    const animationInterval = setInterval(animateImages, 4300);

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <body className="light-theme">
      <div className="banner d-flex align-items-center">
        <div className="banner-left">
          <h1>
            Search your <br /> Dream <br /> University
          </h1>
          <div className="inner-desc">
            <p>
              we are here to make your journey to a new home, simple and
              memorable...
            </p>
            <form>
              <div className="form-group d-flex flex-wrap search">
                <input
                  type="text"
                  className="form-control searchbar"
                  id="exampleInputtext1"
                  placeholder="Enter the country/City"
                />
                <button type="submit" className="black-btn">
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="social-icons d-flex align-items-center">
            <ul className="d-flex">
              <li>
                <a href="#" target="_blank">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="banner-right d-flex">
          <div className="family" ref={familyRef}>
            <img
              src={img1}
              
              alt="family-img-1"
              className="img-fluid"
            />
            <img
              src= {img2}
              alt="family-img-2"
              className="img-fluid"
            />
            <img
              src={img3}
              alt="family-img-2"
              className="img-fluid"
            />
            <img
              src={img4}
              alt="family-img-2"
              className="img-fluid"
            />
            <img
              src={img5}
              alt="family-img-2"
              className="img-fluid"
            />
            <img
              src={img6}
              alt="family-img-2"
              className="img-fluid"
            />
          </div>

          <div className="sale" ref={saleRef}>
            <img
              src={img7}
              alt="sale-img-1"
              className="img-fluid"
            />
            <img
              src={img8}
              alt="sale-img-2"
              className="img-fluid"
            />
            <img
              src={img9}
              alt="sale-img-2"
              className="img-fluid"
            />
            <img
              src={img10}
              alt="sale-img-2"
              className="img-fluid"
            />
            <img
              src={img11}
              alt="sale-img-2"
              className="img-fluid"
            />
            <img
              src={img2}
              alt="sale-img-2"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </body>
  );
};

export default App;
