import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <NavBar />
    </>
  )
}

export default App
