# Agent instructions — React Forge

Baca `docs/conventions.md` untuk konvensi lengkap sebelum mengerjakan perubahan. File itu adalah sumber kebenaran dan boleh disalin ke project lain.

## Ringkasan wajib

- **Folder**: kebab-case natural, urut A–Z, tanpa prefiks angka (`01-`, `1.`, `1-`) di root, `src/`, maupun `reference/`.
- **Nama**: jangan pakai nama penulis/akun sumber; pakai "referensi kursus React".
- **Struktur modul**: `src/App.tsx` (compose ≤ 50 baris), `src/demos.ts` (katalog + `interface Demo`), `src/section-list.tsx` (komponen `SectionList`, props `demos`/`activeId`/`onSelect`) — di **root `src/`**, bukan `src/components/`.
- **CSS**: `globals.css` hanya `@import "tailwindcss"` + `@import "./styles/*.css"`. CSS kustom di `src/styles/` pakai `@layer` + `@apply`. Tailwind v4.
- **Format**: Prettier 3.6.2 sesuai `.prettierrc.json`; `readme.md` huruf kecil (di-ignore Prettier).
- **Kode**: SOLID, HTML semantik, ARIA, JSDoc Indonesia + `@returns`. Blok JSX berulang → fungsi lokal dalam file yang sama.
- **Reference**: proyek sumber utuh di `reference/`, masing-masing punya `readme.md`; backend punya `.env.example`. `node_modules/` tidak disertakan.
- **Verifikasi**: `bun run build` untuk 21 modul Vite; `bun run typecheck` + `bunx expo export --platform web` untuk `zen-react-native`.
- **`bun run lint`** gagal repo-wide (typescript-eslint vs TS 7) — bukan bug kode; pakai `bun run build` sebagai gate tipe.

## Commit & branch

- Commit: tipe sesuai isi, **tanpa scope** — `feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `test:`, `chore:`. Wajib trailer `Co-authored-by: Gemini <gemini@google.com>`.
- Branch: prefiks sesuai tujuan — `feature/`, `hotfix/`, `fix/`, `docs/`, `chore/`, `release/<versi>`. Semua dari `main`.
- Alur: branch → commit → push → PR → merge setelah konfirmasi. Push hanya jika diminta. Branch merged tidak dihapus otomatis.
