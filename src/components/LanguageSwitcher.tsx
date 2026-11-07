import { useEffect, useRef, useState } from 'react'
import { LANGS, useLang } from '../i18n'

export default function LanguageSwitcher({ dropUp = false }: { dropUp?: boolean }) {
    const { lang, setLang } = useLang()
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
        }
        document.addEventListener('mousedown', onClick)
        return () => document.removeEventListener('mousedown', onClick)
    }, [])

    const current = LANGS.find((l) => l.code === lang)!

    return (
        <div className={'lang-switch' + (dropUp ? ' up' : '')} ref={ref}>
            <button className="lang-toggle" onClick={() => setOpen((o) => !o)} aria-haspopup="listbox" aria-expanded={open}>
                <svg className="globe" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path
                        d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                    />
                </svg>
                <span>{current.code.toUpperCase()}</span>
            </button>
            {open && (
                <ul className="lang-menu" role="listbox">
                    {LANGS.map((l) => (
                        <li key={l.code}>
                            <button
                                className={'lang-option' + (l.code === lang ? ' active' : '')}
                                onClick={() => {
                                    setLang(l.code)
                                    setOpen(false)
                                }}
                            >
                                {l.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}