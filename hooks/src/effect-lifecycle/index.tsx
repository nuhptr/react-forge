import { useEffect, useState } from "react";

/**
 * Struktur data artikel dari endpoint publik JSONPlaceholder.
 */
interface PostSummary {
  id: number;
  title: string;
}

const POSTS_ENDPOINT = "https://jsonplaceholder.typicode.com/posts?_limit=5";

/**
 * Mendemonstrasikan siklus hidup `useEffect`: dependency array, pembersihan event listener
 * ukuran jendela (`resize`), serta pengambilan data asinkron dengan `AbortController`.
 *
 * @returns Halaman demonstrasi `useEffect`.
 */
const EffectLifecycle = () => {
  const [count, setCount] = useState(0);
  const [viewportWidth, setViewportWidth] = useState<number>(() =>
    typeof window === "undefined" ? 0 : window.innerWidth,
  );
  const [posts, setPosts] = useState<PostSummary[]>([]);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchRecentPosts = async () => {
      try {
        const response = await fetch(POSTS_ENDPOINT, {
          signal: abortController.signal,
        });
        if (!response.ok) return;
        const payload = (await response.json()) as PostSummary[];
        setPosts(payload);
      } catch {
        // Abaikan pembatalan request saat komponen di-unmount.
      }
    };

    void fetchRecentPosts();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <main>
      <h1>Effect Lifecycle (useEffect)</h1>

      <section className="card">
        <h2>Lebar Layar & Dependency</h2>
        <p>Lebar jendela saat ini: {viewportWidth}px</p>
        <p>Hitungan klik: {count}</p>
        <div className="controls">
          <button type="button" onClick={() => setCount((prev) => prev + 1)}>
            Tambah Hitungan
          </button>
        </div>
      </section>

      <section className="card">
        <h2>Data Artikel (JSONPlaceholder)</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default EffectLifecycle;
