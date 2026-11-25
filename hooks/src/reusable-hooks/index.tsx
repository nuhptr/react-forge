import { useFetch } from "./hooks/use-fetch"

/**
 * Struktur item todo dari JSONPlaceholder.
 */
interface TodoRecord {
    id: number
    title: string
    completed: boolean
}

const TODOS_ENDPOINT = "https://jsonplaceholder.typicode.com/todos?_limit=6"

/**
 * Mendemonstrasikan pemakaian custom hook generik {@link useFetch} untuk memisahkan
 * logika pengambilan data dari komponen tampilan.
 *
 * @returns Halaman daftar tugas hasil pemanggilan `useFetch`.
 */
const ReusableHooks = () => {
    const { data: todos, isLoading, errorMessage } = useFetch<TodoRecord[]>(TODOS_ENDPOINT)

    return (
        <main>
            <h1>Reusable Hooks (useFetch)</h1>
            <div className="card">
                {isLoading && <p role="status">Memuat daftar todo...</p>}
                {errorMessage && <p role="alert">{errorMessage}</p>}
                {todos && (
                    <ul>
                        {todos.map((todo) => (
                            <li key={todo.id}>
                                {todo.title} {todo.completed ? "(Selesai)" : "(Belum)"}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    )
}

export default ReusableHooks
