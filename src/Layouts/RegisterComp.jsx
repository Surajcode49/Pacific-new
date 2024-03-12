import React from 'react'
import RegisterForm from '../Components/RegisterForm';


const RegisterComp = () => {
    return (
        <div className='reg-compo-main'>
            <div className="reg-comp-heading">Study Abroad with Pacific</div>
            <div className="reg-comp-subheading">Fill in your details below to get a personalised advice</div>
            <div className="reg-comp-details">
                <RegisterForm />
                
            </div>
        </div>
    )
}

export default RegisterComp
