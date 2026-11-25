import { useFetch } from "../hooks/use-fetch";

/**
 * Struktur artikel dari endpoint JSONPlaceholder.
 */
interface PostArticle {
  id: number;
  title: string;
}

const POSTS_LIMIT_URL = "https://jsonplaceholder.typicode.com/posts?_limit=5";

/**
 * Challenge 3 Custom Hooks: menampilkan daftar artikel menggunakan `useFetch<PostArticle[]>`.
 *
 * @returns Kartu daftar judul artikel.
 */
const PostsFeed = () => {
  const {
    data: posts,
    isLoading,
    errorMessage,
  } = useFetch<PostArticle[]>(POSTS_LIMIT_URL);

  return (
    <div className="card">
      <h2>3. useFetch Hook</h2>
      {isLoading && <p role="status">Memuat artikel...</p>}
      {errorMessage && <p role="alert">{errorMessage}</p>}
      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostsFeed;
