import { useState, useContext } from 'react'
import { RegisterUser, SignInUser } from '../../services/Auth'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom'

const LoginForm = ({ role }) => {
  const initialState = { email: '', password: '' }
  const [loginValues, setLoginValues] = useState(initialState)
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = await SignInUser(loginValues, role)
    setLoginValues(initialState)
    setUser(userData)
    navigate('/')
  }

  return (
    <>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email@gmail.com"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Log in</button>
        <br />
      </form>
    </>
  )
}

export default LoginForm
