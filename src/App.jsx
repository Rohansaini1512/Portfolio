
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Connect from './Pages/Connect'
import Skills from './Pages/Skills'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/connect' element={<Connect />}/>
        <Route path='/skills' element={<Skills />}/>
      </Routes>
    </>
  )
}

export default App
