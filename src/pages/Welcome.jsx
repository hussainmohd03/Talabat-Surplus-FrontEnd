import { useState } from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import "../../public/styleSheets/Welcome.css"

const Register = ({ role, choice, setRole, setChoice }) => {
  return (
    <div className='welcome-container'>
      <img src="../../img/logo.png" alt="" />
      <h1>Hey there!</h1>
      <p>Log in or sign up for a more personalized ordering experience </p>
      {!choice ? (
        <>
          <button onClick={() => setChoice('register')}>
            {choice && console.log(choice)}
            Have an account? Sign up
          </button>

          <button onClick={() => setChoice('login')}>
            {choice && console.log(choice)}
            Don't have an account? Sign in
          </button>
        </>
      ) : (
        <div>
          <Link to={`/auth/${choice}`}>
            <button onClick={() => setRole('restaurant')}>
              Continue as a restaurant
            </button>
          </Link>

          <Link to={`/auth/${choice}`}>
            <button onClick={() => setRole('customer')}>
              Continue as a customer
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Register
