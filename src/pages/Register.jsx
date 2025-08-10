
import { useState } from 'react'
import RegisterForm from './RegisterForm'

const Register = () => {
  const [role, setRole] = useState(null)

  return (
    <div>
      {!role ? (
        <>
          <h1>Sign Up As A:</h1>
          <button onClick={() => setRole('customer')}>Customer</button>
          <button onClick={() => setRole('restaurant')}>Restaurant</button>
        </>
      ) : (
        <RegisterForm role={role} />
      )}
    </div>
  )
}

export default Register
