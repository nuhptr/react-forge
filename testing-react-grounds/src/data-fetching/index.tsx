import { useEffect, useState } from "react"

import { fetchTodos, type Todo } from "./api"
import { contohTest, handlerMsw } from "./config"

/** Status permintaan data. */
type Status = "idle" | "loading" | "success"

/**
 * Merender daftar todo hasil fetch beserta statusnya.
 *
 * @returns Daftar todo dengan status loading dan checkbox.
 */
function TodoPreview() {
    const [status, setStatus] = useState<Status>("idle")
    const [todos, setTodos] = useState<Todo[]>([])
    const [percobaan, setPercobaan] = useState(0)

    useEffect(() => {
        let aktif = true
        setStatus("loading")
        fetchTodos().then((data) => {
            if (!aktif) return
            setTodos(data)
            setStatus("success")
        })
        return () => {
            aktif = false
        }
    }, [percobaan])

    return (
        <div className="grid gap-2">
            <button
                type="button"
                className="btn w-fit"
                onClick={() => setPercobaan((current) => current + 1)}>
                Muat ulang todos
            </button>
            <p className="text-sm text-slate-400" role="status" aria-live="polite">
                {status === "loading" ? "Memuat todos..." : `${todos.length} todos diterima`}
            </p>
            {status === "success" && (
                <ul aria-label="Daftar todos" className="grid gap-1 text-sm text-slate-300">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex items-center gap-2 rounded border border-slate-700 px-2 py-1">
                            <input type="checkbox" defaultChecked={todo.completed} readOnly />
                            <span>{todo.title}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

/**
 * Demo Data Fetching: komponen menunggu Promise, lalu menampilkan hasilnya.
 *
 * @returns Panel TodoPreview dan contoh test async serta handler MSW.
 */
export default function DataFetching() {
    return (
        <section className="panel" aria-label="Data Fetching">
            <h3 className="text-lg font-semibold text-blue-400">Data Fetching</h3>
            <p className="text-sm text-slate-400">
                Test menunggu teks hasil fetch dengan findBy, bukan getBy.
            </p>
            <TodoPreview />
            <ul className="grid gap-1 text-xs">
                {contohTest.map((kode) => (
                    <li key={kode} className="rounded border border-slate-700 p-2">
                        <code className="break-all text-blue-300">{kode}</code>
                    </li>
                ))}
            </ul>
            <p className="text-xs text-slate-500">
                Mock server: <code className="text-blue-300">{handlerMsw}</code>
            </p>
        </section>
    )
}
