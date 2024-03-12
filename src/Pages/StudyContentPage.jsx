import React, { useState } from "react";
import Studycontentcard from "../Components/Cards/Studycontentcard";
import imgdest from "../Assets/travel.jpg";
import img1 from "../Assets/Study-in-Canada-01.webp";
import img2 from "../Assets/singapore.webp";
import img3 from "../Assets/Study-in-uSA.webp";
import img4 from "../Assets/Study-in-ireland-01.webp";
import img5 from "../Assets/Study-in-Australia-01.webp";
import img6 from "../Assets/germany.webp";
import img7 from "../Assets/Study-in-uk.webp";
import img8 from "../Assets/new-zealand.webp";
import img9 from "../Assets/France-01.webp";
import img10 from "../Assets/sweden.webp";
import img11 from "../Assets/netherland.webp";
import img12 from "../Assets/denmark.webp";
import img13 from "../Assets/switherland.webp";
import img14 from "../Assets/spain.webp";
import img15 from "../Assets/italy.webp";
import img16 from "../Assets/lintuana.webp";
import img17 from "../Assets/poland.webp";
import img18 from "../Assets/japan.webp";
import img19 from "../Assets/vietnam.webp";
import { Link } from "react-router-dom";
import StudyFlagcontent from "../Components/Cards/StudyFlagcontent";
import Button from "../Components/Button";
import Sidebar from '../Layouts/Sidebar';
import ScrollToTop from "react-scroll-to-top";
import WhatsappBot from "../Layouts/Whatsappbot";


const StudyContentPage = () => {
  
  return (
    <div className="study-content-page-main">
      <div className="study-content-page-image">
        <img src={imgdest} alt="" className="study-content-page-image-body" />
      </div>

      <div className="page-heading-main">Countries We Deal In</div>
      <div className="study-main-content-card-page">


        <div
          className="col"
        >
          <Link to="/Study-USA">
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
                    {/* <img src={UKFlag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in USA</p>
                </div>
              </div>
            </div>
          </Link>
        </div>


        <div
          className="col"
          
        >
          <Link to="/Study-UK">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img7})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    {/* <img src={canadaFlag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in Uk</p>
                </div>
              </div>
            </div>
          </Link>
        </div>


        <div
          className="col"
          
        >
          {" "}
          <Link to="/Study-Germany">
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
                    {/* <img src={zelanFlag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in  Germany</p>
                </div>
              </div>
            </div>
          </Link>
        </div>



        <div
          className="col"
          
        >
          <Link to="/Study-canada">
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
                    {/* <img src={ausflag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in Canada</p>
                </div>
              </div>
            </div>
          </Link>
        </div>


        <div
          className="col"
          
        >
          {" "}
          <Link to="/Study-Australia">
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
                    {/* <img src={ireFlag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in Australia</p>
                </div>
              </div>
            </div>
          </Link>
        </div>


        <div
          className="col"
          
        >
          <Link to="/Study-Netherlands">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img11})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    {/* <img src={canadaFlag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in Netherland</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div
          className="col"
          
        >
          <Link to="/Study-canada">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img8})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    {/* <img src={canadaFlag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in New Zealand</p>
                </div>
              </div>
            </div>
          </Link>
        </div>


        <div
          className="col"
          
        >
          <Link to="/Study-Switzerland">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img13})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    {/* <img src={canadaFlag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in Switzerland</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div
          className="col"
          
        >
          <Link to="/Study-Sweden">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img10})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    {/* <img src={canadaFlag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in Sweden</p>
                </div>
              </div>
            </div>
          </Link>
        </div>


        <div
          className="col"
          
        >
          <Link to="/Study-France">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img9})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    {/* <img src={canadaFlag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in France</p>
                </div>
              </div>
            </div>
          </Link>
        </div>


        <div
          className="col"
          
        >
          <Link to="/Study-Denmark">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img12})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    {/* <img src={canadaFlag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in Denmark</p>
                </div>
              </div>
            </div>
          </Link>
        </div>


        <div
          className="col"
          
        >
          <Link to="/Study-Poland">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img17})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    {/* <img src={canadaFlag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in Poland</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div
          className="col"
          
        >
          <Link to="/Study-vietnam">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img19})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    {/* <img src={canadaFlag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in Vietnam</p>
                </div>
              </div>
            </div>
          </Link>
        </div>


        <div
          className="col"
          
        >
          <Link to="/Study-canada">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img14})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    {/* <img src={canadaFlag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in Spain</p>
                </div>
              </div>
            </div>
          </Link>
        </div>


        <div
          className="col"
          
        >
          <Link to="/Study-lithuania">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img16})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    {/* <img src={canadaFlag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in Lithuania</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div
          className="col"
          
        >
          <Link to="/Study-Ireland">
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
                    {/* <img src={USAFlag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in Ireland</p>
                </div>
              </div>
            </div>
          </Link>
        </div>




        {/* Card 2 */}

        <div
          className="col"
          
        >
          <Link to="/Study-Singapore">
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
                    {/* <img src={canadaFlag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in Singapore</p>
                </div>
              </div>
            </div>
          </Link>
        </div>



        {/* Card 4 */}

        {/* Card 5 */}


        {/* Card 6 */}


        {/* Card 7 */}




        {/* Card 8 */}




        {/* Card 9 */}




        {/* Card 10 */}




        {/* Card 11 */}



        {/* Card 12 */}



        {/* Card 13 */}



        {/* Card 14 */}



        {/* Card 15 */}

        <div
          className="col"
          
        >
          <Link to="/Study-Italy">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img15})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    {/* <img src={canadaFlag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in Italy</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Card 16 */}


        {/* Card 17 */}



        {/* Card 18 */}

        <div
          className="col"
          
        >
          <Link to="/Study-Japan">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${img18})` }}
              >
                <div className="inner"></div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="flag-img">
                    {/* <img src={canadaFlag} alt="" className="uni-flag-img" /> */}
                  </div>
                  <p className="inner-content-parts">Study in Japan</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Card 19 */}




      </div>
      <Link to="/contact-us">
        <Button title="Ask Me" />
      </Link>
      <ScrollToTop color="#06a1ab" right="15px" />
      <Sidebar/> 
      <WhatsappBot />
    </div>
  );
};

export default StudyContentPage;
