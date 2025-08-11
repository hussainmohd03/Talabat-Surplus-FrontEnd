import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'
import Client from '../../services/api'
const Account = () => {
  const [account, setAccount] = useState(null)
  const [error, setError] = useState('')

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
    <div>
      <h1>Account</h1>
      {'first_name' in account ? (
        <>
          <p>First Name: {account.first_name}</p>
          <p>Last Name: {account.last_name}</p>
          <p>Email: {account.email}</p>
          <p>Address: {account.address}</p>
          {account.avatar_url && (
            <img src={account.avatar_url} alt="Avatar" width="100" />
          )}
        </>
      ) : (
        <>
          <p>Restaurant Name:{account.rest_name}</p>
          <p>Email:{account.email}</p>
          <p>Phone: {account.rest_tel}</p>
          <p>Address:{account.rest_address}</p>
          <p>CR: {account.CR}</p>
        </>
      )}
    </div>
  )
}

export default Account
