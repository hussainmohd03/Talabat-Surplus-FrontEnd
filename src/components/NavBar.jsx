import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/Account">Account</Link>
      </nav>
    </>
  )
}

export default NavBar
