import "../styleSheets/NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="Links-container">
        <Link to="/">Home</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/account">Account</Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar
