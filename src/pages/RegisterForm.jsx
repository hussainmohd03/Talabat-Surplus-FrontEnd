import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../../services/Auth'
import '../../public/styleSheets/RegisterStyle.css'
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
    rest_name: '',
    res_tel: '',
    rest_address: '',
    email: '',
    CR: '',
    password: ''
  }

  const credInitial = {
    confirm_password: ''
  }

  const [customerValues, setCustomerValues] = useState(custInitialState)
  const [resValues, setResValues] = useState(resInitialState)
  const [credentials, setCredentials] = useState(credInitial)
  const [filled, setFilled] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    if (role === 'customer') {
      setCustomerValues({ ...customerValues, [name]: value })
    } else {
      setResValues({ ...resValues, [name]: value })
    }

    if (name === 'confirm_password') {
      setCredentials({ ...credentials, confirm_password: value })
    }

    // Check if passwords match and are non-empty
    const pwd = role === 'customer'
      ? (name === 'password' ? value : customerValues.password)
      : (name === 'password' ? value : resValues.password)

    const confirmPwd = name === 'confirm_password' ? value : credentials.confirm_password

    if (pwd && confirmPwd && pwd === confirmPwd) {
      setFilled(true)
    } else {
      setFilled(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (role === 'customer') {
      await RegisterUser(customerValues, role)
      setCustomerValues(custInitialState)
    } else {
      await RegisterUser(resValues, role)
      setResValues(resInitialState)
    }

    setCredentials(credInitial)
    setFilled(false)
    navigate('/auth/login')
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

          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={credentials.confirm_password}
            required
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            placeholder="street 123"
            onChange={handleChange}
            value={customerValues.address}
          />
          <br />

          <p>Passwords must match.</p>
          <p>
  By creating an account you agree to the 
  <a href="#" className="privacy"> Privacy Policy </a> 
  and to the 
  <a href="#" className="terms"> terms of use</a>
          </p>

          <button disabled={!filled} type="submit">
            Create Your Account
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="rest_name">Restaurant Name</label>
          <input
            type="text"
            name="rest_name"
            placeholder="Restaurant Name"
            onChange={handleChange}
            value={resValues.rest_name}
            required
          />

          <label htmlFor="res_tel">Restaurant Telephone</label>
          <input
            type="text"
            name="res_tel"
            placeholder="Restaurant Telephone"
            onChange={handleChange}
            value={resValues.res_tel}
            required
          />

          <label htmlFor="rest_address">Restaurant Address</label>
          <input
            type="text"
            name="rest_address"
            placeholder="Restaurant Address"
            onChange={handleChange}
            value={resValues.rest_address}
            required
          />

          <label htmlFor="email">Restaurant Email</label>
          <input
            type="email"
            name="email"
            placeholder="Restaurant Email"
            onChange={handleChange}
            value={resValues.email}
            required
          />

          <label htmlFor="CR">CR</label>
          <input
            type="text"
            name="CR"
            placeholder="CR"
            onChange={handleChange}
            value={resValues.CR}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={resValues.password}
            required
          />

          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={credentials.confirm_password}
            required
          />
          <br />

          <p>
  By creating an account you agree to the 
  <a href="#" className="privacy"> Privacy Policy </a> 
  and to the 
  <a href="#" className="terms"> terms of use</a>
          </p>

          <button disabled={!filled} type="submit">
            Create Your Account
          </button>
        </form>
      )}
    </div>
  )
}

export default RegisterForm
