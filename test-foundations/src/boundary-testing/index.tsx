/**
 * Fungsi dengan batas nilai (0-100).
 */
const clampScore = (value: number): number => Math.min(100, Math.max(0, value));

/**
 * Demo boundary testing: uji nilai di batas dan di luar batas.
 *
 * @returns Tabel hasil pengujian batas.
 */
export default function BoundaryTesting() {
  const cases = [-1, 0, 1, 99, 100, 101];

  return (
    <section className="panel" aria-label="Boundary testing">
      <h3 className="text-lg font-semibold text-blue-400">Boundary Testing</h3>
      <ul className="grid gap-1 text-sm">
        {cases.map((value) => (
          <li key={value} className="rounded border border-slate-700 p-2">
            clampScore({value}) = {clampScore(value)}
          </li>
        ))}
      </ul>
    </section>
  );
}
