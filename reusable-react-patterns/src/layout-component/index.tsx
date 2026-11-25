import { useState } from "react"

import { articles } from "./data"
import SplitScreen from "./split-screen"

/**
 * Memotong teks panjang menjadi ringkasan sidebar.
 *
 * @param teks - Teks sumber.
 * @param panjang - Jumlah maksimum karakter.
 * @returns Teks yang sudah dipotong dan diberi elipsis.
 */
const ringkas = (teks: string, panjang: number) =>
    teks.length > panjang ? `${teks.slice(0, panjang)}…` : teks

/**
 * Demo Layout Component: satu layout dipakai untuk konten yang berbeda.
 *
 * @returns SplitScreen berisi daftar artikel dan detail artikel aktif.
 */
export default function LayoutComponent() {
    const [activeId, setActiveId] = useState(articles[0].id)
    const active = articles.find((article) => article.id === activeId) ?? articles[0]

    return (
        <section className="panel" aria-label="Layout Component">
            <h3 className="text-lg font-semibold text-blue-400">Layout Component</h3>
            <SplitScreen
                sidebar={
                    <ul className="grid gap-2">
                        {articles.map((article) => (
                            <li key={article.id}>
                                <button
                                    type="button"
                                    aria-pressed={article.id === activeId}
                                    onClick={() => setActiveId(article.id)}
                                    className="w-full rounded-lg border border-slate-700 p-2 text-left transition hover:border-blue-500 aria-pressed:border-blue-500 aria-pressed:bg-blue-500/10">
                                    <strong className="block text-sm text-slate-100">
                                        {article.judul}
                                    </strong>
                                    <span className="block text-xs text-slate-400">
                                        {ringkas(article.ringkasan, 42)}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                }>
                <article className="grid gap-2">
                    <h4 className="text-lg font-semibold text-blue-300">{active.judul}</h4>
                    <p className="text-sm leading-relaxed text-slate-300">{active.isi}</p>
                </article>
            </SplitScreen>
        </section>
    )
}
