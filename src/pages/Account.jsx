import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'
import Client from '../../services/api'
import '../../public/styleSheets/AccountStyle.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import EditAccount from './EditAccount'


const Account = () => {
  const [account, setAccount] = useState(null)
  const [error, setError] = useState('')
  const [ edit, setEdit ] = useState(false)
  const navigate = useNavigate()
  
  
  useEffect(() => {
    const getAccount = async () => {
      try {
        // const token = localStorage.getItem('token') //storing
        const res = await Client.get(`${BASE_URL}/auth/profile`)
        console.log('account response rn ', res)
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

  return (
   <div className="account-container">
      {edit ? (
        
        <EditAccount account={account} onUpdateSuccess={setAccount} />
      ) : (
       
        <>
          
          <div className='back-btn'>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
          <h1>Account info</h1>

          <div className='edit-btn'>
            <button onClick={() => setEdit(true)}>Edit Profile</button>
          </div>

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
              <div className='delete-btn'>
                <button>Delete Account</button>
              </div>
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
        </>
      )}
    </div>
  )
}

export default Account
