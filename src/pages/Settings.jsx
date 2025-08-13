import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Settings = ({ handleLogOut }) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <h1>Settings</h1>

      <div className="settings-section">
        <h2>Account Options</h2>
        <div className="settings-options">
          <Link to="/account">
            <button className="settings-button">Account Info</button>
          </Link>

          <Link to="/account/password">
            <button className="settings-button">Change Password</button>
          </Link>
          <button onClick={handleLogOut} className="settings-button">
            Log Out
          </button>
        </div>
      </div>
    </>
  )
}

export default Settings
