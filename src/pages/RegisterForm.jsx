import { useState } from "react"
import { useNavigate } from 'react-router-dom'
const RegisterForm = ({ role }) => {

    let navigate = useNavigate()
  
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
    setResValues({...resValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    if(role === customerValues){
    e.preventDefault()
    await RegisterUser(customerValues)
    setCustomerValues(initialState)
    navigate('/LoginForm')
   } else {
      e.preventDefault()
    await RegisterUser(resValues)
    setResValues(firstState)
    navigate('/LoginForm')
    }
  
  return (
    <div className="Register-Container">
      <h1>Sign Up as A {role}</h1>

      {role === 'customer' ? (
        <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text" placeholder="First Name" onChange={handleChange} value={customerValues.firstName} required/>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" placeholder="Last Name" onChange={handleChange} value={customerValues.lastName} required/>
          <label>Email</label>
          <input type="email" placeholder="Email" onChange={handleChange} value={customerValues.Email} required/>
          <label>Password</label>
          <input type="password" placeholder="Password" onChange={handleChange} value={customerValues.Password} required/>
          <br />
          <button type="submit">Register</button>
        </form>
      ) : (
        <form>
          <label htmlFor="resName">Restaurant Name</label>
          <input type="text" />
          <label htmlFor="resPhone">Restaurant Telephone</label>
          <input type="text" />
          <label htmlFor="resAddress">Restaurant Address</label>
          <input type="text" />
          <label htmlFor="resEmail">Restaurant Email</label>
          <input type="email" />
          <label>CR</label>
          <input type="number" />
          <br />
          <button type="submit">Continue</button>

        </form>
      )}
    </div>
  )
}
}

export default RegisterForm
