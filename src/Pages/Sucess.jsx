import React from 'react';
import ScrollToTop from "react-scroll-to-top";

const Success = () => {
  return (
    <div>
      <div className="header">
        <div className="inner-header flex">
          <svg
            version="1.1"
            className="logo"
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 500 500"
            xmlSpace="preserve"
          >
            <path fill="#FFFFFF" stroke="#000000" strokeWidth="10" strokeMiterlimit="10" d="M57,283" />
            <g>
              <path fill="#fff" d="#YourPathHere" />
            </g>
          </svg>
          <h1>Our Success Story</h1>
        </div>
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>

      <div className="content flex">
        <p>By.Goodkatz | Free to use</p>
      </div>

      <section id="timeline">
        <h1>A Flexbox Timeline</h1>
        <p className="leader">All cards must be the same height and width for space calculations on large screens.</p>
        <div className="demo-card-wrapper">
          <div className="demo-card demo-card--step1">
            <div className="head">
              <div className="number-box">
                <span>01</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Technology
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur,
                laudantium odio dolorum laboriosam.
              </p>
              <img
                src="https://b2059438.smushcdn.com/2059438/wp-content/uploads/2018/08/Fotolia_88471055_Subscription_Monthly_M.jpg?lossy=1&strip=1&webp=1"
                alt="Graphic"
              />
            </div>
          </div>

          <div className="demo-card demo-card--step2">
            <div className="head">
              <div className="number-box">
                <span>02</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Confidence
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur,
                laudantium odio dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>

          <div className="demo-card demo-card--step3">
            <div className="head">
              <div className="number-box">
                <span>03</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Adaptation
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur,
                laudantium odio dolorum laboriosam.
              </p>
              <img src="https://www.homestaynetwork.org/wp-content/uploads/2016/06/female-student-small.jpg" alt="Graphic" />
            </div>
          </div>

          <div className="demo-card demo-card--step4">
            <div className="head">
              <div className="number-box">
                <span>04</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Consistency
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur,
                laudantium odio dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>

          <div className="demo-card demo-card--step5">
            <div className="head">
              <div className="number-box">
                <span>05</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Conversion
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur,
                laudantium odio dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop color="#06a1ab" right="15px" />
    </div>
  );
};

export default Success;