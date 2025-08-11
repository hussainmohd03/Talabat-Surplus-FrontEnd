import { useState } from 'react'
const RegisterForm = ({ role }) => {
  const initialState = {
    firstName: '',
    lastName: '',
    Email: '',
    Password: ''
  }

  const firstState = {
    resName: '',
    resPhone: '',
    resAddress: '',
    resEmail: '',
    CR: ''
  }

  const [customerValues, setCustomerValues] = useState(initialState)
  const [resValues, setResValues] = useState(firstState)

  const handleChange = (e) => {
    setCustomerValues({ ...customerValues, [e.target.name]: e.target.value })
    setResValues({ ...resValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    if (role === customerValues) {
      e.preventDefault()
      await RegisterUser(customerValues)
      setCustomerValues(initialState)
      // navigate('/LoginForm')
    } else {
      e.preventDefault()
      await RegisterUser(resValues)
      setResValues(firstState)
      // navigate('/LoginForm')
    }
  }
  return (
    <div className="Register-Container">
      <h1>Sign Up as A {role}</h1>

      {role === 'customer' ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            value={customerValues.firstName}
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={customerValues.lastName}
            required
          />
          <label htmlFor="eMail">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={customerValues.eMail}
            required
          />
          <label htmlFor="passWord">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={customerValues.passWord}
            required
          />
          <br />
          <p>
            By creating an account you agree to the Privacy Policy and to the
            Terms of Use{' '}
          </p>
          <button type="submit">Create Your Account</button>
        </form>
      ) : (
        <form>
          <label htmlFor="resName">Restaurant Name</label>
          <input
            type="text"
            name="resName"
            placeholder="Restaurant Name"
            onChange={handleChange}
            value={resValues.resName}
            required
          />
          <label htmlFor="resPhone">Restaurant Telephone</label>
          <input
            type="text"
            name="resTelephone"
            placeholder="Restaurant Telephone"
            onChange={handleChange}
            value={resValues.resTelephone}
            required
          />
          <label htmlFor="resAddress">Restaurant Address</label>
          <input
            type="text"
            name="resAddress"
            placeholder="Restaurant Address"
            onChange={handleChange}
            value={resValues.resAddress}
            required
          />
          <label htmlFor="resEmail">Restaurant Email</label>
          <input
            type="email"
            name="resEmail"
            placeholder="Restaurant Email"
            onChange={handleChange}
            value={resValues.resEmail}
            required
          />
          <label htmlFor="resCR">CR</label>
          <input
            type="text"
            name="resCR"
            placeholder="CR"
            onChange={handleChange}
            value={resValues.resCR}
            required
          />
          <br />
          <p>
            By creating an account you agree to the Privacy Policy and to the
            Terms of Use{' '}
          </p>
          <button type="submit">Create Your Account</button>
        </form>
      )}
    </div>
  )
}

export default RegisterForm
