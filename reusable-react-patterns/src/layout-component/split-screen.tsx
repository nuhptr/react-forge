import type { ReactNode } from "react"

interface SplitScreenProps {
    sidebar: ReactNode
    children: ReactNode
}

/**
 * Layout dua kolom yang tidak mengetahui isi kontennya.
 *
 * Single Responsibility: hanya mengatur tata letak; konten disuntikkan lewat
 * props oleh komponen pemanggil.
 *
 * @param props - Sidebar dan konten utama.
 * @returns Kerangka dua kolom responsif.
 */
export default function SplitScreen({ sidebar, children }: SplitScreenProps) {
    return (
        <section
            aria-label="Contoh layout component"
            className="grid gap-4 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
            <aside className="rounded-xl border border-slate-700 bg-slate-900/60 p-3">
                {sidebar}
            </aside>
            <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4">{children}</div>
        </section>
    )
}
