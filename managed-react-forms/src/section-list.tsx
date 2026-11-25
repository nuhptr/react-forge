import type { Demo } from "./demos"

interface SectionListProps {
    demos: Demo[]
    activeId: string
    onSelect: (id: string) => void
}

/**
 * UI pemilih modul: dropdown + kartu.
 *
 * @param props - Daftar modul, id aktif, dan callback pemilihan.
 * @returns Kontrol pemilih modul.
 */
export default function SectionList({ demos, activeId, onSelect }: SectionListProps) {
    return (
        <section aria-labelledby="picker" className="grid gap-3">
            <h2 id="picker" className="text-lg font-semibold text-slate-900">
                Pilih Modul
            </h2>
            <label className="grid gap-1" htmlFor="module-select">
                <span className="text-sm font-semibold text-slate-500">Modul aktif</span>
                <select
                    id="module-select"
                    value={activeId}
                    onChange={(event) => onSelect(event.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-blue-500 focus:outline-none">
                    {demos.map((demo) => (
                        <option key={demo.id} value={demo.id}>
                            {demo.title}
                        </option>
                    ))}
                </select>
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
                {demos.map((demo) => (
                    <button
                        key={demo.id}
                        type="button"
                        aria-pressed={demo.id === activeId}
                        data-active={demo.id === activeId}
                        onClick={() => onSelect(demo.id)}
                        className="demo-card">
                        <h3>{demo.title}</h3>
                        <p>{demo.description}</p>
                    </button>
                ))}
            </div>
        </section>
    )
}
