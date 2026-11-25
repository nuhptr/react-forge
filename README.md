# React Forge

Repositori pembelajaran dan referensi rekayasa **React 19 + TypeScript** yang terstruktur serta berorientasi pada **clean code**. Setiap materi konsep, contoh interaktif, dan latihan (*challenge*) ditulis dengan tipe statis ketat, HTML semantik yang aksesibel, dokumentasi JSDoc berbahasa Indonesia, serta menerapkan prinsip **SOLID**.

---

## Konvensi Penamaan Urutan Abjad (A–Z)

Seluruh folder modul di tingkat root maupun subfolder topik di dalam masing-masing `src/` **tidak menggunakan awalan angka (`01-`) maupun kode huruf (`a-`)**, melainkan dipilih menggunakan istilah natural bahasa Inggris yang apabila diurutkan berdasarkan abjad (`A → Z`) **otomatis mengikuti urutan kurikulum asli dari awal hingga lanjut**.

---

## Struktur Modul Kurikulum (Root A–Z)

```text
react-forge/
├── fundamental/             # [1] Dasar-dasar React 19, JSX, props, state, portal & keys (Selesai)
├── hooks/                   # [2] Built-in React Hooks, Context API & custom hooks (Selesai)
├── introductory-projects/   # [3] 10 proyek mini latihan dasar React (Kerangka siap pakai)
├── jsx-typescript/          # [4] Pola pengetikan TypeScript mendalam di React (Kerangka siap pakai)
├── keystone-projects/       # [5] 4 proyek aplikasi menengah-lanjut TypeScript (Kerangka siap pakai)
├── library-ui/              # [6] Eksplorasi DaisyUI, Radix Themes & shadcn/ui (Kerangka siap pakai)
├── LICENSE                  # Lisensi MIT
└── README.md                # Dokumentasi utama repositori
```

> Penamaan `F → H → I → J → K → L` menyisakan ruang alfabet `M → Z` untuk modul lanjutan berikutnya (seperti React Hook Form, React 19 Actions, Framer Motion, Zustand, Redux Toolkit, Design Patterns, TanStack Query, hingga Testing).

---

## Prinsip Arsitektur & Clean Code (SOLID)

- **Single Responsibility Principle (SRP):** Efek samping, timer, reducer, dan pemanggilan Web API (`useClipboardCopy`, `useFetch`, `counterReducer`) dipisahkan dari komponen tampilan.
- **Open/Closed Principle (OCP):** Komponen dasar yang dapat digunakan ulang (`Card`, `Portal`, `ToastNotification`) menerima kontrak `props` dan komposisi `children` tanpa mengunci isi tampilan secara kaku.
- **Dependency Inversion Principle (DIP):** Komponen overlay dirender melalui abstraksi `<Portal>` dan state lintas-lapisan diakses melalui custom hook Context bertipe aman (`useProfileContext`, `useUserContext`).
- **TypeScript Ketat:** Kontrak `interface` eksplisit, *discriminated union* pada reducer, bebas dari tipe `any` maupun tipe event lama yang sudah `@deprecated`.
- **Aksesibilitas Web:** Landmark semantik (`<header>`, `<main>`, `<nav>`, `<footer>`), relasi `<label htmlFor>` terprogram melalui `useId()`, dan ARIA *live region* (`role="status"` / `role="alert"`).

---

## Teknologi yang Digunakan

| Lapisan | Teknologi |
| :--- | :--- |
| **Pustaka UI** | React `^19.3.1`, React DOM `^19.3.1` |
| **Bahasa** | TypeScript `~7.0.2` (mode bundler ketat) |
| **Build Tool** | Vite `^8.3.5` (`@vitejs/plugin-react`) |
| **Styling** | Tailwind CSS `^4.3.3` (`@tailwindcss/vite`), CSS Modern |
| **Ikon** | `react-icons` `^5.7.0` |
| **Linter** | ESLint `^10.13.0`, `typescript-eslint`, `eslint-plugin-react-hooks` |
| **Package Manager** | Bun (`bun.lock`) |

---

## Cara Menjalankan Workspace

Pilih workspace modul yang sedang dipelajari:

```bash
# Contoh menjalankan modul hooks
cd hooks
bun install
bun run dev
```

| Perintah | Kegunaan |
| :--- | :--- |
| `bun run dev` | Menjalankan server pengembangan lokal Vite dengan HMR |
| `bun run build` | Memeriksa tipe TypeScript (`tsc -b`) lalu mem-build aset produksi |
| `bun run lint` | Memeriksa kualitas kode `.ts` dan `.tsx` dengan ESLint |
| `bun run preview` | Menjalankan pratinjau hasil build produksi secara lokal |

---

## Peta Kurikulum Detail

1. **[`fundamental/`](./fundamental/README.md)** — 15 topik dasar (`atomic-components` s/d `unique-keys`) — **Selesai**
2. **[`hooks/`](./hooks/README.md)** — 8 topik React Hooks (`basic-state` s/d `unique-identifiers`) — **Selesai**
3. **[`introductory-projects/`](./introductory-projects/README.md)** — 10 proyek mini (`basic-counter` s/d `shoe-store-filtering`) — **Kerangka Siap**
4. **[`jsx-typescript/`](./jsx-typescript/README.md)** — 8 topik TypeScript di React (`component-props-typing` s/d `remote-effect-types`) — **Kerangka Siap**
5. **[`keystone-projects/`](./keystone-projects/README.md)** — 4 proyek TypeScript (`client-table-filtering` s/d `storefront-advanced-filtering`) — **Kerangka Siap**
6. **[`library-ui/`](./library-ui/README.md)** — 3 pustaka UI (`daisy-ui`, `radix-themes`, `shadcn-ui`) — **Kerangka Siap**

---

## Alur Kerja Pengembangan (Git Workflow)

- **Percabangan (Branching):** Gunakan branch berumur pendek dari `main` (`feature/<nama>`, `fix/<nama>`, `hotfix/<nama>`, `docs/<nama>`). Branch `main` selalu dijaga bersih dan siap rilis.
- **Format Commit:** Mengikuti standar [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`).

---

## Lisensi

Didistribusikan di bawah [Lisensi MIT](./LICENSE).
