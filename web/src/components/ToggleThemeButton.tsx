import React from 'react'
import { Sun, Moon } from 'phosphor-react'

interface ToggleThemeButtonProps {
  theme: 'dark' | 'light'
  onChangeTheme: () => void
}

export function ToggleThemeButton({ theme, onChangeTheme }: ToggleThemeButtonProps) {
  return (
    <button
      onClick={onChangeTheme}
      className="
        absolute
        top-5
        right-5
        w-10
        h-10
        p-1
      "
    >
      {
        theme === 'dark'
          ? <Sun className="w-full h-full" />
          : <Moon className="w-full h-full" />
      }
    </button>
  )
}