'use client'

import { useTheme } from 'next-themes'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DarkModeSwitch
      checked={theme === 'dark'}
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      size={24}
    />
  )
}

export default ThemeToggle
