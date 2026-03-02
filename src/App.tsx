import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNavBar from './components/general-view/TopNavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'

function App() {
  return (
    <>
      <TopNavBar />
      <div className='mt-20'>
        <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </div>
    </>
  )
}

export default App
