import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Login from './components/LoginPopup/Login'

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : null}
      <Navbar setShowLogin={setShowLogin} />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
