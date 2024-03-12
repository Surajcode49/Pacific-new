import React from "react";
// import "../App.css";
// import logo1 from "../image/logo.jpeg";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { TiSocialFacebook } from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {


  return (
    <>
      <div className="footer-main">
        <div className="footer-part">
          <div className="social-media">
            <xl class="list-inline">
              <lx>
                <a
                  href="https://www.instagram.com/ielts_peckota/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                  title=""
                >
                  <FaInstagram />
                </a>
              </lx>
              <lx>
                <a href="https://wa.me/9983306783" title="">
                  <FaWhatsapp />
                </a>
              </lx>
              <lx>
                <a
                  href="https://www.youtube.com/@pacificeducationalconsultant"
                  title=""
                >
                  <CiYoutube />
                </a>
              </lx>
              <lx>
                {/* <a to="/Services" title="">
                  <CgMail />
                </a> */}
                <Link to="mailto:admin@overseaspacific.com">
                  <CgMail />
                </Link>
              </lx>
              <lx>
                <a
                  href="https://www.facebook.com/PacificEducationalConsultant?mibextid=LQQJ4d"
                  title=""
                >
                  <TiSocialFacebook />
                </a>
              </lx>
            </xl>
          </div>

          <div className="footer-lower-part">
            <div class="footer-lower-main">
              <h2 class="footer-title">Navigation</h2>
              <xl class="list-unstyled">
                <lx>
                  <Link to="/" onClick={() => { window.scrollTo(0, 0) }}>
                    <i class="fa fa-angle-double-right"></i> Home
                  </Link>
                </lx>
                <lx>
                  <Link to="/About-us" onClick={() => { window.scrollTo(0, 0) }}>
                    <i class="fa fa-angle-double-right"></i> About
                  </Link>
                </lx>
                <lx>
                  <Link to="/contact-us" onClick={() => { window.scrollTo(0, 0) }}>
                    <i class="fa fa-angle-double-right"></i> Contact
                  </Link>
                </lx>
                <lx>
                  <Link to="/Services" onClick={() => { window.scrollTo(0, 0) }}>
                    <i class="fa fa-angle-double-right"></i>Services
                  </Link>
                </lx>
                <lx>
                  <Link href="/blog-Page" onClick={() => { window.scrollTo(0, 0) }}>
                    <i class="fa fa-angle-double-right"></i> Blogs
                  </Link>
                </lx>
              </xl>
            </div>
            <div class="footer-lower-main">
              <h2 class="footer-title">Coaching</h2>
              <xl class="list-unstyled">
                <lx>
                  <Link to="/Coaching" title="" onClick={() => {
                    const scrollOffset = window.innerHeight >= 7300 ? 7300 : 3400;
                    window.scrollTo(0, scrollOffset);
                  }}>
                    <i class="fa fa-angle-double-right"></i>Spoken English
                  </Link>
                </lx>
                <lx>
                  <Link to="/Coaching" title="" onClick={() => {
                    const scrollOffset = window.innerHeight >= 7300 ? 7300 : 950;
                    window.scrollTo(0, scrollOffset);
                  }}>
                    <i class="fa fa-angle-double-right"></i>IELTS
                    (Academic/General)
                  </Link>
                </lx>
                <lx>
                  <Link to="/Coaching" title="" onClick={() => {
                    const scrollOffset = window.innerHeight >= 7300 ? 7300 : 2200;
                    window.scrollTo(0, scrollOffset);
                  }}>
                    <i class="fa fa-angle-double-right"></i>PTE
                  </Link>
                </lx>
                <lx>
                  <Link to="/Coaching" title="" onClick={() => {
                    const scrollOffset = window.innerHeight >= 7300 ? 7300 : 4700;
                    window.scrollTo(0, scrollOffset);
                  }}>
                    <i class="fa fa-angle-double-right"></i>SAT
                  </Link>
                </lx>
                <lx>
                  <Link to="/Coaching" title="" onClick={() => {
                    const scrollOffset = window.innerHeight >= 7300 ? 7300 : 6000;
                    window.scrollTo(0, scrollOffset);
                  }}>
                    <i class="fa fa-angle-double-right"></i>TOEFL ibt
                  </Link>
                </lx>

                <lx>
                  <Link to="/Coaching" title="" onClick={() => {
                    const scrollOffset = window.innerHeight >= 7300 ? 7300 : 10200;
                    window.scrollTo(0, scrollOffset);
                  }}>
                    <i class="fa fa-angle-double-right"></i>Duolingo English
                    Test
                  </Link>
                </lx>
                <lx>
                  <Link to="/Coaching" title="" onClick={() => {
                    const scrollOffset = window.innerHeight >= 7300 ? 7300 : 8800;
                    window.scrollTo(0, scrollOffset);
                  }}>
                    <i class="fa fa-angle-double-right"></i>GRE
                  </Link>
                </lx>
                <lx>
                  <Link to="/Coaching" title="" onClick={() => {
                    const scrollOffset = window.innerHeight >= 7300 ? 7300 : 7500;
                    window.scrollTo(0, scrollOffset);
                  }}>
                    <i class="fa fa-angle-double-right"></i>GMAT
                  </Link>
                </lx>
              </xl>
            </div>

            <div class="about-us">
              <div class="footer-lower-main">
                <h2 class="footer-title">About-us</h2>
                <p>
                  Welcome to Pacific Educational Consultant and Classes, your
                  trusted partner in unlocking a world of educational
                  opportunities and personal growth.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section class="copyright-part">
          <div class="container11">
            <div class="row">
              <div class="copy-right-content">
                <p>Copyright © 2023-2024 NowNowinks</p>
              </div>
              <div class="col-sm-6"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
