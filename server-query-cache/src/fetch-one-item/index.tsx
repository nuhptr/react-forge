import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

const fetchTodo = async (id: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if (!res.ok) throw new Error("Todo tidak ditemukan")
    return res.json()
}

/**
 * Demo query dinamis dengan queryKey bergantung state.
 *
 * @returns Satu todo berdasarkan ID.
 */
export default function FetchOneItem() {
    const [id, setId] = useState(1)
    const query = useQuery({ queryKey: ["todo", id], queryFn: () => fetchTodo(id) })

    return (
        <section className="panel" aria-label="Fetch one item">
            <h3 className="text-lg font-semibold text-blue-400">Fetch One Item</h3>
            <button type="button" className="btn" onClick={() => setId((v) => v + 1)}>
                Todo berikutnya (#{id})
            </button>
            <p>{query.isLoading ? "Memuat..." : query.data?.title}</p>
        </section>
    )
}
