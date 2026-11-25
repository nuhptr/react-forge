# React Forge

Repositori pembelajaran React 19 + TypeScript yang disusun sebagai kurikulum 22 modul berurutan abjad. Setiap modul adalah workspace Vite mandiri dengan TypeScript strict, Tailwind CSS v4, dokumentasi JSDoc berbahasa Indonesia, dan penerapan prinsip SOLID.

> **Status:** ✅ 22/22 modul lolos `bun run build` · ⚠️ `bun run lint` belum bisa dijalankan di seluruh repo (lihat [Catatan Diketahui](#catatan-diketahui)).

---

## Daftar Isi

- [React Forge](#react-forge)
  - [Daftar Isi](#daftar-isi)
  - [Tentang Proyek](#tentang-proyek)
  - [Prasyarat](#prasyarat)
  - [Mulai Cepat](#mulai-cepat)
  - [Konvensi Penamaan A–Z](#konvensi-penamaan-az)
  - [Struktur Kurikulum](#struktur-kurikulum)
  - [Arsitektur \& Konvensi Kode](#arsitektur--konvensi-kode)
    - [Prinsip SOLID](#prinsip-solid)
    - [Struktur satu modul](#struktur-satu-modul)
    - [Aturan CSS](#aturan-css)
    - [Aturan komponen](#aturan-komponen)
    - [TypeScript](#typescript)
  - [Teknologi](#teknologi)
  - [Alur Kerja Pengembangan](#alur-kerja-pengembangan)
    - [Commit](#commit)
    - [Percabangan \& PR](#percabangan--pr)
  - [Verifikasi \& Catatan Diketahui](#verifikasi--catatan-diketahui)
    - [Catatan Diketahui](#catatan-diketahui)
  - [Referensi \& Atribusi](#referensi--atribusi)
  - [Lisensi](#lisensi)

---

## Tentang Proyek

React Forge bukan sekadar kumpulan contoh kode. Setiap workspace dirancang dengan konvensi yang sama supaya materi bisa dibaca berurutan tanpa kebingungan:

| Aspek | Keputusan |
| :--- | :--- |
| **Urutan**|Nama folder diurutkan A–Z dan otomatis mengikuti urutan kurikulum — tanpa prefiks `01-` atau `a-`.|
| **Isolasi**|Satu folder = satu workspace Vite dengan `package.json`, `tsconfig`, dan `vite.config.ts` sendiri.|
| **Kualitas**|TypeScript strict (`strict`, `noUnusedLocals`, `erasableSyntaxOnly`), HTML semantik, ARIA, dan `prefers-reduced-motion`.|
| **Arsitektur**|Logika, data, dan presentasi dipisah. Blok JSX yang berulang diekstrak jadi fungsi lokal atau komponen tersendiri.|
| **Styling**|Tailwind CSS v4 saja. `globals.css` hanya berisi `@import`; aturan kustom lives di `src/styles/*.css` via `@layer` + `@apply`.|

Dua pola antarmuka digunakan di seluruh modul:

- **Playground** (modul 8–9): kartu navigasi + seluruh section dirender sekaligus.
- **Pemilih modul** (modul 1–7 dan 10–22): dropdown + kartu memilih demo lewat state — `App.tsx` tidak perlu disunting.

Konvensi ini seragam: semua modul memakai `src/demos.ts` sebagai katalog dan `src/components/module-picker.tsx` sebagai UI pemilih.

---

## Prasyarat

|Dependensi|Versi minimum|Catatan|
|:---|:---|:---|
| Bun | `1.3.x` | Package manager resmi proyek (`bun.lock`) |
| Node.js | `20+` | Dibutuhkan sebagian toolchain, walau Bun yang menjalankan script |

Cek instalasi:

```bash
bun --version
```

---

## Mulai Cepat

```bash
# Masuk ke salah satu workspace, misalnya modul hooks
cd hooks

# Pasang dependensi
bun install

# Jalankan dev server (Vite + HMR)
bun run dev
```

Lalu buka alamat lokal yang ditampilkan Vite (biasanya `http://localhost:5173`).

| Perintah | Fungsi |
| :--- | :--- |
| `bun run dev` | Dev server dengan hot module replacement |
| `bun run build` | `tsc -b` lalu `vite build` — satu-satunya pemeriksaan tipe yang saat ini hijau |
| `bun run preview` | Pratinjau hasil build produksi |
| `bun run lint` | ESLint (lihat catatan versi di bawah) |

---

## Konvensi Penamaan A–Z

Nama folder dipilih dari istilah natural bahasa Inggris yang **menyisipkan kata kunci teknologi** dari chapter referensi. Mengurutkan folder secara abjad (`ls -d */ | sort`) otomatis menghasilkan urutan kurikulum yang benar.

**Aturan:**

1. Tidak ada awalan angka (`01-`, `1.`) maupun kode huruf (`a-`, `b-`).
2. Huruf pertama naik berurutan sesuai progres belajar; `M → Z` dipakai untuk modul lanjutan.
3. Kata kunci teknologi disisipkan supaya pemetaan ke sumber jelas: `pocket-zustand-state`, `redux-toolkit-forge`, `xen-design-system`.
4. Subfolder di dalam `src/` mengikuti aturan yang sama (contoh: `context-theme`, `data-fetching`, `form-action`).

Contoh pemetaan:

| Chapter sumber | Folder | Turunan urutan |
| :--- | :--- | :--- |
| React Hook Form | `managed-react-forms` | m |
| Framer Motion | `motion-react-studio` | m |
| Zustand | `pocket-zustand-state` | p |
| Redux Toolkit | `redux-toolkit-forge` | r |
| React Design System | `xen-design-system` | x |
| React Native | `zen-react-native` | z |

---

## Struktur Kurikulum

```text
react-forge/
├── fundamental/                # [01] JSX, props, state, portal, keys — topik tunggal
├── hooks/                      # [02] Built-in hooks, Context API, custom hooks — topik tunggal
├── introductory-projects/      # [03] 10 proyek mini dasar — topik tunggal
├── jsx-typescript/             # [04] Pengetikan TypeScript di React — topik tunggal
├── keystone-projects/          # [05] 4 proyek aplikasi menengah-lanjut — topik tunggal
├── library-ui/                 # [06] DaisyUI, Radix Themes, shadcn/ui — topik tunggal
├── managed-react-forms/        # [07] React Hook Form — topik tunggal
├── modern-react-hooks/         # [08] Advanced Hooks & React 19 — playground
├── motion-react-studio/        # [09] Framer Motion (10 proyek animasi) — playground
├── pocket-zustand-state/       # [10] Zustand (10 proyek state) — pemilih modul
├── redux-toolkit-forge/        # [11] Redux Toolkit & RTK Query — pemilih modul
├── reusable-react-patterns/    # [12] React Design Patterns — pemilih modul
├── server-query-cache/         # [13] TanStack Query — pemilih modul
├── test-foundations/           # [14] Unit Testing — pemilih modul
├── testing-react-grounds/      # [15] React Testing — pemilih modul
├── ui-storybook-catalog/       # [16] Storybook — pemilih modul
├── utility-small-packages/     # [17] CLSX, CVA, Style Dictionary — pemilih modul
├── vault-component-library/    # [18] Build Your Own Component Library — pemilih modul
├── workspace-monorepo-foundry/ # [19] Monorepos — pemilih modul
├── xen-design-system/          # [20] React Design System — pemilih modul
├── yield-react-auth/           # [21] React Auth — pemilih modul
├── zen-react-native/           # [22] React Native — pemilih modul
├── LICENSE                     # Lisensi MIT
└── README.md                   # Dokumentasi ini
```

Detail isi tiap modul ada di `README.md` masing-masing (tersedia untuk modul 1–11); modul 12–22 memakai pola struktur yang sama.

---

## Arsitektur & Konvensi Kode

### Prinsip SOLID

| Prinsip | Penerapan di repo | Contoh |
| :--- | :--- | :--- |
| **SRP** | State, validasi, dan konfigurasi dipisah dari tampilan | `cart-slice.ts`, `validation.ts`, `filter-data.ts` |
| **OCP** | Perilaku baru ditambah lewat props/konfigurasi, bukan edit komponen stabil | `withLoading`, `FilterSection`, `cva` variants |
| **LSP** | Sub-komponen mengikuti kontrak induknya | `Tabs.List` / `Tabs.Tab` / `Tabs.Panel` |
| **ISP** | Antarmuka props sempit dan spesifik per peran | `TextFieldProps` vs `TextAreaFieldProps`, hook selector per modul |
| **DIP** | Aksi dan handler diinjeksi, komponen tidak bergantung pada implementasi | `onSubmit` lewat props, `fetchUsers` lewat props, store lewat hook bertipe |

### Struktur satu modul

```text
src/
├── demos.ts                    # katalog modul + interface Demo (data & tipe, bukan UI)
├── App.tsx                     # compose saja (≤ 50 baris)
├── components/
│   └── module-picker.tsx       # UI pemilih: dropdown + kartu
├── globals.css                 # hanya @import
├── styles/
│   ├── base.css                # @layer base
│   └── layout.css              # @layer components (kelas playground, panel,.btn)
└── <topik>/
    ├── index.tsx               # demo/orkestrasi singkat
    ├── <bagian>.tsx            # fungsi/komponen lokal yang diekstrak
    └── data.ts                 # konfigurasi & konstanta
```

### Aturan CSS

- `globals.css` **hanya** berisi `@import "tailwindcss";` dan `@import "./styles/<file>.css";`.
- Aturan kustom ditulis di `src/styles/*.css` memakai `@layer base` / `@layer components` dengan `@apply`.
- Dilarang menumpuk `@layer components` di `globals.css`.

### Aturan komponen

- Blok JSX yang diulang dalam satu file diekstrak jadi **fungsi lokal di file yang sama** (mis. `TabNavigation`, `KeyframeGallery`).
- Potongan yang benar-benar mandiri dipindah ke file tersendiri (mis. `recipe-form.tsx`, `slide-thumbnail.tsx`).
- Setiap komponen ekspor JSDoc bahasa Indonesia dengan `@returns`.
- Gunakan elemen semantik (`main`, `section`, `nav`, `article`), `aria-pressed`, `role="alert"`, label terhubung via `htmlFor`, serta `prefers-reduced-motion`.

### TypeScript

`tsconfig.app.json` memakai `strict`, `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`, `erasableSyntaxOnly`, dan `jsx: "react-jsx"`. Type-only import wajib memakai `import type`.

---

## Teknologi

| Lapisan | Versi |
| :--- | :--- |
| React / React DOM | `^19.3.1` |
| TypeScript | `~7.0.2` (mode bundler) |
| Vite | `^8.3.5` + `@vitejs/plugin-react` `^6.1.2` |
| Tailwind CSS | `^4.3.3` + `@tailwindcss/vite` |
| ESLint | `^10.13.0` + `typescript-eslint`, `eslint-plugin-react-hooks` |
| Bun | `1.3.x` |
| Pustaka modul | `react-hook-form`, `zustand`, `@reduxjs/toolkit`, `react-redux`, `@tanstack/react-query`, `framer-motion`, `clsx`, `class-variance-authority`, `react-icons` |

---

## Alur Kerja Pengembangan

### Commit

Format [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/):

```text
<type>[optional scope]: <description>

[optional body]

Co-authored-by: Gemini <gemini@google.com>
```

Tipe umum: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`. Breaking change memakai `!` atau footer `BREAKING CHANGE:`.

### Percabangan & PR

- `main` adalah satu-satunya cabang panjang dan selalu siap rilis.
- Branch pendek dari `main`: `feature/<nama>`, `fix/<nama>`, `hotfix/<nama>`, `docs/<nama>`, `chore/<nama>`.
- Selesaikan lewat Pull Request ke `main` dan **tunggu konfirmasi eksplisit** sebelum merge.
- Branch yang sudah di-merge **tidak dihapus otomatis**; hapus manual hanya jika diminta.
- `git push` hanya dijalankan atas permintaan.

---

## Verifikasi & Catatan Diketahui

| Item | Status |
| :--- | :--- |
| `bun run build` seluruh 22 modul | ✅ Lolos |
| TypeScript strict + Tailwind v4 | ✅ Terpasang di semua modul |
| `bun run lint` | ⚠️ Gagal di seluruh repo |

### Catatan Diketahui

- **`bun run lint`:** `typescript-eslint` belum mendukung TypeScript 7.0, sehingga ESLint gagal saat memuat parser — termasuk di modul lama seperti `library-ui`. Ini bukan kesalahan kode. Gunakan `bun run build` sebagai gate pemeriksaan tipe sampai dukungan tersedia.
- **`jsx-typescript`:** teks generik di dalam JSX (`FC<Props>`, `useState<T>`) harus ditulis sebagai `FC&lt;Props&gt;` agar TypeScript 7 tidak mengira sebagai tag JSX.
- **`pocket-zustand-state`:** modul *Watch Store* menyertakan ~40 aset gambar, sehingga bundle melewati ambang peringatan 500 kB. Tidak memengaruhi build.
- **`redux-toolkit-forge`:** backend Express/Mongoose dari sumber disimpan di `reference/` sebagai materi baca dan tidak ikut di-build.

---

## Lisensi

Didistribusikan di bawah [Lisensi MIT](./LICENSE).
