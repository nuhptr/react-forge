import DocumentTitleCounter from "./components/document-title-counter";
import MountLogger from "./components/mount-logger";
import PostsPreview from "./components/posts-preview";

/**
 * Menggabungkan ketiga latihan `useEffect` (`MountLogger`, `DocumentTitleCounter`, dan `PostsPreview`).
 *
 * @returns Halaman solusi challenge `useEffect`.
 */
const EffectLifecycleChallenge = () => {
  return (
    <main>
      <h1>useEffect Challenges</h1>
      <MountLogger />
      <DocumentTitleCounter />
      <PostsPreview />
    </main>
  );
};

export default EffectLifecycleChallenge;
