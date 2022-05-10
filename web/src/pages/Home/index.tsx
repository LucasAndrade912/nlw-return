import React, { useEffect, useState } from 'react'
import { ToggleThemeButton } from '../../components/ToggleThemeButton'
import { useOutletContext } from 'react-router-dom'
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