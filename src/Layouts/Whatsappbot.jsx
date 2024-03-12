import React from "react";
// import wp from "../Assets/wpjpg.jpg";
import wp from '../Assets/whatsapp.png';

function Whatsappbot() {
  return (
    <div>
      <>
        <div className="wp">
          <a href="https://wa.me/9983306783">
            <img src={wp} alt="whatapp-logo" style={{width:"50px"}} />
          </a>
        </div>
      </>
    </div>
  );
}

export default Whatsappbot;