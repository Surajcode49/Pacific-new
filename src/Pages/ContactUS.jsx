import React, { useState } from 'react'
import conatctimg from '../Assets/conatct.jpg'
import emailjs from "@emailjs/browser";
import FlagSection from '../Layouts/FlagsSection';
import Sidebar from '../Layouts/Sidebar';
import WhatsappBot from "../Layouts/Whatsappbot";


const ContactUS = () => {
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
        const serviceId = "service_y4sdte2";
        const templateId = "template_x2572ng";
        const publicKey = "Mu_xzpZnMTefD6q2q";

        // api params
        const TemplateParams = {
            from_name: `${firstName} ${lastName}`,
            from_email: email,
            to_name: "Pacific-overseas",
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
        <div className='contactus-main'>
            <div className="contactus-title">Contact <span className='contact-title-second-part'>US</span></div>
            <div className="contactus-upper">
                <div className="contact-left">
                    <img src={conatctimg} alt="" className='contact-image' />
                </div>
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
                                <label htmlFor="destination">
                                    Your preffered Study Destination*
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
                        </div>
                        <div className="row5">
                            <div className="fund">
                                <label htmlFor="fund">How would you fund your education*</label>
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
                                <label htmlFor="studylevel">Preferred Study level*</label>
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
                        <div className="row10">
                            <button className="btn-form-submit">Help me study abroad</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div className="conatct-lower">
                <FlagSection/>
            </div> */}
            <Sidebar/> 
            <WhatsappBot />
        </div>
    )
}

export default ContactUS
