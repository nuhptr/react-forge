import { useEffect, useState } from "react"

/**
 * Demo fetch manual tanpa TanStack Query.
 *
 * @returns Todo saat ini dan tombol lanjut.
 */
export default function WithoutTanstackQuery() {
    const [id, setId] = useState(1)
    const [data, setData] = useState<{ title: string } | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let active = true
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((res) => res.json())
            .then((result) => active && setData(result))
            .finally(() => active && setLoading(false))
        return () => {
            active = false
        }
    }, [id])

    return (
        <section className="panel" aria-label="Without TanStack Query">
            <h3 className="text-lg font-semibold text-blue-400">Without TanStack Query</h3>
            <p>{loading ? "Memuat..." : data?.title}</p>
            <button type="button" className="btn" onClick={() => setId((v) => v + 1)}>
                Next
            </button>
        </section>
    )
}
