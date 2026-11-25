import { useState } from "react";

/**
 * Simulasi Protected Route: konten hanya muncul saat authenticated.
 *
 * Dependency Inversion: status autentikasi diinjeksi lewat state, bukan
 * bergantung pada instance auth tertentu.
 *
 * @returns Tombol login/logout dan konten terlindungi.
 */
export default function ProtectedRoute() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <section className="panel" aria-label="Protected route">
      <h3 className="text-lg font-semibold text-blue-400">Protected Route</h3>
      <button
        type="button"
        className="btn"
        onClick={() => setAuthenticated((v) => !v)}
      >
        {authenticated ? "Logout" : "Login"}
      </button>
      {authenticated ? (
        <p className="rounded-lg bg-emerald-500/10 p-3 text-emerald-300">
          Konten rahasia terlihat.
        </p>
      ) : (
        <p className="text-sm text-slate-400">
          Silakan login untuk melihat konten.
        </p>
      )}
    </section>
  );
}
