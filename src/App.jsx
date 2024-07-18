
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Connect from './Pages/Connect'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/connect' element={<Connect />}/>
      </Routes>
    </>
  )
}

export default App
