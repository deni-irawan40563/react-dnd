//Import React Dependency
import React, { Component } from 'react'

//Import Style
import './style.css';

//Import Components
import LoginCard from '../../templates/Auth/LoginCard/LoginCard';

export default class LoginPage extends Component {
  render() {
    return (
      <div id="login">
        <LoginCard />
      </div>
    )
  }
}
