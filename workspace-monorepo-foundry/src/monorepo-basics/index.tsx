const structure = ["apps/web", "apps/mobile", "packages/ui", "packages/utils"]

/**
 * Demo struktur dasar monorepo.
 *
 * @returns Daftar direktori workspace.
 */
export default function MonorepoBasics() {
    return (
        <section className="panel" aria-label="Monorepo basics">
            <h3 className="text-lg font-semibold text-blue-400">Monorepo Basics</h3>
            <ul className="grid gap-1 text-sm">
                {structure.map((path) => (
                    <li key={path} className="rounded border border-slate-700 p-2 font-mono text-blue-300">
                        {path}
                    </li>
                ))}
            </ul>
        </section>
    )
}
