const base = import.meta.env.BASE_URL

export type ShotTheme = 'dark' | 'light'

const KEYS = ['now-playing', 'library', 'equalizer'] as const

export function screenshotsFor(theme: ShotTheme): string[] {
    return KEYS.map((k) => `${base}screenshots/${k}-${theme}.png`)
}