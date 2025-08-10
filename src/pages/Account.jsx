import { useEffect, useState } from 'react'
import axios from 'axios'

const Account = () => {
  const [account, setAccount] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const getAccount = async () => {
      try {
        const token = localStorage.getItem('token') //storing
        const res = await axios.get('http://localhost:3010/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setAccount(res.data)
      } catch (err) {
        setError('Failed to load profile')
        console.error(err)
      }
    }

    getAccount()
  }, [])

  if (error) return <p>{error}</p>
  if (!account) return <p>Loading Account...</p>

  return (
    <div>
      <h1>Account</h1>
      {'first_name' in profile ? (
        <>
          <p>First Name: {profile.first_name}</p>
          <p>Last Name:{profile.last_name}</p>
          <p>Email:{profile.email}</p>
          <p>Address:{profile.address}</p>
          {profile.avatar_url && (
            <img src={profile.avatar_url} alt="Avatar" width="100" />
          )}
        </>
      ) : (
        <>
          <p>Restaurant Name:{profile.rest_name}</p>
          <p>Email:{profile.email}</p>
          <p>Phone: {profile.rest_tel}</p>
          <p>Address:{profile.rest_address}</p>
          <p>CR: {profile.CR}</p>
        </>
      )}
    </div>
  )
}

export default Account
