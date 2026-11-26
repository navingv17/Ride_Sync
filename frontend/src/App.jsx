import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Home from './pages/home'
import Publish from './pages/publish'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
  <div className='text-red-500 text-2xl font-bold '>VANAKAM NANBARGALE!</div>
  <BrowserRouter>
  <Routes>
    <Route path="login" element={<Login/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="publish" element={<Publish/>}/>
    <Route path="dashboard" element={<Dashboard/>}/>
  </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
