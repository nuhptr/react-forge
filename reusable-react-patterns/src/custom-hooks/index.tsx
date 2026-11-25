import { LANGKAH, STORAGE_KEY } from "./config"
import { useLocalStorage } from "./hooks/use-local-storage"
import { useToggle } from "./hooks/use-toggle"

/**
 * Mengubah status boolean menjadi label yang ramah dibaca.
 *
 * @param aktif - Status saat ini.
 * @returns Label status.
 */
const labelStatus = (aktif: boolean) => (aktif ? "Aktif" : "Nonaktif")

/**
 * Demo Custom Hooks: logika state diekstrak ke hook yang dapat dipakai ulang.
 *
 * @returns Panel dengan toggle dan penghitung yang persisten di localStorage.
 */
export default function CustomHooks() {
    const { value: aktif, toggle } = useToggle(true)
    const [count, setCount] = useLocalStorage(STORAGE_KEY, 0)

    return (
        <section className="panel" aria-label="Custom Hooks">
            <h3 className="text-lg font-semibold text-blue-400">Custom Hooks</h3>
            <p className="text-sm text-slate-400">
                useToggle dan useLocalStorage menyimpan logika state di luar tampilan.
            </p>

            <div className="flex flex-wrap items-center gap-3">
                <button type="button" className="btn" aria-pressed={aktif} onClick={toggle}>
                    Status: {labelStatus(aktif)}
                </button>
                <span className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-200">
                    Count: <strong className="text-blue-300">{count}</strong>
                </span>
            </div>

            <div className="flex flex-wrap gap-2">
                {LANGKAH.map((langkah) => (
                    <button
                        key={langkah}
                        type="button"
                        onClick={() => setCount((current) => current + langkah)}
                        className="rounded-lg border border-slate-700 px-3 py-1 text-sm text-slate-200 transition hover:border-blue-500">
                        +{langkah}
                    </button>
                ))}
                <button
                    type="button"
                    onClick={() => setCount(0)}
                    className="rounded-lg border border-slate-700 px-3 py-1 text-sm text-slate-400 transition hover:border-blue-500">
                    Reset
                </button>
            </div>

            <p className="text-xs text-slate-500">Tersimpan di localStorage: {STORAGE_KEY}</p>
        </section>
    )
}
