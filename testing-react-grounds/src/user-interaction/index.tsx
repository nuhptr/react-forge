import TodoList from "./components/todo-list"
import { contohInteraksi, TODO_AWAL } from "./config"

/**
 * Demo User Interaction: komponen asli yang bisa diketik dan diklik.
 *
 * @returns Panel TodoList dan referensi kode userEvent.
 */
export default function UserInteraction() {
    return (
        <section className="panel" aria-label="User Interaction">
            <h3 className="text-lg font-semibold text-blue-400">User Interaction</h3>
            <p className="text-sm text-slate-400">
                Coba tambah tugas; test dengan userEvent melakukan hal yang sama.
            </p>
            <TodoList awal={TODO_AWAL} />
            <ul className="grid gap-1 text-xs">
                {contohInteraksi.map((item) => (
                    <li key={item.aksi} className="rounded border border-slate-700 p-2">
                        <strong className="text-slate-300">{item.aksi}: </strong>
                        <code className="break-all text-blue-300">{item.kode}</code>
                    </li>
                ))}
            </ul>
        </section>
    )
}
