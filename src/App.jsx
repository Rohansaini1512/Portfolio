
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Connect from './Pages/Connect'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/connect' element={<Connect />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/projects' element={<Projects />}/>
      </Routes>
    </>
  )
}

export default App
