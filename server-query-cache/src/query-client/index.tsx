import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"

interface Todo {
    id: number
    title: string
    completed: boolean
}

const queryClient = new QueryClient()

/**
 * Ambil data todo dari DummyJSON.
 *
 * Single Responsibility: hanya mengambil data; UI ditangani komponen.
 */
const fetchTodos = async (): Promise<Todo[]> => {
    const response = await fetch("https://dummyjson.com/todos?limit=5")
    if (!response.ok) throw new Error("Gagal mengambil data")
    const data = (await response.json()) as { todos: Todo[] }
    return data.todos
}

/**
 * Daftar todo menggunakan useQuery.
 */
const TodoList = () => {
    const { data, isLoading, isError } = useQuery({ queryKey: ["todos"], queryFn: fetchTodos })

    if (isLoading) return <p className="text-slate-400">Memuat...</p>
    if (isError) return <p className="text-rose-400">Gagal memuat.</p>

    return (
        <ul className="grid gap-1">
            {data?.map((todo) => (
                <li key={todo.id} className="rounded border border-slate-700 p-2">
                    {todo.title}
                </li>
            ))}
        </ul>
    )
}

/**
 * Demo QueryClientProvider + useQuery.
 *
 * @returns Provider TanStack Query berisi daftar todo.
 */
export default function QueryClientDemo() {
    return (
        <section className="panel" aria-label="TanStack Query Client">
            <h3 className="text-lg font-semibold text-blue-400">QueryClient + useQuery</h3>
            <QueryClientProvider client={queryClient}>
                <TodoList />
            </QueryClientProvider>
        </section>
    )
}
