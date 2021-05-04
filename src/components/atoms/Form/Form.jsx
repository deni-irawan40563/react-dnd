//Import-React:
import React from 'react';
//Import-Style:
import './style.css';


//Main-Components:
export default function Form({type, placeholder, label, value}) {
  return (
    <div id='form-container'>
      <label>{label}</label>
      <input type={type} value={value} placeholder={placeholder} />
    </div>
  )
}

//Default-Props:
Form.defaultProps = {
  type : 'text',
  placeholder : null,
  label : null
}