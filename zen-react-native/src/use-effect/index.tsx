import { useEffect, useState } from "react"

/**
 * Demo useEffect: timer yang dibersihkan saat unmount.
 *
 * Single Responsibility: efek samping dipisahkan dari tampilan.
 *
 * @returns Hitungan detik berjalan.
 */
export default function UseEffect() {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const id = window.setInterval(() => setSeconds((s) => s + 1), 1000)
        return () => window.clearInterval(id)
    }, [])

    return (
        <section className="panel" aria-label="useEffect demo">
            <h3 className="text-lg font-semibold text-blue-400">useEffect</h3>
            <p className="tabular-nums text-2xl" aria-live="polite">{seconds} detik</p>
        </section>
    )
}
