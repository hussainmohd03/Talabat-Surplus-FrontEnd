import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../../services/Auth'

const RegisterForm = ({ role }) => {
  const navigate = useNavigate()

  const custInitialState = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    address: ''
  }

  const resInitialState = {
    resName: '',
    resPhone: '',
    resAddress: '',
    resEmail: '',
    CR: ''
  }

  const [credentials, setCredentials]=useState('')
  const [customerValues, setCustomerValues] = useState(custInitialState)
  const [resValues, setResValues] = useState(resInitialState)

  const handleChange = (e) => {
    setCustomerValues({ ...customerValues, [e.target.name]: e.target.value })
    setResValues({ ...resValues, [e.target.name]: e.target.value })

  }


  const handleSubmit = async (e) => {
    if (role === 'customer') {
      e.preventDefault()
      await RegisterUser(customerValues, role)
      setCustomerValues(custInitialState)
      navigate('/auth/login')
    } else {
      e.preventDefault()
      await RegisterUser(resValues, role)
      setResValues(resInitialState)
      navigate('/auth/login')
    }
  }

  return (
    <div className="Register-Container">
      <h1>Create a {role} account</h1>

      {role === 'customer' ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={handleChange}
            value={customerValues.first_name}
            required
          />
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={handleChange}
            value={customerValues.last_name}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={customerValues.email}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={customerValues.password}
            required
          />
          {/* <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            placeholder="Password"
            onChange={handleChange}
            value={creds.confirm_password}
            required
          /> */}
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            placeholder="street 123"
            onChange={handleChange}
            value={customerValues.address}
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
