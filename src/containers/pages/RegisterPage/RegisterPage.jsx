//Import React Dependency
import React, { Component } from 'react'

//Import Style
import './style.css';

//Import Components
import RegisterCard from '../../templates/Auth/RegisterCard/RegisterCard'
export default class RegisterPage extends Component {
  render() {
    return (
      <div id="register">
        <RegisterCard />
      </div>
    )
  }
}
