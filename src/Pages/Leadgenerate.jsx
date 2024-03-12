import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
import leadimg from '../Assets/leadgeneration.png';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Leadgenerate = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [studyDestination, setStudyDestination] = useState("");
    const [studyPlanDate, setStudyPlanDate] = useState("");
    const [fundSource, setFundSource] = useState("");
    const [studyLevel, setStudyLevel] = useState("");
    const [message, setMessage] = useState("");



    const handleSelectChange = (event, setterFunction) => {
        setterFunction(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // API FOR THE MAIL SENDING
        const serviceId = "service_jxcs1rs";
        const templateId = "template_cva25qx";
        const publicKey = "Lnk6Rg3UdS8PK-h3z";

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
                setMessage(""); // Clear message state
            })
            .catch((error) => {
                console.error("Error in mail sending ", error);
            });
    };
    return (
        <div className='lead-genartionpage-main'>
            <div className="lead-generate-part">
                <div className="lead-generate-left">
                    <div className='lead-title'>Study Abroad Scholarship Worth ₹7,00,000 </div>
                    <div className='lead-subtitle'>Win up to ₹ 3,00,000* to study in the UK, Canada & US.</div>
                    <div className="lead-generate-image">
                        <img src={leadimg} alt="" className='lead-image' />
                    </div>
                </div>
                <div className="leadform">
                    <div className="conatct-right">
                        <form onSubmit={handleSubmit} className="contact-form">
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
                                    <h6 htmlFor="destination">
                                        Your preffered Study Destination*
                                    </h6>
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
                                    <h6 htmlFor="fund">How would you fund your education*</h6>
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
                                    <h6 htmlFor="studylevel">Preferred Study level*</h6>
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
                                            Vocational
                                        </option>
                                        <option name="Doctorate" value="Doctorate">
                                            Doctorate
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="row10">
                                <button className="btn-form-submit">Help me study abroad</button>
                                {/* <Link to="" className='home'> <FaHome /> Go to Home </Link> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leadgenerate
