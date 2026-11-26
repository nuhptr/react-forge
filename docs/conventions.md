# Konvensi React Forge

Dokumen ini adalah **sumber kebenaran** untuk struktur, penamaan, formatting, dan alur kerja di repo ini. Boleh disalin ke project lain — ganti hanya daftar modul di bagian "Folder root".

---

## 1. Penamaan folder (WAJIB)

- Semua folder memakai **kebab-case natural** dan diurutkan **A–Z**.
- **Dilarang** prefiks angka (`01-`, `1.`, `1-`) di folder mana pun: root, `src/`, maupun `reference/`.
- **Dilarang** memakai nama penulis/akun sumber di file, contoh, README, atau `package.json` `author`. Pakai sebutan netral: "referensi kursus React" / "sumber kursus".
- Nama modul lanjutan menyisipkan kata kunci teknologi supaya mudah dipetakan ke materi (contoh: `pocket-zustand-state`, `xen-design-system`).

Daftar modul di repo ini (urutan A–Z):

```
fundamental, hooks, introductory-projects, jsx-typescript, keystone-projects,
library-ui, managed-react-forms, modern-react-hooks, motion-react-studio,
pocket-zustand-state, redux-toolkit-forge, reusable-react-patterns,
server-query-cache, test-foundations, testing-react-grounds,
ui-storybook-catalog, utility-small-packages, vault-component-library,
workspace-monorepo-foundry, xen-design-system, yield-react-auth, zen-react-native
```

---

## 2. Setup & styling

- Vite 8 + React 19 + TypeScript strict + Tailwind CSS v4 via `@tailwindcss/vite`.
- `bun install`, `bun run build` (= `tsc -b && vite build`), `bun run dev`.
- Pengecualian: modul React Native memakai Expo SDK 54 + Expo Router 6 + RN 0.81 (bukan Vite). Verifikasi: `bun run typecheck` + `bunx expo export --platform web`.
- `globals.css` **hanya** berisi `@import`:
    ```css
    @import "tailwindcss";
    @import "./styles/base.css";
    @import "./styles/layout.css";
    ```
- CSS kustom ditulis di `src/styles/*.css` memakai `@layer base` / `@layer components` + `@apply`. Jangan menumpuk `@layer` di `globals.css`.
- Prettier 3.6.2, config `.prettierrc.json`: `double quotes`, `semi: false`, `tabWidth: 4`, `printWidth: 100`, `bracketSameLine: true`, `htmlWhitespaceSensitivity: ignore`.
- Semua README bernama `readme.md` (huruf kecil) dan masuk `.prettierignore`.

---

## 3. Struktur kode tiap modul

```
src/
├── App.tsx            # compose saja, ≤ 50 baris
├── demos.ts           # katalog + interface Demo (data & tipe, bukan UI)
├── section-list.tsx   # DAFTAR/PEMILIH modul — di ROOT src/, BUKAN folder components
├── globals.css        # hanya @import
├── styles/            # base.css, layout.css (@layer + @apply)
└── <topik>/index.tsx  # demo/orkestrasi singkat
```

- Komponen pemilih bernama `SectionList`, props: `demos`, `activeId`, `onSelect` (dropdown + kartu, `aria-pressed`).
- Blok JSX yang berulang di dalam satu file diekstrak jadi **fungsi lokal di file yang sama** (mis. `TabNavigation`, `KeyframeGallery`).
- Potongan yang benar-benar mandiri dipindah ke file khusus (mis. `recipe-form.tsx`, `slide-thumbnail.tsx`).
- Dua pola antarmuka: **playground** (semua section dirender) dan **pemilih modul** (satu demo aktif lewat state). Keduanya memakai `demos.ts` + `section-list.tsx`.

---

## 4. Prinsip kode (SOLID + Modern Web Guidance)

| Prinsip | Penerapan                                                                                     |
| :------ | :-------------------------------------------------------------------------------------------- |
| SRP     | Data, konfigurasi, dan logika dipisah dari tampilan (`data.ts`, `validation.ts`, `config.ts`) |
| OCP     | Varian/opsi baru lewat props/konfigurasi, bukan edit komponen stabil                          |
| LSP     | Sub-komponen mengikuti kontrak induk (`Tabs.List`, `Tabs.Tab`, `Tabs.Panel`)                  |
| ISP     | Props seminimal mungkin per peran (`TextFieldProps` vs `TextAreaFieldProps`)                  |
| DIP     | Handler/aksi diinjeksi lewat props; komponen tidak akses store/implementasi langsung          |

- HTML semantik (`main`, `section`, `nav`, `article`), label + `htmlFor`, `aria-pressed`, `role="alert"`, `prefers-reduced-motion`.
- JSDoc bahasa Indonesia dengan `@returns` pada komponen.

---

## 5. Commit & branch (WAJIB sesuai tujuan)

**Commit** — tipe mengikuti isi, **tanpa scope**:

| Tipe        | Dipakai untuk                       |
| :---------- | :---------------------------------- |
| `feat:`     | fitur/modul baru                    |
| `fix:`      | perbaikan bug                       |
| `refactor:` | restrukturisasi tanpa ubah perilaku |
| `docs:`     | dokumentasi/readme                  |
| `style:`    | formatting                          |
| `test:`     | test                                |
| `chore:`    | config/dependency                   |

Contoh: `refactor: split demo components into local functions`, `docs: rewrite root readme`, `style: format repo with prettier`.

Wajib trailer (baris baru setelah body):

```
Co-authored-by: Gemini <gemini@google.com>
```

**Branch** — prefiks sesuai tujuan, semua pendek dari `main`:

| Prefiks           | Dipakai untuk                          |
| :---------------- | :------------------------------------- |
| `feature/<nama>`  | fitur/modul baru                       |
| `hotfix/<nama>`   | perbaikan mendesak di produksi         |
| `fix/<nama>`      | bug rutin                              |
| `docs/<nama>`     | dokumentasi/readme                     |
| `chore/<nama>`    | dependency, config, formatting         |
| `release/<versi>` | persiapan rilis (`vMAJOR.MINOR.PATCH`) |

Alur: branch → commit → push → PR → merge **setelah konfirmasi user**. Push hanya jika diminta. Branch yang sudah di-merge **tidak dihapus otomatis**.

---

## 6. Referensi & catatan tooling

- `reference/` berisi proyek sumber utuh, masing-masing punya `package.json` + `readme.md` panduan. Backend menyertakan `.env.example` (mis. `MONGO_URI`, `JWT_SECRET`). `node_modules/` tidak disertakan.
- `bun run lint` gagal repo-wide karena `typescript-eslint` belum mendukung TypeScript 7.0 — gunakan `bun run build` sebagai gate tipe.
- Di JSX, teks generik seperti `FC<Props>` harus ditulis `FC&lt;Props&gt;` agar TypeScript 7 tidak mengira tag JSX.

---

## Cara pakai di project lain

1. Salin file ini ke root project lain (mis. `docs/conventions.md` atau `AGENTS.md`).
2. Sesuaikan daftar modul di bagian 1 dengan topik project tersebut.
3. Beri tahu agent: "Baca docs/conventions.md sebelum kerja" — atau taruh di `AGENTS.md` supaya dibaca otomatis.
