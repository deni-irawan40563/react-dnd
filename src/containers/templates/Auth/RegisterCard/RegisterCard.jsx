//Import React Dependency
import React from 'react'

//Import Style
import '../style.css'

//Import Components
import AuthForm from '../../../../components/molecules/AuthForm/AuthForm';

export default function RegisterCard() {
  return (
    <div id="auth-card">
      <AuthForm title="Create New Account" account={false}/>
    </div>
  )
}
