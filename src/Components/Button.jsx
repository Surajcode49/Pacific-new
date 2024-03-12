import React from 'react'

const Button = ({title}) => {
    return (
        <div className='btn-common'  style={{marginTop:'2rem'}}>
            <div className="btn-row10">
                <button className="btn-form-submit-common">{title}</button>
            </div>
        </div>
    )
}

export default Button
