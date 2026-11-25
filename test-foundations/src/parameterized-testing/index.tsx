/**
 * Demo parameterized testing: satu assertions untuk banyak pasangan nilai.
 *
 * @returns Tabel hasil perkalian.
 */
export default function ParameterizedTesting() {
  const cases = [
    [2, 3, 6],
    [4, 5, 20],
    [0, 9, 0],
  ] as const;

  return (
    <section className="panel" aria-label="Parameterized testing">
      <h3 className="text-lg font-semibold text-blue-400">
        Parameterized Testing
      </h3>
      <ul className="grid gap-1 text-sm">
        {cases.map(([a, b, expected]) => (
          <li key={`${a}-${b}`} className="rounded border border-slate-700 p-2">
            {a} × {b} = {a * b} {a * b === expected ? "✓" : "✗"}
          </li>
        ))}
      </ul>
    </section>
  );
}
