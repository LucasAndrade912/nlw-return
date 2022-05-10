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
      <a
        className="
          transition-colors
        text-brand-500
        hover:text-brand-300
          underline
          underline-offset-2
          cursor-pointer
          p-2
          rounded-md
          absolute
          top-5
          left-5
        "
      >
        Dashboard
      </a>

      <ToggleThemeButton
        theme={theme!}
        onChangeTheme={onChangeTheme}
      />

      <Widget />
    </>
  )
}