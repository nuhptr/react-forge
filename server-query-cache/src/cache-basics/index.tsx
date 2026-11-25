import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

/**
 * Menampilkan info cache: jumlah query yang tersimpan.
 *
 * Dependency Inversion: komponen hanya bergantung pada hook useQueryClient.
 */
const CacheInfo = () => {
  const client = useQueryClient();
  const count = client.getQueryCache().getAll().length;

  return (
    <div className="grid gap-2">
      <p className="text-sm text-slate-400">Query di cache: {count}</p>
      <button type="button" className="btn" onClick={() => client.clear()}>
        Bersihkan cache
      </button>
    </div>
  );
};

/**
 * Demo dasar cache TanStack Query.
 *
 * @returns Provider dengan informasi cache.
 */
export default function CacheBasics() {
  return (
    <section className="panel" aria-label="Cache basics">
      <h3 className="text-lg font-semibold text-blue-400">Cache Basics</h3>
      <QueryClientProvider client={queryClient}>
        <CacheInfo />
      </QueryClientProvider>
    </section>
  );
}
