import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../../services/api'

const EditAccount = ({ account, onUpdateSuccess }) => {
  const isCustomer = 'first_name' in account

  const [customerDetails, setCustomerDetails] = useState(
    isCustomer
      ? {
          first_name: account.first_name || '',
          last_name: account.last_name || '',
          email: account.email || '',
          address: account.address || ''
        }
      : null
  )

  const [resDetails, setResDetails] = useState(
    !isCustomer
      ? {
          rest_name: account.rest_name || '',
          rest_tel: account.rest_tel || '',
          rest_address: account.rest_address || '',
          email: account.email || '',
          CR: account.CR || '',
          logo_url: account.logo_url || ''
        }
      : null
  )

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    if (isCustomer) {
      setCustomerDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value
      }))
    } else {
      setResDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const dataToUpdate = isCustomer ? customerDetails : resDetails
      const res = await Client.put(`/auth/profile`, dataToUpdate)
      console.log('Update successful:', res.data)
      if (onUpdateSuccess) {
        onUpdateSuccess(res.data)
      }
      navigate('/account')
    } catch (error) {
      console.error('Failed to update profile:', error)
    }
  }

  return (
    <div className="account-container">
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Back</button>{' '}
        {/* the navigate(-1) returns the user to the previous page*/}
      </div>
      <h1>Account info</h1>

      {isCustomer ? (
        <form onSubmit={handleSubmit}>
          <label>
            <span>First Name:</span>
            <input
              type="text"
              name="first_name"
              value={customerDetails.first_name}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Last Name:</span>
            <input
              type="text"
              name="last_name"
              value={customerDetails.last_name}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Email:</span>
            <input
              type="email"
              name="email"
              value={customerDetails.email}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Address:</span>
            <input
              type="text"
              name="address"
              value={customerDetails.address}
              onChange={handleChange}
            />
          </label>
          <div className="update-btn">
            <button type="submit">Update Account Details</button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            <span>Restaurant Name:</span>
            <input
              type="text"
              name="rest_name"
              value={resDetails.rest_name}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Email:</span>
            <input
              type="email"
              name="email"
              value={resDetails.email}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Phone:</span>
            <input
              type="tel"
              name="rest_tel"
              value={resDetails.rest_tel}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Address:</span>
            <input
              type="text"
              name="rest_address"
              value={resDetails.rest_address}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>CR:</span>
            <input
              type="text"
              name="CR"
              value={resDetails.CR}
              onChange={handleChange}
            />
          </label>

          {resDetails.logo_url && (
            <img src={resDetails.logo_url} alt="Restaurant Logo" />
          )}
          <button type="submit">Update Account Details</button>
        </form>
      )}
    </div>
  )
}

export default EditAccount
