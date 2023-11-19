'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <DarkModeSwitch
      checked={theme === 'dark'}
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      size={24}
    />
  )
}

export default ThemeToggle
