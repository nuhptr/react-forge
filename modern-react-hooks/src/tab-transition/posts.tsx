/**
 * Konten tab Daftar Posting (konten berat).
 *
 * Single Responsibility: hanya merender daftar posting. Rendering banyak item
 * ditangani dengan transisi agar UI tidak membeku.
 */
export const Posts = () => {
  const posts = Array.from(
    { length: 1000 },
    (_, index) => `Posting ${index + 1}`,
  );

  return (
    <section className="tab-content" aria-labelledby="posts-title">
      <h3 id="posts-title">Daftar Posting</h3>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post} className="post-item">
            {post}
          </div>
        ))}
      </div>
    </section>
  );
};
