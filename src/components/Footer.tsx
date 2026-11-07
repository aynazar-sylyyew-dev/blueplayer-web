import { useLang } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeSwitcher from './ThemeSwitcher'

const base = import.meta.env.BASE_URL

export default function Footer() {
    const { t } = useLang()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid reveal">
                    <div>
                        <a className="logo" href="#top">
                            <img src={`${base}icon/icon.png`} alt="" />
                            Blue Player
                        </a>
                        <p className="footer-desc">{t.footer.description}</p>
                    </div>
                    <div>
                        <h4>{t.footer.product}</h4>
                        <ul className="footer-links">
                            <li><a href="#features">{t.features}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>{t.footer.legal}</h4>
                        <ul className="footer-links">
                            <li><a href={`${base}privacy.html`}>{t.footer.privacy}</a></li>
                            <li><a href={`${base}terms.html`}>{t.footer.terms}</a></li>
                            <li><a href={`${base}disclaimer.html`}>{t.footer.disclaimer}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom reveal">
                    <p className="footer-copy">{t.footer.copyright}</p>
                    <div className="footer-tools">
                        <LanguageSwitcher dropUp />
                        <ThemeSwitcher />
                    </div>
                </div>

                <div className="footer-credits reveal">
                    <div className="credit-item">
                        <div className="credit-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                                <path d="M14 2v6h6M9 13v4a2 2 0 1 1-2-2h2M9 13h4v4a2 2 0 1 1-2-2h2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span>{t.footer.credits.bass}</span>
                    </div>
                    <div className="credit-item">
                        <div className="credit-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M7 18V6M12 16V8M17 14v-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span>{t.footer.credits.bassfx}</span>
                    </div>
                    <div className="credit-item">
                        <div className="credit-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0M2 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0M2 7c2-3 4-3 6 0s4 3 6 0 4-3 6 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span>{t.footer.credits.waveform}</span>
                    </div>
                    <div className="credit-item">
                        <div className="credit-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <rect x="5" y="3" width="14" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                                <circle cx="12" cy="14" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
                                <circle cx="12" cy="7.5" r="1.2" fill="currentColor" />
                            </svg>
                        </div>
                        <span>{t.footer.credits.echo}</span>
                    </div>
                    <div className="credit-item">
                        <div className="credit-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.59 13.41 12 22 2 12V2h10l10 10-1.41 1.41z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                                <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" />
                            </svg>
                        </div>
                        <span>{t.footer.credits.taglib}</span>
                    </div>
                    <div className="credit-item">
                        <div className="credit-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <rect x="6" y="2" width="12" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                                <path d="M10 18h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span>{t.footer.credits.taglib_android}</span>
                    </div>
                    <div className="credit-item">
                        <div className="credit-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M7 18a5 5 0 1 1 1.5-9.77A6 6 0 0 1 20 13a4 4 0 0 1-4 5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span>{t.footer.credits.itunes}</span>
                    </div>
                    <div className="credit-item">
                        <div className="credit-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span>{t.footer.credits.deezer}</span>
                    </div>
                    <div className="credit-item">
                        <div className="credit-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <ellipse cx="12" cy="6" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                                <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" fill="none" stroke="currentColor" strokeWidth="1.8" />
                            </svg>
                        </div>
                        <span>{t.footer.credits.musicbrainz}</span>
                    </div>
                    <div className="credit-item">
                        <div className="credit-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 21s-8-4.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6.5-8 11-8 11z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span>{t.footer.credits.lastfm}</span>
                    </div>
                    <div className="credit-item">
                        <div className="credit-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5a2.5 2.5 0 0 0 0 5H20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span>{t.footer.credits.wikipedia}</span>
                    </div>
                </div>

                <div className="footer-feedback">
                    <a href="mailto:blueplayer.support@gmail.com">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                            <path d="m2 8 10 6 10-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="feedback-label">{t.footer.feedback}:</span>
                        <span className="feedback-email">blueplayer.support@gmail.com</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}