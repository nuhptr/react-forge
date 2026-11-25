import { useEffect, useState } from "react";

/**
 * Struktur artikel ringkas dari API JSONPlaceholder.
 */
interface PostItem {
  id: number;
  title: string;
}

const POSTS_API_URL = "https://jsonplaceholder.typicode.com/posts";

/**
 * Challenge 3 `useEffect`: mengambil daftar artikel saat mount dan menampilkan judul artikel pertama.
 *
 * @returns Kartu pratinjau artikel pertama beserta status muat/error.
 */
const PostsPreview = () => {
  const [firstPostTitle, setFirstPostTitle] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const loadFirstPost = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(POSTS_API_URL, {
          signal: abortController.signal,
        });
        if (!response.ok) {
          throw new Error("Gagal memuat data artikel.");
        }

        const posts = (await response.json()) as PostItem[];
        setFirstPostTitle(posts[0]?.title ?? "Tidak ada artikel.");
        setErrorMessage(null);
      } catch (error) {
        if (abortController.signal.aborted) return;
        setErrorMessage(
          error instanceof Error ? error.message : "Terjadi kesalahan.",
        );
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    void loadFirstPost();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="card">
      <h2>3. Fetch First Post</h2>
      {isLoading && <p role="status">Memuat data artikel...</p>}
      {errorMessage && <p role="alert">{errorMessage}</p>}
      {!isLoading && !errorMessage && (
        <p>Judul artikel pertama: {firstPostTitle}</p>
      )}
    </div>
  );
};

export default PostsPreview;
