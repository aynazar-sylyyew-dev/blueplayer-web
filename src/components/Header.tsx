import { useLang } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher'
import LibrariesMenu from './LibrariesMenu'

const base = import.meta.env.BASE_URL

export default function Header() {
    const { t } = useLang()
    return (
        <header className="header">
            <div className="container header-inner">
                <a className="logo" href="#top">
                    <img src={`${base}icon/icon.png`} alt="" />
                    Blue Player
                </a>
                <div className="header-center">
                    <LibrariesMenu compact />
                </div>
                <div className="header-right">
                    <nav className="nav">
                        <a href="#features">{t.features}</a>
                    </nav>
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    )
}