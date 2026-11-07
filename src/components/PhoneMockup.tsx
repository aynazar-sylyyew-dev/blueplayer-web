import { useEffect, useState } from 'react'

const base = import.meta.env.BASE_URL

export const SCREENSHOTS = Array.from({ length: 3 }, (_, i) => `${base}screenshots/screen-${i + 1}.png`)

export default function PhoneMockup() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const id = setInterval(() => setIndex((i) => (i + 1) % SCREENSHOTS.length), 4000)
        return () => clearInterval(id)
    }, [])

    return (
        <div className="phone">
            <div className="phone-notch" />
            <div className="phone-screen">
                {SCREENSHOTS.map((src, i) => (
                    <img key={src} src={src} alt={`Screen ${i + 1}`} className={i === index ? 'active' : ''} />
                ))}
                <div className="phone-dots">
                    {SCREENSHOTS.map((_, i) => (
                        <button
                            key={i}
                            className={i === index ? 'dot active' : 'dot'}
                            onClick={() => setIndex(i)}
                            aria-label={`Screen ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}