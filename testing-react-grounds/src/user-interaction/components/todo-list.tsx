import { useState } from "react"

import { LABEL_INPUT } from "../config"

interface TodoListProps {
    awal: string[]
}

/**
 * Daftar tugas interaktif yang menjadi target test interaksi pengguna.
 *
 * @param props - Daftar tugas awal.
 * @returns Input, tombol tambah, dan daftar tugas.
 */
export default function TodoList({ awal }: TodoListProps) {
    const [items, setItems] = useState(awal)
    const [draft, setDraft] = useState("")

    /** Menambahkan draf ke daftar jika tidak kosong. */
    const tambahTodo = () => {
        const nilai = draft.trim()
        if (!nilai) return
        setItems((current) => [...current, nilai])
        setDraft("")
    }

    return (
        <div className="field">
            <label htmlFor="todo-baru">{LABEL_INPUT}</label>
            <div className="flex gap-2">
                <input
                    id="todo-baru"
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") tambahTodo()
                    }}
                    placeholder="Ketik tugas lalu Enter"
                />
                <button type="button" className="btn" onClick={tambahTodo}>
                    Tambah
                </button>
            </div>
            <ul aria-label="Daftar tugas" className="grid gap-1 text-sm text-slate-300">
                {items.map((item) => (
                    <li key={item} className="rounded border border-slate-700 px-2 py-1">
                        {item}
                    </li>
                ))}
            </ul>
            <p className="text-xs text-slate-500" aria-live="polite">
                {items.length} tugas · Gunakan input dan tombol di atas seperti userEvent.
            </p>
        </div>
    )
}
