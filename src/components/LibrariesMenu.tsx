import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'

export default function LibrariesMenu({ compact = false }: { compact?: boolean }) {
    const { t } = useLang()
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
        }
        document.addEventListener('mousedown', onClick)
        return () => document.removeEventListener('mousedown', onClick)
    }, [])

    const libraries = [
        { name: t.footer.credits.bass, url: 'https://www.un4seen.com' },
        { name: t.footer.credits.bassfx, url: 'https://www.un4seen.com' },
        { name: t.footer.credits.waveform, url: undefined },
        { name: t.footer.credits.echo, url: undefined },
        { name: t.footer.credits.taglib, url: 'https://github.com/taglib/taglib' },
        { name: t.footer.credits.taglib_android, url: 'https://github.com/Kyant0/taglib' },
        { name: t.footer.credits.itunes, url: 'https://itunes.apple.com' },
        { name: t.footer.credits.deezer, url: 'https://deezer.com' },
        { name: t.footer.credits.musicbrainz, url: 'https://musicbrainz.org' },
        { name: t.footer.credits.lastfm, url: 'https://last.fm' },
        { name: t.footer.credits.wikipedia, url: 'https://wikipedia.org' },
    ]

    return (
        <div className="libs-switch" ref={ref}>
            <button
                className={'libs-toggle' + (compact ? ' compact' : '')}
                onClick={() => setOpen((o) => !o)}
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <svg className="globe" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M14 2v6h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 13h8M8 17h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                {!compact && <span>{t.librariesMenu.title}</span>}
            </button>
            {open && (
                <ul className="libs-menu" role="listbox">
                    {libraries.map((lib) => (
                        <li key={lib.name}>
                            {lib.url ? (
                                <a
                                    className="libs-option"
                                    href={lib.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setOpen(false)}
                                >
                                    <span>{lib.name}</span>
                                    <svg className="ext-icon" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </a>
                            ) : (
                                <span className="libs-option no-link" onClick={() => setOpen(false)}>
                                    <span>{lib.name}</span>
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}