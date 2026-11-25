import { useQuery } from "@tanstack/react-query"

const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
    if (!res.ok) throw new Error("Gagal memuat")
    return res.json()
}

/**
 * Demo staleTime: data tidak refetch dalam jendelatertentu.
 *
 * @returns Daftar todo dengan status freshness.
 */
export default function StaleTime() {
    const query = useQuery({ queryKey: ["todos-stale"], queryFn: fetchTodos, staleTime: 50000 })

    return (
        <section className="panel" aria-label="Stale time">
            <h3 className="text-lg font-semibold text-blue-400">Stale Time</h3>
            <p>
                Status: {query.isStale ? "stale" : "fresh"} · {query.data?.length ?? 0} todo
            </p>
        </section>
    )
}
