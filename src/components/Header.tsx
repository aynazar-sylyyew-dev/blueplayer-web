import { useLang } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher'
import LibrariesMenu from './LibrariesMenu'
import Logo from './Logo'

export default function Header() {
    const { t } = useLang()
    return (
        <header className="header">
            <div className="container header-inner">
                <a className="logo" href="#top">
                    <Logo size={34} />
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