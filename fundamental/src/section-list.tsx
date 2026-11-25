import type { Demo } from "./demos"

interface SectionListProps {
    demos: Demo[]
    activeId: string
    onSelect: (id: string) => void
}

/**
 * UI pemilih topik: dropdown + kartu.
 *
 * Single Responsibility: hanya menangani pemilihan topik; tidak mengetahui
 * isi materi yang dipilih.
 *
 * @param props - Daftar topik, id aktif, dan callback pemilihan.
 * @returns Kontrol pemilih topik.
 */
export default function SectionList({ demos, activeId, onSelect }: SectionListProps) {
    return (
        <section aria-labelledby="picker" className="grid gap-3">
            <h2 id="picker" className="text-lg font-semibold text-slate-200">
                Pilih Topik
            </h2>

            <label className="grid gap-1" htmlFor="module-select">
                <span className="text-sm font-semibold text-slate-400">Topik aktif</span>
                <select
                    id="module-select"
                    value={activeId}
                    onChange={(event) => onSelect(event.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-none">
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
