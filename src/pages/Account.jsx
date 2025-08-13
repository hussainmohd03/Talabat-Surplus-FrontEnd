import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'
import Client from '../../services/api'
import '../../public/styleSheets/AccountStyle.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import EditAccount from './EditAccount'
import { UserContext } from '../context/UserContext'
import BackButton from '../components/BackButton'

const Account = ({ handleLogOut, account, setAccount }) => {
  const [error, setError] = useState('')
  const [edit, setEdit] = useState(false)
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext) //

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
      console.error(err)
    }
  }

  useEffect(() => {
    getAccount()
  }, [])

  const handleEditComplete = (updatedAccountData) => {
    setAccount(updatedAccountData) // updates the account state
    setEdit(false)
  }

  // function to handle the deletion of the account
  const handleDeleteAccount = async () => {
    if (
      window.confirm(
        'Are you sure you want to delete your account? This action cannot be undone.'
      )
    ) {
      try {
        await Client.delete(`${BASE_URL}/auth`)
        console.log('Account deleted successfully')

        // clears user data from local storage and context
        localStorage.removeItem('token')
        setUser(null)

        navigate('/welcome')
      } catch (err) {
        console.error('Failed to delete account:', err)
        setError('Failed to delete account. Please try again.')
      }
    }
  }

  if (error) return <p>{error}</p>
  if (!account) return <p>Loading your account...</p>

  return (
    <div className="account-container">
      <>
        <h2>Account Info</h2>
        {'first_name' in account ? (
          <>
            <label>
              <span>First Name:</span>
              <input type="text" value={account.first_name} readOnly />{' '}
              {/*readOnly not allows modifying of the content of the field*/}
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
            
            
            {/* {account.avatar_url && <img src={account.avatar_url} alt="Avatar" />} */}
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

          // {account.logo_url && (
          //   <img src={account.logo_url} alt="Restaurant Logo" />
          // )}
        )}
        

        <div className="edit-btn">
          <button onClick={() => handleEditToggle()}>Edit Profile</button>
        </div>
       
        <div className="settings-btn">
          <Link to="/account/settings">
            <button>Settings</button>
          </Link>
        </div>
      </>
    </div>
  )
}

export default Account
