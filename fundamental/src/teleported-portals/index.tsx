import ClipboardCopyForm from "./components/clipboard-copy-form";

/**
 * Mendemonstrasikan fitur React Portal (`createPortal`) dengan merender notifikasi
 * penyalinan clipboard ke dalam elemen `#portal-root` di luar pohon DOM `#root`.
 *
 * @returns Komponen utama materi React Portal.
 */
const TeleportedPortals = () => {
  return (
    <main className="mx-auto max-w-lg p-6">
      <header className="mb-6 space-y-1">
        <h1 className="text-2xl font-bold text-slate-900">React Portal</h1>
        <p className="text-sm text-slate-600">
          Copy text below to render a toast notification inside{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
            #portal-root
          </code>{" "}
          outside the main React DOM tree.
        </p>
      </header>

      <ClipboardCopyForm />
    </main>
  );
};

export default TeleportedPortals;
