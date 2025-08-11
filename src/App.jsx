import Register from './pages/Welcome'
import LoginForm from './pages/LoginForm'
import './App.css'
import FoodCard from './components/FoodCard'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import CuisineFoods from './pages/CuisineFoods'
import { CheckSession } from '../services/Auth'
import { UserContext } from './context/UserContext'
import { useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Account from './pages/Account'
import RegisterForm from './pages/RegisterForm'
import { useState } from 'react'
import Cart from './pages/Cart'

const App = () => {
  const [role, setRole] = useState(null)
  const [choice, setChoice] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()
  const { setUser } = useContext(UserContext)
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    } else {
      navigate('/welcome')
    }
  }, [])

  const initialCreds = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    address: ''
  }

  const firstCreds = {
    resName: '',
    resPhone: '',
    resAddress: '',
    resEmail: '',
    CR: ''
  }

  const [creds, setCreds] = useState(initialCreds)

  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.id]: e.target.value })
  }

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<CuisineFoods />} />
          <Route
            path="/welcome"
            element={
              <Register
                choice={choice}
                setChoice={setChoice}
                role={role}
                setRole={setRole}
              />
            }
          />
          <Route path="/auth/login" element={<LoginForm role={role} />} />
          <Route path="/foods/:id" element={<FoodCard />} />
          <Route path="/account" element={<Account />} />
          <Route
            path="/auth/register"
            element={
              <RegisterForm
                role={role}
              />
            }
          />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </main>
      {location.pathname !== '/welcome' && <NavBar />}
    </>
  )
}

export default App
