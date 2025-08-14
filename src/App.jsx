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
import Orders from './pages/Orders'
import EditAccount from './pages/EditAccount'
import ChangePassword from './pages/ChangePassword'

import OrderPlaced from './pages/OrderPlaced'

import Settings from './pages/Settings'

const App = () => {
  const [price, setPrice] = useState(0)
  const [item, setItem] = useState('')
  const [role, setRole] = useState(null)
  const [choice, setChoice] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const navigate = useNavigate()
  const location = useLocation()
  const { setUser, user } = useContext(UserContext)
  const [selectOrder, setSelectOrder] = useState(null)
  const [account, setAccount] = useState(null)
  const [trigger, setTrigger] = useState(false)
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  const getAccount = async () => {
    try {
      const res = await Client.get(`${BASE_URL}/auth/session`)

      setAccount(res.data)
      setUser(res.data)
    } catch (err) {
      setError('Failed to load profile')
      console.error(err)
    }
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
    getAccount()
  }, [trigger])

  useEffect(() => {
    if (user.role === 'customer') {
      const getPendingOrder = async () => {
        const res = await Client.get(`${BASE_URL}/orders/`)
        if (res.data) {
          setSelectOrder(res.data)
        }
      }
      getPendingOrder()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
    navigate('/welcome')
  }

    const handleDeleteAccount = async () => {
    if (
      window.confirm(
        'Are you sure you want to delete your account? This action cannot be undone.'
      )
    ) {
      try {
        await Client.delete(`${BASE_URL}/auth`)
        console.log('Account deleted successfully')

        // clears user data from local storage and context
        localStorage.removeItem('token')
        setUser(null)

        navigate('/welcome')
      } catch (err) {
        console.error('Failed to delete account:', err)
        setError('Failed to delete account. Please try again.')
      }
    }
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
                price={price}
                setPrice={setPrice}
              />
            }
          />

          <Route
            path="/account"
            element={
              <Account
                handleLogOut={handleLogOut}
                account={account}
                setAccount={setAccount}
              />
            }
          />

          <Route
            path="orders/placed"
            element={<OrderPlaced setCartItems={setCartItems} item={item} />}
          />
          <Route
            path="/account/edit"
            element={
              <EditAccount
                account={account}
                setAccount={setAccount}
                setTrigger={setTrigger}
                trigger={trigger} handleDeleteAccount={handleDeleteAccount}/>}
          />

          <Route
            path="/account/settings"
            element={<Settings handleLogOut={handleLogOut} />}
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
          <Route path="orders" element={<Orders role={role} />} />
          <Route path="/account/password" element={<ChangePassword />} />
        </Routes>
      </main>
      {location.pathname !== '/welcome' &&
        location.pathname !== '/auth/login' &&
        location.pathname !== '/auth/register' && <NavBar />}
    </>
  )
}

export default App
