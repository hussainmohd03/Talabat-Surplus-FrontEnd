import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'
import Client from '../../services/api'
import '../../public/styleSheets/AccountStyle.css'
import BackButton from '../components/BackButton'
import { useNavigate } from 'react-router-dom'

const Account = ({handleLogOut}) => {
  const [account, setAccount] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const getAccount = async () => {
      try {
        // const token = localStorage.getItem('token') //storing
        const res = await Client.get(`${BASE_URL}/auth/profile`)
        setAccount(res.data)
      } catch (err) {
        setError('Failed to load profile')
        console.error(err)
      }
    }

    getAccount()
  }, [])

  if (error) return <p>{error}</p>
  if (!account) return <p>Loading your account...</p>

  const handleAccountClick = () => {}

  return (
    <div>
      <div className="account-container">
        <BackButton />
        <h1>Account info</h1>
        {'first_name' in account ? (
          <>
            <label>
              <span>First Name:</span>
              <input type="text" value={account.first_name} readOnly />
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

            {account.avatar_url && (
              <img src={account.avatar_url} alt="Avatar" />
            )}
            
            <button onClick={()=>handleLogOut}>Log out</button>
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

            {account.logo_url && (
              <img src={account.logo_url} alt="Restaurant Logo" />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Account
