import { useQuery } from "@tanstack/react-query"

const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
    if (!res.ok) throw new Error("Gagal mengambil todo")
    return res.json()
}
const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=3")
    if (!res.ok) throw new Error("Gagal mengambil user")
    return res.json()
}

/**
 * Demo dua query independen.
 *
 * @returns Daftar todo dan user dari dua endpoint.
 */
export default function FetchFromMultipleEndpoints() {
    const todos = useQuery({ queryKey: ["todos"], queryFn: fetchTodos })
    const users = useQuery({ queryKey: ["users"], queryFn: fetchUsers })

    return (
        <section className="panel" aria-label="Multiple endpoints">
            <h3 className="text-lg font-semibold text-blue-400">Multiple Endpoints</h3>
            <p>
                Todo: {todos.data?.length ?? 0} · User: {users.data?.length ?? 0}
            </p>
        </section>
    )
}
