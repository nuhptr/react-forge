import { useState } from "react"

/** Tombol satu nomor halaman. */
const PageButton = ({
    page,
    active,
    onSelect,
}: {
    page: number
    active: boolean
    onSelect: (page: number) => void
}) => (
    <button
        type="button"
        aria-current={active ? "page" : undefined}
        onClick={() => onSelect(page)}
        className={`rounded-lg px-3 py-1 ${active ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-200"}`}>
        {page}
    </button>
)

/**
 * Demo Pagination.
 *
 * @returns Kontrol halaman 1-5.
 */
export default function Pagination() {
    const [page, setPage] = useState(1)
    return (
        <section className="panel" aria-label="Pagination">
            <h3 className="text-lg font-semibold text-blue-400">Pagination</h3>
            <div className="flex flex-wrap gap-2">
                <button
                    type="button"
                    className="btn"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}>
                    Prev
                </button>
                {[1, 2, 3, 4, 5].map((p) => (
                    <PageButton key={p} page={p} active={p === page} onSelect={setPage} />
                ))}
                <button
                    type="button"
                    className="btn"
                    onClick={() => setPage((p) => Math.min(5, p + 1))}>
                    Next
                </button>
            </div>
            <p className="text-sm text-slate-400">Halaman aktif: {page}</p>
        </section>
    )
}
