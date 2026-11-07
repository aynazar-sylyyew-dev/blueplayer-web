import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type LangCode = 'en' | 'ru' | 'tr' | 'kk' | 'uz' | 'ky' | 'tg'

export const LANGS: { code: LangCode; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' },
    { code: 'tr', label: 'Türkçe' },
    { code: 'kk', label: 'Қазақша' },
    { code: 'uz', label: "O'zbekcha" },
    { code: 'ky', label: 'Кыргызча' },
    { code: 'tg', label: 'Тоҷикӣ' },
]

interface Dict {
    meta: { title: string; description: string }
    features: string
    librariesMenu: { title: string }
    hero: { title: string; subtitle: string }
    showcase: { title: string; text: string }[]
    footer: {
        description: string
        product: string
        legal: string
        privacy: string
        feedback: string
        terms: string
        disclaimer: string
        language: string
        copyright: string
        theme: { system: string; light: string; dark: string }
        credits: {
            bass: string
            bassfx: string
            waveform: string
            echo: string
            taglib: string
            taglib_android: string
            itunes: string
            deezer: string
            musicbrainz: string
            lastfm: string
            wikipedia: string
        }
    }
}

const dictionaries: Record<LangCode, Dict> = {
    en: {
        meta: {
            title: 'Blue Player — free music player',
            description: 'Blue Player — a free music player: listen to your favorite tracks with no ads and no subscriptions.',
        },
        features: 'Features',
        hero: {
            title: 'Blue Player — your music player',
            subtitle: 'Listen to your favorite tracks offline and online. Fast, lightweight and completely free — no ads, no subscriptions.',
        },
        showcase: [
            { title: 'Now playing', text: 'Album art, waveform and playback controls — everything you need at a glance.' },
            { title: 'Track library', text: 'Your whole library with search, favorites and quick access to recent tracks.' },
            { title: 'Equalizer', text: 'Fine-tune the sound: balance, preamp and a custom equalizer with presets.' },
        ],
        footer: {
            description: 'A free music player for your favorite tracks.',
            product: 'Product',
            legal: 'Legal',
            privacy: 'Privacy Policy',
            feedback: 'Feedback',
            language: 'Language',
            copyright: '© 2026 Blue Player. All rights reserved.',
            theme: { system: 'System theme', light: 'Light theme', dark: 'Dark theme' },
            credits: {
                bass: 'BASS © Un4seen',
                bassfx: 'BASS FX © J0Bnik',
                waveform: 'Waveform Extractor © Aýnazar Sylyýew',
                echo: 'ECHO © Aýnazar Sylyýew',
                taglib: 'TagLib © Scott Wheeler',
                taglib_android: 'TagLib Android © Kyant0',
                itunes: 'iTunes API',
                deezer: 'Deezer API',
                musicbrainz: 'MusicBrainz',
                lastfm: 'Last.fm',
                wikipedia: 'Wikipedia',
            },
            terms: 'Terms of Service',
            disclaimer: 'Disclaimer & DMCA',
        },
        librariesMenu: { title: 'Used Libraries' },
    },
    ru: {
        meta: {
            title: 'Blue Player — бесплатный музыкальный плеер',
            description: 'Blue Player — бесплатный музыкальный плеер: слушай любимые треки без рекламы и подписок.',
        },
        features: 'Возможности',
        hero: {
            title: 'Blue Player — твой музыкальный плеер',
            subtitle: 'Слушай любимые треки офлайн и онлайн. Быстрый, лёгкий и полностью бесплатный — без рекламы и подписок.',
        },
        showcase: [
            { title: 'Сейчас играет', text: 'Обложка альбома, волна и управление воспроизведением — всё нужное на одном экране.' },
            { title: 'Библиотека треков', text: 'Вся твоя библиотека с поиском, избранным и быстрым доступом к недавним трекам.' },
            { title: 'Эквалайзер', text: 'Тонкая настройка звука: баланс, предусилитель и кастомный эквалайзер с пресетами.' },
        ],
        footer: {
            description: 'Бесплатный музыкальный плеер для любимых треков.',
            product: 'Продукт',
            legal: 'Документы',
            feedback: 'Обратная связь',
            privacy: 'Политика конфиденциальности',
            language: 'Язык',
            copyright: '© 2026 Blue Player. Все права защищены.',
            theme: { system: 'Системная тема', light: 'Светлая тема', dark: 'Тёмная тема' },
            credits: {
                bass: 'BASS © Un4seen',
                bassfx: 'BASS FX © J0Bnik',
                waveform: 'Waveform Extractor © Aýnazar Sylyýew',
                echo: 'ECHO © Aýnazar Sylyýew',
                taglib: 'TagLib © Scott Wheeler',
                taglib_android: 'TagLib Android © Kyant0',
                itunes: 'iTunes API',
                deezer: 'Deezer API',
                musicbrainz: 'MusicBrainz',
                lastfm: 'Last.fm',
                wikipedia: 'Wikipedia',
            },
            terms: 'Условия использования',
            disclaimer: 'Отказ от ответственности',
        },
        librariesMenu: { title: 'Используемые библиотеки' },
    },
    tr: {
        meta: {
            title: 'Blue Player — ücretsiz müzik oynatıcı',
            description: 'Blue Player — ücretsiz müzik oynatıcı: favori parçalarınızı reklamsız ve aboneliksiz dinleyin.',
        },
        features: 'Özellikler',
        hero: {
            title: 'Blue Player — sizin müzik oynatıcınız',
            subtitle: 'Favori parçalarınızı çevrim dışı ve çevrim içi dinleyin. Hızlı, hafif ve tamamen ücretsiz — reklamsız, aboneliksiz.',
        },
        showcase: [
            { title: 'Şimdi çalıyor', text: 'Albüm kapağı, dalga formu ve oynatma kontrolleri — ihtiyacın olan her şey tek ekranda.' },
            { title: 'Parça kitaplığı', text: 'Arama, favoriler ve son parçalara hızlı erişimle tüm kitaplığın.' },
            { title: 'Ekolayzer', text: 'Sesi ince ayarla: denge, preamp ve ön ayarlı özel ekolayzer.' },
        ],
        footer: {
            description: 'Favori parçalarınız için ücretsiz müzik oynatıcı.',
            product: 'Ürün',
            legal: 'Yasal',
            privacy: 'Gizlilik Politikası',
            feedback: 'Geri bildirim',
            language: 'Dil',
            copyright: '© 2026 Blue Player. Tüm hakları saklıdır.',
            theme: { system: 'Sistem teması', light: 'Açık tema', dark: 'Koyu tema' },
            credits: {
                bass: 'BASS © Un4seen',
                bassfx: 'BASS FX © J0Bnik',
                waveform: 'Waveform Extractor © Aýnazar Sylyýew',
                echo: 'ECHO © Aýnazar Sylyýew',
                taglib: 'TagLib © Scott Wheeler',
                taglib_android: 'TagLib Android © Kyant0',
                itunes: 'iTunes API',
                deezer: 'Deezer API',
                musicbrainz: 'MusicBrainz',
                lastfm: 'Last.fm',
                wikipedia: 'Wikipedia',
            },
            terms: 'Kullanım Koşulları',
            disclaimer: 'Sorumluluk Reddi',
        },
        librariesMenu: { title: 'Kullanılan Kütüphaneler' },
    },
    kk: {
        meta: {
            title: 'Blue Player — тегін музыкалық плеер',
            description: 'Blue Player — тегін музыкалық плеер: сүйікті тректеріңді жарнамасыз және жазылымсыз тыңда.',
        },
        features: 'Мүмкіндіктер',
        hero: {
            title: 'Blue Player — сенің музыкалық плеерің',
            subtitle: 'Сүйікті тректеріңді офлайн және онлайн тыңда. Жылдам, жеңіл және толығымен тегін — жарнамасыз, жазылымсыз.',
        },
        showcase: [
            { title: 'Қазір ойнатылуда', text: 'Альбом мұқабасы, толқын және ойнатуды басқару — бәрі бір экранда.' },
            { title: 'Тректар кітапханасы', text: 'Іздеу, таңдаулылар және соңғы тректерге жылдам қолжетімділікпен бүкіл кітапханаң.' },
            { title: 'Эквалайзер', text: 'Дыбысты нәзік ретте: баланс, алдын күшейткіш және пресеттері бар эквалайзер.' },
        ],
        footer: {
            description: 'Сүйікті тректерге арналған тегін музыкалық плеер.',
            product: 'Өнім',
            legal: 'Құқықтық',
            privacy: 'Құпиялылық саясаты',
            feedback: 'Кері байланыс',
            language: 'Тіл',
            copyright: '© 2026 Blue Player. Барлық құқықтар қорғалған.',
            theme: { system: 'Жүйелік тема', light: 'Ашық тема', dark: 'Қараңғы тема' },
            credits: {
                bass: 'BASS © Un4seen',
                bassfx: 'BASS FX © J0Bnik',
                waveform: 'Waveform Extractor © Aýnazar Sylyýew',
                echo: 'ECHO © Aýnazar Sylyýew',
                taglib: 'TagLib © Scott Wheeler',
                taglib_android: 'TagLib Android © Kyant0',
                itunes: 'iTunes API',
                deezer: 'Deezer API',
                musicbrainz: 'MusicBrainz',
                lastfm: 'Last.fm',
                wikipedia: 'Wikipedia',
            },
            terms: 'Пайдалану шарттары',
            disclaimer: 'Жауапкершіліктен бас тарту',
        },
        librariesMenu: { title: 'Қолданылатын кітапханалар' },
    },
    uz: {
        meta: {
            title: 'Blue Player — bepul musiqiy pleyer',
            description: 'Blue Player — bepul musiqiy pleyer: sevimli treklaringizni reklamasiz va obunasiz tinglang.',
        },
        features: 'Imkoniyatlar',
        hero: {
            title: 'Blue Player — sizning musiqiy pleyeringiz',
            subtitle: "Sevimli treklaringizni oflayn va onlayn tinglang. Tez, yengil va butunlay bepul — reklamasiz, obunasiz.",
        },
        showcase: [
            { title: 'Hozir ijro etilmoqda', text: "Albom muqovasi, to'lqin va ijro bosharuvi — barchasi bir ekranda." },
            { title: 'Treklar kutubxonasi', text: "Qidiruv, sevimlilar va so'nggi treklarga tez kirish bilan butun kutubxonangiz." },
            { title: 'Ekvalayzer', text: 'Tovushni nozik sozlang: balans, preamp va presetli maxsus ekvalayzer.' },
        ],
        footer: {
            description: 'Sevimli treklar uchun bepul musiqiy pleyer.',
            product: 'Mahsulot',
            legal: 'Huquqiy',
            privacy: 'Maxfiylik siyosati',
            feedback: "Fikr-mulohaza",
            language: 'Til',
            copyright: '© 2026 Blue Player. Barcha huquqlar himoyalangan.',
            theme: { system: 'Tizim mavzusi', light: "Yorug' mavzu", dark: 'Tunggi mavzu' },
            credits: {
                bass: 'BASS © Un4seen',
                bassfx: 'BASS FX © J0Bnik',
                waveform: 'Waveform Extractor © Aýnazar Sylyýew',
                echo: 'ECHO © Aýnazar Sylyýew',
                taglib: 'TagLib © Scott Wheeler',
                taglib_android: 'TagLib Android © Kyant0',
                itunes: 'iTunes API',
                deezer: 'Deezer API',
                musicbrainz: 'MusicBrainz',
                lastfm: 'Last.fm',
                wikipedia: 'Wikipedia',
            },
            terms: "Foydalanish shartlari",
            disclaimer: "Mas'uliyatdan voz kechish",
        },
        librariesMenu: { title: "Ishlatilgan kutubxonalar" },
    },
    ky: {
        meta: {
            title: 'Blue Player — акысыз музыкалык плеер',
            description: 'Blue Player — акысыз музыкалык плеер: сүйүктүү тректериңди жарнамасыз жана жазылуусуз ук.',
        },
        features: 'Мүмкүнчүлүктөр',
        hero: {
            title: 'Blue Player — сенин музыкалык плеериң',
            subtitle: 'Сүйүктүү тректериңди офлайн жана онлайн ук. Тез, жеңил жана толугу менен акысыз — жарнамасыз, жазылуусуз.',
        },
        showcase: [
            { title: 'Азыр ойнотулууда', text: 'Альбом мукабасы, толкун жана ойнотуону башкаруу — баары бир экранда.' },
            { title: 'Тректер китепканасы', text: 'Издөө, тандалмалар жана акыркы тректерге тез кирүү менен бүт китепканаң.' },
            { title: 'Эквалайзер', text: 'Үндү назик жөндө: баланс, алдын күчөткүч жана пресеттүү эквалайзер.' },
        ],
        footer: {
            description: 'Сүйүктүү тректер үчүн акысыз музыкалык плеер.',
            product: 'Продукт',
            legal: 'Укуктук',
            privacy: 'Купуялык саясаты',
            feedback: 'Кайтарым байланыш',
            language: 'Тил',
            copyright: '© 2026 Blue Player. Бардык укуктар корголгон.',
            theme: { system: 'Системалык тема', light: 'Ачык тема', dark: 'Караңгы тема' },
            credits: {
                bass: 'BASS © Un4seen',
                bassfx: 'BASS FX © J0Bnik',
                waveform: 'Waveform Extractor © Aýnazar Sylyýew',
                echo: 'ECHO © Aýnazar Sylyýew',
                taglib: 'TagLib © Scott Wheeler',
                taglib_android: 'TagLib Android © Kyant0',
                itunes: 'iTunes API',
                deezer: 'Deezer API',
                musicbrainz: 'MusicBrainz',
                lastfm: 'Last.fm',
                wikipedia: 'Wikipedia',
            },
            terms: 'Колдонуу шарттары',
            disclaimer: 'Жоопкерчиликтен баш тартуу',
        },
        librariesMenu: { title: 'Колдонулган китепканалар' },
    },
    tg: {
        meta: {
            title: 'Blue Player — плеери мусиқии ройгон',
            description: 'Blue Player — плеери мусиқии ройгон: трекҳои дӯстдоштаатонро бе реклама ва бе обуна гӯш кунед.',
        },
        features: 'Имконот',
        hero: {
            title: 'Blue Player — плеери мусиқии шумо',
            subtitle: 'Трекҳои дӯстдоштаатонро офлайн ва онлайн гӯш кунед. Тез, сабук ва комилан ройгон — бе реклама ва бе обуна.',
        },
        showcase: [
            { title: 'Ҳоло пахш мешавад', text: 'Муқоваи албом, мавҷ ва идораи пахш — ҳама чиз дар як экран.' },
            { title: 'Китобхонаи трекҳо', text: 'Тамоми китобхонаатон бо ҷустуҷӯ, дӯстдоштаҳо ва дастрасии тез ба трекҳои охирин.' },
            { title: 'Эквалайзер', text: 'Садоро нозук танзим кунед: баланс, преамп ва эквалайзери фармоишӣ бо пресетҳо.' },
        ],
        footer: {
            description: 'Плеери мусиқии ройгон барои трекҳои дӯстдошта.',
            product: 'Маҳсулот',
            legal: 'Ҳуқуқӣ',
            privacy: 'Сиёсати махфият',
            feedback: 'Алоқаи баръакс',
            language: 'Забон',
            copyright: '© 2026 Blue Player. Ҳамаи ҳуқуқ ҳифз шудааст.',
            theme: { system: 'Мавзӯи системавӣ', light: 'Мавзӯи равшан', dark: 'Мавзӯи торик' },
            credits: {
                bass: 'BASS © Un4seen',
                bassfx: 'BASS FX © J0Bnik',
                waveform: 'Waveform Extractor © Aýnazar Sylyýew',
                echo: 'ECHO © Aýnazar Sylyýew',
                taglib: 'TagLib © Scott Wheeler',
                taglib_android: 'TagLib Android © Kyant0',
                itunes: 'iTunes API',
                deezer: 'Deezer API',
                musicbrainz: 'MusicBrainz',
                lastfm: 'Last.fm',
                wikipedia: 'Wikipedia',
            },
            terms: 'Шартҳои истифода',
            disclaimer: 'Радди масъулият',
        },
        librariesMenu: { title: 'Китобхонаҳои истифодашуда' },

    },
}

const I18nContext = createContext<{ t: Dict; lang: LangCode; setLang: (l: LangCode) => void } | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<LangCode>(() => (localStorage.getItem('lang') as LangCode) || 'ru')

    useEffect(() => {
        localStorage.setItem('lang', lang)
        document.documentElement.lang = lang
        const meta = dictionaries[lang].meta
        document.title = meta.title
        document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
    }, [lang])

    return <I18nContext.Provider value={{ t: dictionaries[lang], lang, setLang }}>{children}</I18nContext.Provider>
}

export function useLang() {
    const ctx = useContext(I18nContext)
    if (!ctx) throw new Error('useLang must be used within I18nProvider')
    return ctx
}