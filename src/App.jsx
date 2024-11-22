import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'


function App() {
  let [characters,setCharacters] = useState([]);
  return (
    <>
      <h1>Star wars characters</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/character/:id" element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App
