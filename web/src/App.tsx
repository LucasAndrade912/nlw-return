import React, { useEffect, useState } from 'react'
import { ToggleThemeButton } from './components/ToggleThemeButton'
import { Widget } from './components/Widget'

type Theme = 'dark' | 'light'

export function App() {
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

  return (
    <>
      <ToggleThemeButton
        theme={theme!}
        onChangeTheme={onChangeTheme}
      />

      <Widget />
    </>
  )
}