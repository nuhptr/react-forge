import { useQuery } from "@tanstack/react-query"

const fetchTodo = async (id: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if (!res.ok) throw new Error("Gagal memuat")
    return res.json()
}

/**
 * Demo fetch dengan TanStack Query.
 *
 * @returns Todo saat ini dan tombol lanjut.
 */
export default function WithTanstackQuery() {
    const [id] = [1]
    const query = useQuery({ queryKey: ["compare-todo", id], queryFn: () => fetchTodo(id) })

    return (
        <section className="panel" aria-label="With TanStack Query">
            <h3 className="text-lg font-semibold text-blue-400">With TanStack Query</h3>
            <p>{query.isLoading ? "Memuat..." : query.data?.title}</p>
        </section>
    )
}
