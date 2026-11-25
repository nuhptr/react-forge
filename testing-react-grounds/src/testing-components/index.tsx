import { useRef, useState } from "react"

import { LanguageList, UserStatus } from "./components"
import { bahasa, contohQuery, pengguna } from "./data"

/** Ringkasan hasil query terhadap DOM yang sebenarnya. */
interface Snapshot {
    status: string
    jumlahItem: number
    itemPertama: string
}

/**
 * Membaca hasil render dari container seperti Testing Library membaca screen.
 *
 * @param container - Elemen root hasil render.
 * @returns Ringkasan elemen yang berhasil ditemukan.
 */
const simulasikanQuery = (container: HTMLElement): Snapshot => ({
    status: container.querySelector('[role="status"]')?.textContent ?? "tidak ditemukan",
    jumlahItem: container.querySelectorAll("li").length,
    itemPertama: container.querySelector("li")?.textContent ?? "tidak ada",
})

/**
 * Demo Testing Components: render komponen dengan props lalu memeriksa hasilnya.
 *
 * @returns Panel dengan komponen yang dirender dan hasil query simulasi.
 */
export default function TestingComponents() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [snapshot, setSnapshot] = useState<Snapshot | null>(null)

    /** Menjalankan query simulasi terhadap container yang sedang dirender. */
    const periksaHasilRender = () => {
        if (containerRef.current) {
            setSnapshot(simulasikanQuery(containerRef.current))
        }
    }

    return (
        <section className="panel" aria-label="Testing Components">
            <h3 className="text-lg font-semibold text-blue-400">Testing Components</h3>
            <p className="text-sm text-slate-400">
                Komponen dirender dengan props; query membaca hasil render sebenarnya.
            </p>

            <div
                ref={containerRef}
                className="grid gap-3 rounded-lg border border-slate-700 bg-slate-900/60 p-3">
                <UserStatus {...pengguna} />
                <LanguageList items={bahasa} />
            </div>

            <button type="button" className="btn w-fit" onClick={periksaHasilRender}>
                Simulasikan query Testing Library
            </button>

            {snapshot && (
                <dl className="grid gap-1 text-sm" aria-live="polite">
                    <div className="rounded border border-slate-700 p-2">
                        <dt className="font-semibold text-blue-300">
                            getByRole(&quot;status&quot;)
                        </dt>
                        <dd className="text-slate-300">{snapshot.status}</dd>
                    </div>
                    <div className="rounded border border-slate-700 p-2">
                        <dt className="font-semibold text-blue-300">
                            getAllByRole(&quot;listitem&quot;)
                        </dt>
                        <dd className="text-slate-300">
                            {snapshot.jumlahItem} item · pertama: {snapshot.itemPertama}
                        </dd>
                    </div>
                </dl>
            )}

            <ul className="grid gap-1 text-xs text-slate-500">
                {contohQuery.map((item) => (
                    <li key={item.query}>
                        <code className="text-blue-300">{item.query}</code> → {item.hasil}
                    </li>
                ))}
            </ul>
        </section>
    )
}
