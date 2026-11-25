/**
 * Implementasi fungsi hasil siklus red-green-refactor.
 */
export const sum = (numbers: number[]): number => numbers.reduce((a, b) => a + b, 0)

/**
 * Demo TDD: test dimulai dari ekspektasi, lalu diimplementasi.
 *
 * @returns Hasil test sederhana.
 */
export default function Tdd() {
    const expected = 6
    const actual = sum([1, 2, 3])

    return (
        <section className="panel" aria-label="TDD">
            <h3 className="text-lg font-semibold text-blue-400">TDD (Red-Green-Refactor)</h3>
            <p className="text-sm text-slate-400">
                Ekspektasi: {expected} · Aktual: {actual} ·{" "}
                {actual === expected ? "PASS ✓" : "FAIL ✗"}
            </p>
        </section>
    )
}
