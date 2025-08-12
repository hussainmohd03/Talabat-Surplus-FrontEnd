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
import Client from '../services/api'
import { BASE_URL } from '../globals'
import EditAccount from './pages/EditAccount'
import Order from './pages/Order'

const App = () => {
  const [item, setItem] = useState('')
  const [role, setRole] = useState(null)
  const [choice, setChoice] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const navigate = useNavigate()
  const location = useLocation()
  const { setUser } = useContext(UserContext)
  const [selectOrder, setSelectOrder] = useState(null)
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

  useEffect(() => {
    const getPendingOrder = async () => {
      const res = await Client.get(`${BASE_URL}/orders/`)
      if (res.data) {
        setSelectOrder(res.data)
      }
      // console.log('select order ', selectOrder)
    }
    getPendingOrder()
  }, [])
  // userOrder && console.log(userOrder)
  // const [selectOrder, setSelectOrder] = useState(ubserOrder ? userOrder : null)
  // console.log(selectOrder)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
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
          <Route
            path="/foods/:id"
            element={
              <FoodCard
                selectOrder={selectOrder}
                setSelectOrder={setSelectOrder}
              />
            }
          />

          <Route
            path="/account"
            element={<Account handleLogOut={handleLogOut} />}
          />


          <Route path="/auth/register" element={<RegisterForm role={role} />} />
          <Route
            path="cart"
            element={
              <Cart
                selectOrder={selectOrder}
                setSelectOrder={setSelectOrder}
                setCartItems={setCartItems}
                cartItems={cartItems}
                item={item}
                setItem={setItem}
              />
            }
          />
          <Route path="orders" element={<Order />} />
        </Routes>
      </main>
      {location.pathname !== '/welcome' &&
        location.pathname !== '/auth/login' &&
        location.pathname !== '/auth/register' && <NavBar />}
    </>
  )
}

export default App
