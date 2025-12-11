import React, { useContext } from 'react'
import { useState, useCallback, useEffect, useMemo } from 'react'

type ThemeCtx = {
    theme: 'light' | 'dark'
    toggle: () => void
}

const ThemeContext = React.createContext<ThemeCtx | undefined>(undefined)

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
    
    const toggle = useCallback(() =>{
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }, [])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const value = useMemo(() => ({theme, toggle}), [theme, toggle])

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeCtx => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}