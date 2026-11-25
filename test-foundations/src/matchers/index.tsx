/**
 * Demo matchers: menunjukkan hasilseveral matcher umum.
 *
 * @returns Daftar hasil matcher.
 */
export default function Matchers() {
    const checks = [
        { name: "toBe", result: 1 + 1 === 2 },
        { name: "toEqual", result: JSON.stringify([1, 2]) === JSON.stringify([1, 2]) },
        { name: "toBeTruthy", result: Boolean("teks") },
        { name: "toContain", result: ["a", "b"].includes("b") },
    ]

    return (
        <section className="panel" aria-label="Matchers">
            <h3 className="text-lg font-semibold text-blue-400">Matchers</h3>
            <ul className="grid gap-1 text-sm">
                {checks.map((check) => (
                    <li key={check.name} className="rounded border border-slate-700 p-2">
                        {check.name}: {check.result ? "✓" : "✗"}
                    </li>
                ))}
            </ul>
        </section>
    )
}
