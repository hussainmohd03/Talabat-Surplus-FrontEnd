import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../../services/api'
import { BASE_URL } from '../../globals'
import '../../public/styleSheets/PasswordForm.css'

const ChangePassword = () => {
  const navigate = useNavigate()
  const credentialsInitial = {
    old_password: '',
    new_password: ''
  }
  const [credentials, setCredentials] = useState(credentialsInitial)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.put(`${BASE_URL}/auth/`, {
      old_password: credentials.old_password,
      new_password: credentials.new_password
    })
    navigate('/account')
  }

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="password-box">
        <h1>Change password</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="old_password">Current password</label>
          <input
            type="password"
            name="old_password"
            placeholder="Current password"
            onChange={handleChange}
            value={credentials.old_password}
            required
          />
          <label htmlFor="new_password">New password</label>
          <input
            type="password"
            name="new_password"
            placeholder="New password"
            onChange={handleChange}
            value={credentials.new_password}
            required
          />
          <button type="submit">Change password</button>
          <p>Enter your current password and your new password.</p>
        </form>
      </div>
    </>
  )
}

export default ChangePassword
