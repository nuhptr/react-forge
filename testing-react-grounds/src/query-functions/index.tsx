/**
 * Demo query functions: getBy, queryBy, findBy dan varian All.
 *
 * @returns Referensi cepat penggunaan query.
 */
export default function QueryFunctions() {
  const queries = [
    { name: "getBy", desc: "Melempar error jika tidak ditemukan" },
    { name: "queryBy", desc: "Mengembalikan null jika tidak ditemukan" },
    { name: "findBy", desc: "Async, menunggu elemen muncul" },
    { name: "getAllBy", desc: "Mengembalikan array elemen" },
    { name: "queryAllBy", desc: "Array, bisa kosong" },
    { name: "findAllBy", desc: "Async array" },
  ];

  return (
    <section className="panel" aria-label="Query functions">
      <h3 className="text-lg font-semibold text-blue-400">Query Functions</h3>
      <ul className="grid gap-1 text-sm">
        {queries.map((q) => (
          <li key={q.name} className="rounded border border-slate-700 p-2">
            <code className="text-blue-300">{q.name}</code> — {q.desc}
          </li>
        ))}
      </ul>
    </section>
  );
}
