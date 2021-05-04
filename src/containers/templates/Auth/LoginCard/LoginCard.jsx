//Import React Dependency
import React from 'react';

//Import Style
import '../style.css';

//Import Components
import AuthForm from '../../../../components/molecules/AuthForm/AuthForm';

export default function LoginCard() {
  return (
    <div id="auth-card">
      <AuthForm title="Login" account={true}/>
    </div>
  )
}
