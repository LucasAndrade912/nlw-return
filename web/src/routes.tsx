import React, { createContext, SetStateAction, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { App } from './App'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

type AuthContextProps = [
  authenticated: boolean | null,
  setAuthenticated: React.Dispatch<SetStateAction<boolean | null>>
]

export const AuthContext = createContext<AuthContextProps | null>(null)

export default () => {
  const userToken = localStorage.getItem('token')

  const [authenticated, setAuthenticated] = useState<boolean | null>(userToken ? true : false)
  
  return (
    <AuthContext.Provider value={[ authenticated, setAuthenticated ]}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthContext.Provider>
  )
}