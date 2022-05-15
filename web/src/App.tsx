import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { AuthContext } from './routes'

export type Theme = 'dark' | 'light'

export function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [authenticated] = useContext(AuthContext)!
  const [theme, setTheme] = useState<Theme>(getTheme())

  function getTheme() {
    const currentTheme = localStorage.getItem('theme')

    if (currentTheme) {
      return currentTheme as Theme
    }

    return 'light'
  }

  function onChangeTheme() {
    theme === 'dark'
      ? setTheme('light')
      : setTheme('dark')
  }

  useEffect(() => {
    document.querySelector('html')?.removeAttribute('class')
    
    if (theme === 'dark') {
      document.querySelector('html')?.classList.add('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    if (authenticated) {
      if (location.pathname === '/') {
        navigate('/home')
      }
    } else {
      navigate('/login')
    }
  }, [authenticated])

  return (
    <>
      <Outlet context={[theme, onChangeTheme]} />
    </>
  )
}