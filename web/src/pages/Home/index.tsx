import React from 'react'
import { useOutletContext, Link } from 'react-router-dom'
import { ToggleThemeButton } from '../../components/ToggleThemeButton'
import { Widget } from '../../components/Widget'
import { Theme } from '../../App'

type AppContext = [
  theme: Theme,
  onChangeTheme: () => void
]

export function Home() {
  const [theme, onChangeTheme] = useOutletContext<AppContext>()

  return (
    <>
      <Link
        to="/dashboard"
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
      </Link>

      <ToggleThemeButton
        theme={theme!}
        onChangeTheme={onChangeTheme}
      />

      <Widget />
    </>
  )
}