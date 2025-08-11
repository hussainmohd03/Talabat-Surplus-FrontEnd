import { useState, useContext } from 'react'
import { SignInUser } from '../../services/Auth'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const LoginForm = () => {
  const initialState = { email: '', password: '' }
  const [loginValues, setLoginValues] = useState(initialState)
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = await SignInUser(loginValues)
    setLoginValues(initialState)
    setUser(userData)
    navigate('/')
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email@gmail.com"
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <br />
      </form>
    </>
  )
}

export default LoginForm
