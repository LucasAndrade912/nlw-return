import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { App } from './App'
import { Home } from './pages/Home'

export default () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/test" element={<Home />} />
    </Routes>
  )
}