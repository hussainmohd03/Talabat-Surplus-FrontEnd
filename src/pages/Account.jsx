import { useContext, useEffect, useState } from 'react'
import { BASE_URL } from '../../globals'
import Client from '../../services/api'
import '../styleSheets/AccountStyle.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Account = ({ handleLogOut, account, setAccount }) => {
  const [error, setError] = useState('')
  const [edit, setEdit] = useState(false)
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)

  const handleEditToggle = () => {
    navigate('edit')
  }

  const getAccount = async () => {
    try {
      const res = await Client.get(`${BASE_URL}/auth/profile`)
      setAccount(res.data)
      setUser(res.data)
    } catch (err) {
      setError('Failed to load profile')
      throw error
    }
  }

  useEffect(() => {
    getAccount()
  }, [])

  if (error) return <p>{error}</p>
  if (!account) return <p>Loading your account...</p>

  return (
    <div className="account-container">
      <>
        <div className="settings-btn">
          <Link to="/account/settings">
            <button>Settings</button>
          </Link>
        </div>
        <h2>Account Info</h2>
        {'first_name' in account ? (
          <>
            <label>
              <span>First Name:</span>
              <input type="text" value={account.first_name} readOnly />{' '}
            </label>

            <label>
              <span>Last Name:</span>
              <input type="text" value={account.last_name} readOnly />
            </label>
            <label>
              <span>Email:</span>
              <input type="email" value={account.email} readOnly />
            </label>

            <label>
              <span>Address:</span>
              <input type="text" value={account.address} readOnly />
            </label>

            <Link to={'/account/password'}>
              <button>Change password</button>
            </Link>
            <button onClick={handleLogOut}>Log out</button>
          </>
        ) : (
          <>
            <label>
              <span>Restaurant Name:</span>
              <input type="text" value={account.rest_name} readOnly />
            </label>

            <label>
              <span>Email:</span>
              <input type="email" value={account.email} readOnly />
            </label>

            <label>
              <span>Phone:</span>
              <input type="tel" value={account.rest_tel} readOnly />
            </label>

            <label>
              <span>Address:</span>
              <input type="text" value={account.rest_address} readOnly />
            </label>

            <label>
              <span>CR:</span>
              <input type="text" value={account.CR} readOnly />
            </label>
          </>
        )}

        <div className="edit-btn">
          <button onClick={() => handleEditToggle()}>Edit Profile</button>
        </div>
      </>
    </div>
  )
}

export default Account
