// import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Connect from './Pages/Connect';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
// import Loading from './Components/Loading';

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); // 6000 milliseconds = 6 seconds

  //   return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  // }, []);

  return (
    <>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </>
  )
}

export default App;
