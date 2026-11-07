import { useLang } from '../i18n'
import { useTheme } from '../theme'
import Phone from './Phone'
import { screenshotsFor } from '../screenshots'

export default function Screenshots() {
    const { t } = useLang()
    const { resolved } = useTheme()
    const shots = screenshotsFor(resolved)

    return (
        <div id="features">
            {shots.map((src, i) => (
                <section key={src} className={'showcase' + (i % 2 === 1 ? ' reverse' : '')}>
                    <div className="container showcase-inner">
                        <div className="showcase-text reveal">
                            <h2>{t.showcase[i].title}</h2>
                            <p>{t.showcase[i].text}</p>
                        </div>
                        <div className="showcase-phone reveal">
                            <Phone>
                                <img src={src} alt={t.showcase[i].title} />
                            </Phone>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}