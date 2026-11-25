import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

const fetchTodo = async (id: number) => {
    await new Promise((resolve) => setTimeout(resolve, id === 1 ? 800 : 50))
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return res.json()
}

/**
 * Demo race condition: queryKey unik per ID memisahkan cache.
 *
 * @returns Dua query dengan kecepatan berbeda.
 */
export default function RaceCondition() {
    const [id, setId] = useState(1)
    const query = useQuery({ queryKey: ["todo", id], queryFn: () => fetchTodo(id) })

    return (
        <section className="panel" aria-label="Race condition">
            <h3 className="text-lg font-semibold text-blue-400">Race Condition</h3>
            <button type="button" className="btn" onClick={() => setId((v) => (v === 1 ? 2 : 1))}>
                Ganti ID (sekarang {id})
            </button>
            <p>{query.isFetching ? "Memuat..." : query.data?.title}</p>
        </section>
    )
}
