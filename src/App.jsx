// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

// bootstrap


// pages
import Home from './pages/Home'

// components
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <NavBar />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
    </>
  )
}

export default App
