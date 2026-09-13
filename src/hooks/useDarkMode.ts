import { useState, useEffect, useCallback } from 'react'

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => {
      const newMode = !prev
      if (newMode) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('darkMode', 'enabled')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('darkMode', 'disabled')
      }
      return newMode
    })
  }, [])

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedMode === 'enabled') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else if (savedMode === 'disabled') {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    } else {
      setIsDarkMode(prefersDark)
      if (prefersDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [])

  return { toggleDarkMode, isDarkMode }
}