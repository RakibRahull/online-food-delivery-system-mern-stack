import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Singup from './pages/Singup.jsx'
import Singin from './pages/Singin.jsx'

function App() {
  return (
    <Routes>
      <Route path='/singup' element={<Singup/>} />
      <Route path='/singin' element={<Singin/>} />
    </Routes>
  )
}

export default App