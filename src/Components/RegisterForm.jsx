import React, { useState } from "react";
import { Link } from "react-router-dom";
import registerImg from "../Assets/IM.webp";
import emailjs from "@emailjs/browser";

const RegisterComp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [studyDestination, setStudyDestination] = useState("");
  const [studyPlanDate, setStudyPlanDate] = useState("");
  const [fundSource, setFundSource] = useState("");
  const [studyLevel, setStudyLevel] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [contactMe, setContactMe] = useState(false);
  const [receiveUpdates, setReceiveUpdates] = useState(false);
  const [message, setMessage] = useState(""); // Added message state

  // Move these functions outside of the component
  const handleSelectChange = (event, setterFunction) => {
    setterFunction(event.target.value);
  };

  const handleCheckboxChange = (event, setterFunction) => {
    setterFunction(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // API FOR THE MAIL SENDING
    const serviceId = "service_y4sdte2";
    const templateId = "template_x2572ng";
    const publicKey = "Mu_xzpZnMTefD6q2q";

    // api params
    const TemplateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      to_name: "Nownow",
      message: message,
      mobileNumber: mobileNumber,
      studyDestination: studyDestination,
      studyPlanDate: studyPlanDate,
      fundSource: fundSource,
      studyLevel: studyLevel,
      // agreeTerms: agreeTerms,
      // contactMe: contactMe,
      // receiveUpdates: receiveUpdates,
    };

    // send e-mail
    emailjs
      .send(serviceId, templateId, TemplateParams, publicKey)
      .then((Response) => {
        console.log("E-mail sent bro ", Response);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMobileNumber("");
        setStudyDestination("");
        setStudyPlanDate("");
        setFundSource("");
        setStudyLevel("");
        // setAgreeTerms(false);
        // setContactMe(false);
        // setReceiveUpdates(false);
        setMessage(""); // Clear message state
      })
      .catch((error) => {
        console.error("Error in mail sending ", error);
      });
  };

  return (
    <div className="register-comp-main">
      <div className="register-comp-left">
        <img src={registerImg} alt="" className="reg-img" />
      </div>
      <div className="register-comp-right">
        <form onSubmit={handleSubmit} className="register-form">
          <div className="row1">
            <input
              type="text"
              placeholder="First Name*"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="row2">
            <input
              type="email"
              placeholder="Email Address*"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="row3">
            <input
              type="number"
              placeholder="Enter your Mobile Number*"
              className="form-control"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>

          <div className="row4">
            <div className="destination">
              <label htmlFor="destination">
                <h4>Your preffered Study Destination*</h4>
              </label>
              <select
                id="destination"
                name="destination"
                value={studyDestination}
                onChange={(e) => handleSelectChange(e, setStudyDestination)}
                className="form-control2"
                required
              >
                <option value="" disabled hidden>
                  Please Select
                </option>
                <option name="canada" value="canada">
                  Canada
                </option>
                <option name="Australia" value="Australia">
                  Australia
                </option>
                <option name="USA" value="USA">
                  USA
                </option>
                <option name="UK" value="UK">
                  UK
                </option>
                <option name="New Zeland" value="New Zeland">
                  New Zeland
                </option>
                <option name="Singapore" value="Singapore">
                  Singapore
                </option>
                <option name="Germany" value="Germany">
                  Germany
                </option>
              </select>
            </div>
            {/* <div className="plantostudy">
                            <label htmlFor="plantostudy">When do you plan to study*</label>
                            <input
                                type="date"
                                className="form-control2"
                                value={studyPlanDate}
                                onChange={(e) => setStudyPlanDate(e.target.value)}
                                required
                            />
                        </div> */}
          </div>
          <div className="row5">
            <div className="fund">
              <label htmlFor="fund">
                <h4>How would you fund your education*</h4>
              </label>
              <select
                id="fund"
                name="fund"
                value={fundSource}
                onChange={(e) => handleSelectChange(e, setFundSource)}
                className="form-control2"
                required
              >
                <option value="" disabled hidden>
                  Please Select
                </option>
                <option name="self-funded" value="self-funded">
                  Self-Funded
                </option>
                <option name="parents" value="parents">
                  Parents
                </option>
                <option name="scholarship" value="scholarship">
                  Seeking Scholarship
                </option>
                <option name="Loan" value="Loan">
                  Bank Loan
                </option>
              </select>
            </div>
            <div className="studylevel">
              <label htmlFor="studylevel">
                <h4>Preferred Study level*</h4>
              </label>
              <select
                id="studylevel"
                name="studylevel"
                value={studyLevel}
                onChange={(e) => handleSelectChange(e, setStudyLevel)}
                className="form-control2"
                required
              >
                <option value="" disabled hidden>
                  Please Select
                </option>
                <option name="Postgraduate" value="Postgraduate">
                  Postgraduate
                </option>
                <option name="Undergraduate" value="Undergraduate">
                  Undergraduate
                </option>
                <option name="Vocational" value="Vocational">
                  Diploma
                </option>
                <option name="Doctorate" value="Doctorate">
                  Doctorate
                </option>
              </select>
            </div>
          </div>
          {/* <div className="row6">
                       <h4>Pacific will not share your details with others without your
                        permission:</h4>  
                    </div> */}
          {/* <div className="row7">
                        <input
                            type="checkbox"
                            checked={agreeTerms}
                            onChange={(e) => handleCheckboxChange(e, setAgreeTerms)}
                        />
                        <span>
                            I agree to Pacific <Link to="#">Terms</Link> and 
                            <Link to="#">privacy policy</Link>
                        </span>
                    </div>
                    <div className="row8">
                        <input
                            type="checkbox"
                            checked={contactMe}
                            onChange={(e) => handleCheckboxChange(e, setContactMe)}
                        />
                        <span>
                            Please contact me by phone, email or SMS to assists with my
                            enquiry
                        </span>
                    </div>
                    <div className="row9">
                        <input
                            type="checkbox"
                            checked={receiveUpdates}
                            onChange={(e) => handleCheckboxChange(e, setReceiveUpdates)}
                        />
                        <span>I would like to recieve updates and offers from Pacific</span>
                    </div> */}
          <div className="row10">
            <button className="btn-form-submit">Help me study abroad</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterComp;
