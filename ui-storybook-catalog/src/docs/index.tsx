import { contohParameter, propDocs } from "./config"

/**
 * Tabel dokumentasi props hasil argTypes Storybook.
 *
 * @returns Tabel nama, tipe, nilai default, dan deskripsi.
 */
const PropTable = () => (
    <div className="overflow-x-auto rounded-lg border border-slate-700">
        <table className="w-full text-left text-sm">
            <thead className="text-slate-400">
                <tr>
                    <th className="px-2 py-1">Prop</th>
                    <th className="px-2 py-1">Tipe</th>
                    <th className="px-2 py-1">Default</th>
                    <th className="px-2 py-1">Deskripsi</th>
                </tr>
            </thead>
            <tbody>
                {propDocs.map((doc) => (
                    <tr key={doc.name} className="border-t border-slate-700">
                        <td className="px-2 py-1">
                            <code className="text-blue-300">{doc.name}</code>
                        </td>
                        <td className="px-2 py-1 text-slate-300">{doc.type}</td>
                        <td className="px-2 py-1 text-slate-400">{doc.defaultValue}</td>
                        <td className="px-2 py-1 text-slate-400">{doc.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)

/**
 * Demo Docs: dokumentasi komponen otomatis dari argTypes dan parameter docs.
 *
 * @returns Panel dokumentasi lengkap dengan tabel props dan contoh parameter.
 */
export default function Docs() {
    return (
        <section className="panel" aria-label="Docs">
            <h3 className="text-lg font-semibold text-blue-400">Docs</h3>
            <p className="text-sm text-slate-400">
                Deskripsi komponen, tabel props, dan contoh penggunaan tampil dalam satu halaman.
            </p>
            <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-6">
                <button type="button" className="btn">
                    Click Me
                </button>
            </div>
            <PropTable />
            <pre className="overflow-x-auto rounded-lg bg-slate-950 p-3 text-xs text-blue-300">
                {contohParameter}
            </pre>
        </section>
    )
}
