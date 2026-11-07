import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type ThemeMode = 'system' | 'light' | 'dark'
export type ResolvedTheme = 'light' | 'dark'

const ThemeContext = createContext<{ mode: ThemeMode; setMode: (m: ThemeMode) => void; resolved: ResolvedTheme } | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<ThemeMode>(() => (localStorage.getItem('theme') as ThemeMode) || 'system')
    const [systemLight, setSystemLight] = useState(() => window.matchMedia('(prefers-color-scheme: light)').matches)

    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: light)')
        const onChange = (e: MediaQueryListEvent) => setSystemLight(e.matches)
        mq.addEventListener('change', onChange)
        return () => mq.removeEventListener('change', onChange)
    }, [])

    const resolved: ResolvedTheme = mode === 'system' ? (systemLight ? 'light' : 'dark') : mode

    useEffect(() => {
        localStorage.setItem('theme', mode)
        document.documentElement.dataset.theme = resolved
    }, [mode, resolved])

    return <ThemeContext.Provider value={{ mode, setMode, resolved }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    const ctx = useContext(ThemeContext)
    if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
    return ctx
}