import React, { useState } from "react";
import Dropdown from "../Components/Dropdown";
import { Link, NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react';
import logoimg from '../Assets/LogoNewPic.png';
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleMobileDropClick1 = () => {
    // setShowDropdown1(!showDropdown1);
    // setShowDropdown2(false);
    setShowMenu(false);
  };
  const handleMobileDropClick2 = () => {
    setShowDropdown1(!showDropdown1);
    setShowDropdown2(false);
    // setShowMenu(false);

  };

  return (
    <div className={`app-wrapper ${showMenu ? "menu-open" : ""}`}>
      <nav className={`navbar-main ${showMenu ? "fixed" : ""}`}>
        <div className="humberger" onClick={handleToggle}><Hamburger toggled={showMenu} toggle={setShowMenu} /></div>
        <div className="navbar-logo">
          <Link to="/"><img src={logoimg} alt="" className="logo" style={{ objectFit: "contain", width: "8rem", height: "5rem" }} /></Link>
        </div>



        <div className="destop-version">
          <ul className={`navbar-menu ${showMenu ? "toggle" : ""}`}>
            <Dropdown
              title="Study Abroad"
              subItems={[
                { label: "Home", link: "/" },
                { label: "BENEFITS OF STUDYING ABROAD", link: "/Benifits" },
                { label: "HOW TO CHOOSE A COURSE", link: "/Choose-Course" },
                { label: "GUIDE FOR PARENTS", link: "/Guide-For-Parent" },
                { label: "WHY ONLY PACIFIC ", link: "/Why-us" },
                { label: "SUCCESS STORIES ", link: "/Sucess" },
                { label: "OUR SERVICES ", link: "/Services" },
                { label: "COACHING ", link: "/Coaching" },
              ]}
            />
            <Dropdown
              title="Destination"
              subItems={[
                { label: "AUSTRALIA", link: "/Study-Australia" },
                { label: "USA", link: "/Study-USA" },
                { label: "UK", link: "/Study-UK" },
                { label: "CANADA", link: "/Study-canada" },
                // { label: "MAURITIUS ", link: "/Study-Mauritius" },
                // { label: "IRELAND", link: "/Study-Ireland" },
                { label: "GERMANY", link: "/Study-Germany" },
                { label: "ALL COUNTRIES", link: "/Destination" },
                // { label: "New Zeland", link: "/Destination" },
                // { label: "SINGAPORE", link: "/Study-Singapore" },
                // { label: "JAPAN", link: "/Study-Japan" },
                // { label: "SWITZERLAND", link: "/Study-Switzerland" },
                // { label: "NETHERLANDS", link: "/Study-Netherlands" },
                // { label: "ITALY", link: "/Study-Italy" },
              ]}
            />
            {/* <Link Link to="/Destination" style={{ color: "#4fa7b0", fontWeight: "500" }}>Destination</Link> */}
            <Link Link to="/About-us" style={{ color: "#4fa7b0", fontWeight: "500" }}>About Us</Link>
            {/* <Dropdown
          title="Test Prep"
          sub1="IELTS"
          sub2="TOEFL(ONLINE)"
          sub3="PTE"
          sub4="SPOKEN ENGLISH"
          sub5="SAT(ONLINE)"
          sub6="DUOLINGO(ONLINE)"
          linked="/sucess"
        /> */}
            <Link to="/blog-Page" style={{ color: "#4fa7b0", fontWeight: "500" }}>Blogs</Link>
            <Link to="/contact-us" style={{ color: "#4fa7b0", fontWeight: "500" }} >Contact US</Link>
          </ul>
        </div>




        <div className="mobile-version">
          <ul className={`navbar-menu ${showMenu ? "toggle" : ""}`}>


            <li className="mobile-drop">
              <div className="drops-item">
                <Link Link to="/" style={{ color: "#4fa7b0", fontWeight: "500" }} className="drop-title" onClick={handleMobileDropClick1}>Home</Link>
              </div>
            </li>

            <li className="mobile-drop" >
              <div className="drop-title" style={{ color: "#4fa7b0", fontWeight: "500" }} onClick={handleMobileDropClick2}>Study Abroad <IoMdArrowDropdown className="drop-icon" /></div>
              {showDropdown1 && (
                <div className="drops-item" >
                  <ul className="drop-list">
                    <Link to="/" className="drop-items-list" onClick={handleMobileDropClick1}>Home</Link>
                    <Link to="/Benifits" className="drop-items-list" onClick={handleMobileDropClick1}>BENEFITS OF STUDYING ABROAD  </Link>
                    <Link to="/Choose-Course" className="drop-items-list" onClick={handleMobileDropClick1}>HOW TO CHOOSE A COURSE</Link>
                    <Link to="/Guide-For-Parent" className="drop-items-list" onClick={handleMobileDropClick1}> GUIDE FOR PARENTS</Link>
                    <Link to="/Why-us" className="drop-items-list" onClick={handleMobileDropClick1}>WHY ONLY PACIFIC </Link>
                    <Link to="/Sucess" className="drop-items-list" onClick={handleMobileDropClick1}>SUCCESS STORIES</Link>
                    <Link to="/Services" className="drop-items-list" onClick={handleMobileDropClick1}>OUR SERVICES</Link>
                    <Link to="/Coaching" className="drop-items-list" onClick={handleMobileDropClick1}>COACHING </Link>
                  </ul>
                </div>
              )}
            </li>
            <li className="mobile-drop">
              <div className="drops-item">
                <Link Link to="/Destination" style={{ color: "#4fa7b0", fontWeight: "500" }} className="drop-title" onClick={handleMobileDropClick1}>Destination</Link>
              </div>
            </li>
            <li className="mobile-drop">
              <Link to='/About-us' className="drop-title" style={{ color: "#4fa7b0", fontWeight: "500" }} onClick={handleMobileDropClick1}>About US</Link>
            </li>
            <li className="mobile-drop">
              <Link to='/blog-Page' className="drop-title" style={{ color: "#4fa7b0", fontWeight: "500" }} onClick={handleMobileDropClick1}>Blogs</Link>
            </li>
            <li className="mobile-drop">
              <Link to='/contact-us' className="drop-title" style={{ color: "#4fa7b0", fontWeight: "500" }} onClick={handleMobileDropClick1}>Contact US</Link>
            </li>
            {/* <div className="nav-btn">
              <NavLink to="https://pacific-login.vercel.app"><span className="login-link">Login</span></NavLink>
              <div className="user-btn">
                <div className="user-info">
                </div>
              </div>
            </div> */}
          </ul>
        </div>



        <div className="nav-btn">
          <NavLink to="https://elearning.overseaspacific.com/"><span className="login-link">E Learning</span></NavLink>
          <div className="user-btn">
            <div className="user-info">
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;
