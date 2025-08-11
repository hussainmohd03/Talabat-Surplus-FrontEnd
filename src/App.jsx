import Register from './pages/Register'
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
const App = () => {
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
      // navigate('/auth/login')
    }
  }, [])
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<CuisineFoods />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<LoginForm />} />
          <Route path="/foods/:id" element={<FoodCard />} />
        </Routes>
      </main>
      
      <NavBar />
    </>
  )
}

export default App
