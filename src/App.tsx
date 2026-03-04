import './App.css'
import TopNavBar from './components/general-view/TopNavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Projects from './page/Projects'
import AboutMe from './page/AboutMe'

function App() {
  return (
    <>
      <TopNavBar />
      <div className='mt-20'>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<AboutMe />} />
      </Routes>
      </div>
    </>
  )
}

export default App
