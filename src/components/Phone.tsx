import type { ReactNode } from 'react'

export default function Phone({ children }: { children: ReactNode }) {
    return (
        <div className="phone">
            <div className="phone-screen">
                <div className="phone-content">{children}</div>
                <div className="phone-island" />
                <div className="phone-status">
                    <span className="phone-time">9:41</span>
                    <span className="phone-icons">
                        <svg width="17" height="11" viewBox="0 0 17 11" aria-hidden="true">
                            <rect x="0" y="7" width="3" height="4" rx="1" />
                            <rect x="4.5" y="5" width="3" height="6" rx="1" />
                            <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
                            <rect x="13.5" y="0" width="3" height="11" rx="1" />
                        </svg>
                        <svg width="16" height="12" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 21l3.5-4.5c-.97-.79-2.21-1.25-3.5-1.25s-2.53.46-3.5 1.25L12 21zM12 3C7.95 3 4.21 4.34 1.2 6.6L3 9c2.5-1.87 5.62-3 9-3s6.5 1.13 9 3l1.8-2.4C19.79 4.34 16.05 3 12 3zm0 6c-2.7 0-5.19.93-7.2 2.5L6.6 14c1.5-1.12 3.37-1.8 5.4-1.8s3.9.68 5.4 1.8l1.8-2.5C17.19 9.93 14.7 9 12 9z" />
                        </svg>
                        <svg width="23" height="11" viewBox="0 0 25 12" aria-hidden="true">
                            <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" fill="none" stroke="rgba(255,255,255,0.45)" />
                            <rect x="2.2" y="2.2" width="17.6" height="7.6" rx="2" />
                            <path d="M23.5 4v4a2.2 2.2 0 0 0 0-4Z" fill="rgba(255,255,255,0.45)" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}