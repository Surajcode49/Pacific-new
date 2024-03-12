import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import Join from '../Assets/join.png';
import { Link } from 'react-router-dom';

function Sidebar() {

  const phoneNumber = '+918554930021';
  return (
    <div>
      <div className="tt">
        <div className="socials">
          <a href="" className='links-list'>
            <Link to="/contact-us"><img src={Join} alt="" width={30} className='join-now' /></Link>
          </a>
          {/* <a href={`tel:${phoneNumber}`} className='links-list'> */}
          <Link to="mailto:admin@overseaspacific.com" style={{color:'black'}}>
            <IoMail  />
          </Link>
          <a href="https://www.facebook.com/PacificEducationalConsultant?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className='links-list'>
            <FaFacebook />
          </a>
          <a href="https://instagram.com/ielts_peckota?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" className='links-list'>
            <RiInstagramFill />
          </a>

        </div>
      </div>
    </div>
  );
}

export default Sidebar;