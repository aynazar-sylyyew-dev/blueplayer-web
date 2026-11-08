const base = import.meta.env.BASE_URL

export default function Logo({ size = 34 }: { size?: number }) {
    return (
        <img
            className="logo-mark"
            src={`${base}icon/icon-tab.png`}
            width={size}
            height={size}
            alt=""
        />
    )
}