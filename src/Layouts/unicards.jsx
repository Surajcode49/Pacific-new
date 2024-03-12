import React from "react";
// import img1 from "../Assets/Study-in-Australia-01.png";
import img1 from "../Assets//Study-in-Australia-01.webp";
import img2 from "../Assets/Study-in-Canada-01.webp";
import img3 from "../Assets/Study-in-uk.webp";
import img4 from "../Assets/Study-in-uSA.webp";
import img5 from "../Assets/Study-in-ireland-01.webp";
import img6 from "../Assets/japan.webp";
import ausflag from "../Assets/Aus..png";
import canadaFlag from "../Assets/Canada.webp";
import UKFlag from "../Assets/uk.webp";
import USAFlag from "../Assets/USA.webp";
import ireFlag from "../Assets/ireland.webp";
import zelanFlag from "../Assets/japanflag.jpg";
import { Link } from "react-router-dom";

const ThreeDCards = () => {
  return (
    <div className="wrapper">
      <div className="uni-title"></div>
      <div className="cols">
        <div
          className="col"
          
        >
          <Link to="/Study-Australia">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img1})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    <img src={ausflag} alt="" className="uni-flag-img" />
                  </div>
                  <p className="inner-content-parts" style={{textAlign:'center', fontSize:'1rem'}}>Study in Australia</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Card 2 */}

        <div
          className="col"
          
        >
          <Link to="/Study-canada">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img2})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    <img src={canadaFlag} alt="" className="uni-flag-img" />
                  </div>
                  <p className="inner-content-parts" style={{textAlign:'center', fontSize:'1rem'}}>Study in Canada</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Card 3 */}
        <div
          className="col"
          
        >
          <Link to="/Study-UK">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img3})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    <img src={UKFlag} alt="" className="uni-flag-img" />
                  </div>
                  <p className="inner-content-parts" style={{textAlign:'center', fontSize:'1rem'}}>Study in UK</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Card 4 */}
        <div
          className="col"
          
        >
          <Link to="/Study-USA">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img4})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    <img src={USAFlag} alt="" className="uni-flag-img" />
                  </div>
                  <p className="inner-content-parts" style={{textAlign:'center', fontSize:'1rem'}}>Study in USA</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* Card 5 */}
        <div
          className="col"
          
        >
          {" "}
          <Link to="/Study-Ireland">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img5})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    <img src={ireFlag} alt="" className="uni-flag-img" />
                  </div>
                  <p className="inner-content-parts" style={{textAlign:'center', fontSize:'1rem'}}>Study in Ireland</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Card 6 */}
        <div
          className="col"
          
        >
          {" "}
          <Link to="/Study-Ireland">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img6})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    <img src={zelanFlag} alt="" className="uni-flag-img" />
                  </div>
                  <p className="inner-content-parts" style={{textAlign:'center', fontSize:'1rem'}}>Study in Japan</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThreeDCards;
