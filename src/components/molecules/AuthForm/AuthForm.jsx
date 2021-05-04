//Import-React:
import React from 'react';
import {Link} from 'react-router-dom';

//Import-Style:
import './style.css';

//Import-Components:
import EmailForm from '../../atoms/EmailForm/EmailForm';
import Form from '../../atoms/Form/Form';
import Button from '../../atoms/Button/Button';

export default function AuthForm({title, account}) {
  return (
      <div>
        <h1 id="auth-title">{title}</h1>
        <h4 id="new-account-title">{account ? `don't have an account yet ` : `already have an account `} ? <Link to={account ? '/register' : '/login'} id="new-account-link">create new account</Link></h4>
        <EmailForm />
        <Form placeholder="input your password" type="password" className="passwordForm" />
        <div id="button-group-auth">
          <div className="login-button">
            <Button title={account ? 'Login' : 'Register'} />
          </div>
        </div>
      </div>
  )
}
