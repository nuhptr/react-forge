interface CardProps {
    title?: string
    description?: string
}

/**
 * Komponen Card reusable.
 *
 * Single Responsibility: hanya menampilkan konten kartu; tidak mengambil data.
 *
 * @param props - Judul dan deskripsi kartu.
 * @returns Kartu library.
 */
export default function Card({ title, description }: CardProps) {
    return (
        <section className="panel" aria-label="Card library">
            <h3 className="text-lg font-semibold text-blue-400">Card Component</h3>
            <article className="rounded-xl border border-slate-700 bg-slate-900/50 p-4">
                <h4 className="font-semibold">{title}</h4>
                <p className="mt-1 text-sm text-slate-400">{description}</p>
            </article>
        </section>
    )
}
