import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const LoginForm = () => {
  const initialState = { email: '', password: '' }

  const [loginValues, setLoginValues] = useState(initialState)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = await SignInUser(loginValues)
    setFormValues(initialState)
    setUser(userData)
    navigate('/')
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleChange}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="email@gmail.com"
          onChange={handleChange}
          value={loginValues.email}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          onChange={handleChange}
          value={loginValues.password}
          required
        />
        <button type="submit">Login</button>
        <br />
      </form>
    </>
  )
}

export default LoginForm
