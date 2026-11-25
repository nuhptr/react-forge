import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

const fetchPage = async (page: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=3`)
    if (!res.ok) throw new Error("Gagal memuat halaman")
    return res.json()
}

/**
 * Demo pagination dengan queryKey yang berubah.
 *
 * @returns Halaman.post dan kontrol halaman.
 */
export default function Pagination() {
    const [page, setPage] = useState(1)
    const query = useQuery({ queryKey: ["posts", page], queryFn: () => fetchPage(page) })

    return (
        <section className="panel" aria-label="Pagination">
            <h3 className="text-lg font-semibold text-blue-400">Pagination</h3>
            <p>
                Halaman {page}: {query.data?.length ?? 0} post
            </p>
            <div className="flex gap-2">
                <button
                    type="button"
                    className="btn"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}>
                    Prev
                </button>
                <button type="button" className="btn" onClick={() => setPage((p) => p + 1)}>
                    Next
                </button>
            </div>
        </section>
    )
}
