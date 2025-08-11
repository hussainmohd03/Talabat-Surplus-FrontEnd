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
import { useNavigate } from 'react-router-dom'
import Account from './pages/Account'
import RegisterForm from './pages/RegisterForm'
import { useState } from 'react'

const App = () => {
  const [role, setRole] = useState(null)
  const [choice, setChoice] = useState(null)

  const navigate = useNavigate()
  const { setUser, user } = useContext(UserContext)
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    } else {
      // navigate('/auth/register')
    }
  }, [])
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
          <Route path="/auth/login" element={<LoginForm  role={role}/>} />
          <Route path="/foods/:id" element={<FoodCard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/auth/register" element={<RegisterForm role={role} />} />
        </Routes>
      </main>
      <NavBar />
    </>
  )
}

export default App
