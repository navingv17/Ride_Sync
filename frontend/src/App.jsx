import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Search from './pages/search'
import Publish from './pages/publish'
import Register from './pages/register'
import Settings from './pages/settings'
import Home from './pages/home'
function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
  <BrowserRouter>
  <Routes>
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="/dashboard" element={<Dashboard/>}>
      <Route path="home" element={<Home/>}/>
      <Route path="search" element={<Search/>}/>
      <Route path="publish" element={<Publish/>}/>
      <Route path="settings" element={<Settings/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
