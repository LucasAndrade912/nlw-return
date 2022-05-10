import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export type Theme = 'dark' | 'light'

export function App() {
  const navigate = useNavigate()
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
    navigate('/home')
  }, [])

  return (
    <>
      <Outlet context={[theme, onChangeTheme]} />
    </>
  )
}