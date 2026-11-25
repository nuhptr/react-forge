import { use } from "react"

interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

/**
 * Fungsi yang mengembalikan Promise data todo.
 *
 * Single Responsibility: hanya menangani pengambilan data mentah;
 * pengelolaan Suspense ditanggalkan ke komponen pemanggil.
 */
const fetchTodo = async (): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    if (!res.ok) {
        throw new Error(`Gagal mengambil data: ${res.statusText}`)
    }
    return res.json()
}

/**
 * Komponen data fetching menggunakan React 19 `use()` dengan Suspense.
 *
 * Dependency Inversion: tidak mengelola loading/error sendiri;
 * status penanganan ditangani oleh batas Suspense di luar komponen.
 */
export const TodoFetchReactNineteen = () => {
    const data: Todo = use(fetchTodo())

    return (
        <section className="fetch-card" aria-labelledby="todo-nineteen-title">
            <h3 id="todo-nineteen-title">Todo (React 19 use())</h3>
            <div>
                <h4>{data.title}</h4>
                <p>Status: {data.completed ? "Selesai" : "Belum selesai"}</p>
            </div>
        </section>
    )
}
