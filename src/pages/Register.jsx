import { useState } from 'react'
import RegisterForm from './RegisterForm'

const Register = () => {
  const [role, setRole] = useState(null)

  return (
    <div>
      {!role ? (
        <>
          <h1>Hey there!</h1>
          <p>Log in or sign up for a more personalized ordering experience </p>
          <button onClick={() => setRole('restaurant')}>
            Continue as a restaurant
          </button>
          <button onClick={() => setRole('customer')}>
            Continue as a customer
          </button>
        </>
      ) : (
        <RegisterForm role={role} />
      )}
    </div>
  )
}

export default Register
