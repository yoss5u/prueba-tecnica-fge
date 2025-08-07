import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Menu from './Pages/Menu'
import ProtectedRoutes from './utils/ProtectedRoutes'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route element={<ProtectedRoutes />}>
            <Route path='/menu' element={<Menu />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
