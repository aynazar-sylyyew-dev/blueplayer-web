import type { ReactNode } from 'react'
import { useLang } from '../i18n'
import { useTheme, type ThemeMode } from '../theme'

export default function ThemeSwitcher() {
    const { mode, setMode } = useTheme()
    const { t } = useLang()

    const options: { mode: ThemeMode; label: string; icon: ReactNode }[] = [
        {
            mode: 'system',
            label: t.footer.theme.system,
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 20h6M12 16v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            mode: 'light',
            label: t.footer.theme.light,
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" fill="currentColor" />
                    <path
                        d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            ),
        },
        {
            mode: 'dark',
            label: t.footer.theme.dark,
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" fill="currentColor" />
                </svg>
            ),
        },
    ]

    return (
        <div className="theme-switch">
            {options.map((o) => (
                <button
                    key={o.mode}
                    className={'theme-btn' + (mode === o.mode ? ' active' : '')}
                    onClick={() => setMode(o.mode)}
                    title={o.label}
                    aria-label={o.label}
                    aria-pressed={mode === o.mode}
                >
                    {o.icon}
                </button>
            ))}
        </div>
    )
}