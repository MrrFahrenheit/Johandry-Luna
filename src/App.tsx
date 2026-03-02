import './App.css'
import TopNavBar from './components/general-view/TopNavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Projects from './page/Projects'

function App() {
  return (
    <>
      <TopNavBar />
      <div className='mt-20'>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      </div>
    </>
  )
}

export default App
