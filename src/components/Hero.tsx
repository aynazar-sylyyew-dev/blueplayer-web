import { useEffect, useState } from 'react'
import { useLang } from '../i18n'
import { useTheme } from '../theme'
import Phone from './Phone'
import { screenshotsFor } from '../screenshots'

export default function Hero() {
    const { t } = useLang()
    const { resolved } = useTheme()
    const shots = screenshotsFor(resolved)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const id = setInterval(() => setIndex((i) => (i + 1) % shots.length), 4000)
        return () => clearInterval(id)
    }, [shots.length])

    return (
        <section className="hero" id="top">
            <div className="container hero-inner">
                <h1 className="reveal">{t.hero.title}</h1>
                <p className="reveal">{t.hero.subtitle}</p>
                <div className="hero-actions reveal">
                    <a className="btn btn-primary" href="#features">{t.features}</a>
                </div>
                <div className="hero-phone reveal">
                    <Phone>
                        {shots.map((src, i) => (
                            <img key={src} src={src} alt="" className={'slide' + (i === index ? ' active' : '')} />
                        ))}
                        <div className="phone-dots">
                            {shots.map((_, i) => (
                                <button
                                    key={i}
                                    className={i === index ? 'dot active' : 'dot'}
                                    onClick={() => setIndex(i)}
                                    aria-label={`Screen ${i + 1}`}
                                />
                            ))}
                        </div>
                    </Phone>
                </div>
            </div>
        </section>
    )
}