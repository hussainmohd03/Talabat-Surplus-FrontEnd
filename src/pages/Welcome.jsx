import { useState } from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import '../../public/styleSheets/Welcome.css'

const Register = ({ role, choice, setRole, setChoice }) => {
  return (
    <div className="welcome-page">
      <div className="top-section">
        <img src="../../img/logo2.png" alt="Logo" />
      </div>

      <div className="bottom-section">
        <h1>Hey there!</h1>
        <p>Log in or sign up for a more personalized ordering experience</p>

        {!choice ? (
          <>
            <button
              className="auth-button"
              onClick={() => setChoice('register')}
            >
              Have an account? Sign up
            </button>

            <button className="auth-button" onClick={() => setChoice('login')}>
              Don't have an account? Sign in
            </button>
          </>
        ) : (
          <div className="role-selection">
            <Link to={`/auth/${choice}`}>
              <button
                className="role-button"
                onClick={() => setRole('restaurant')}
              >
                Continue as a restaurant
              </button>
            </Link>

            <Link to={`/auth/${choice}`}>
              <button
                className="role-button"
                onClick={() => setRole('customer')}
              >
                Continue as a customer
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Register
