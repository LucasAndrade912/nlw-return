import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { App } from './App'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

export default () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  )
}