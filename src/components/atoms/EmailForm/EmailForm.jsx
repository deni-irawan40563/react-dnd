//Import-React:
import React from 'react'
//Import-Style:
import './style.css'


//Main-Components:
export default function EmailForm({placeholder, errorMessage, label, value}) {
  return (
    <div className="email-form">
      <label>{label}</label>
      <input type="email" value={value} id="email" placeholder={placeholder} required/>
      <small className='error-message'>{errorMessage}</small>
    </div>
  )
}

//Default-Props:
EmailForm.defaultProps = {
  placeholder : 'Input Email',
  errorMessage : 'Email Not Valid',
  label : 'email'
}