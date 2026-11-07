import { I18nProvider } from './i18n'
import { ThemeProvider } from './theme'
import Header from './components/Header'
import Hero from './components/Hero'
import Screenshots from './components/Screenshots'
import Footer from './components/Footer'
import RevealOnScroll from './components/RevealOnScroll'

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <RevealOnScroll />
        <Header />
        <main>
          <Hero />
          <Screenshots />
        </main>
        <Footer />
      </I18nProvider>
    </ThemeProvider>
  )
}