/**
 * Contoh fungsi validasi email untuk testing.
 *
 * Single Responsibility: hanya memvalidasi format email.
 */
export const validateEmail = (value: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

/**
 * Contoh positive & negative testing (tanpa runner eksternal).
 *
 * @returns Daftar hasil pengujian untuk input valid dan invalid.
 */
export default function PositiveNegativeTesting() {
    const cases = [
        { input: "user@example.com", expected: true },
        { input: "invalid", expected: false },
    ]

    return (
        <section className="panel" aria-label="Positive negative testing">
            <h3 className="text-lg font-semibold text-blue-400">Positive &amp; Negative Testing</h3>
            <ul className="grid gap-1">
                {cases.map((item) => {
                    const result = validateEmail(item.input)
                    const pass = result === item.expected
                    return (
                        <li
                            key={item.input}
                            className="rounded border border-slate-700 p-2 text-sm">
                            <span className={pass ? "text-emerald-400" : "text-rose-400"}>
                                {pass ? "PASS" : "FAIL"}
                            </span>{" "}
                            validateEmail("{item.input}") = {String(result)}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
