import { useFetch, type FetchState } from "./use-fetch";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

/**
 * Komponen data fetching klasik menggunakan useState + useEffect.
 *
 * Single Responsibility: hanya merender UI berdasarkan state dari useFetch;
 * logika pemuatan data berada di custom hook terpisah.
 */
export const TodoFetchClassic = () => {
  const { data, loading, error }: FetchState<Todo> = useFetch<Todo>(
    "https://jsonplaceholder.typicode.com/todos/1",
  );

  if (loading) {
    return <p className="loading">Memuat data...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <section className="fetch-card" aria-labelledby="todo-classic-title">
      <h3 id="todo-classic-title">Todo (useEffect)</h3>
      {data && (
        <div>
          <h4>{data.title}</h4>
          <p>Status: {data.completed ? "Selesai" : "Belum selesai"}</p>
        </div>
      )}
    </section>
  );
};
