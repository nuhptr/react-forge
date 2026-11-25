# React Forge

Repositori pembelajaran dan referensi rekayasa **React 19 + TypeScript** yang terstruktur serta berorientasi pada **clean code**. Setiap materi konsep, contoh interaktif, dan latihan (*challenge*) ditulis dengan tipe statis ketat, HTML semantik yang aksesibel, dokumentasi JSDoc berbahasa Indonesia, serta menerapkan prinsip **SOLID**.

---

## Gambaran Umum

**React Forge** membagi kurikulum React ke dalam beberapa workspace Vite mandiri menggunakan penamaan folder yang natural tanpa awalan angka, sambil tetap mempertahankan alur belajar bertahap mulai dari dasar JSX hingga rekonsiliasi lanjutan dan React Hooks.

### Prinsip Arsitektur & Clean Code

- **Single Responsibility Principle (SRP):** Efek samping, timer, dan pemanggilan Web API (seperti akses Clipboard pada `useClipboardCopy`) dipisahkan ke dalam custom hook khusus sehingga komponen hanya fokus pada state tampilan dan proses render.
- **Open/Closed Principle (OCP):** Komponen dasar yang dapat digunakan ulang (`Card`, `Portal`, `ToastNotification`) menerima kontrak `props` dan komposisi `children` tanpa mengunci isi tampilan secara kaku.
- **Dependency Inversion Principle (DIP):** Komponen overlay/notifikasi dirender melalui abstraksi `<Portal>`, bukan memanggil `document.querySelector` secara langsung di dalam fungsi render.
- **TypeScript Ketat:** Kontrak `interface` eksplisit pada props, union type, pembaruan state secara *immutable*, bebas dari tipe `any` maupun API yang sudah *deprecated*.
- **Aksesibilitas Web:** Elemen landmark semantik (`<header>`, `<main>`, `<nav>`, `<footer>`), relasi `<label htmlFor>` terprogram melalui `useId()`, kontrol toast ramah keyboard, serta *live region* sopan (`role="status"`).

---

## Struktur Repositori

```text
react-forge/
├── fundamental/          # Konsep inti React 19, pola state, portal & latihan (challenge)
│   ├── public/           # Aset statis & ikon
│   ├── src/              # Modul materi (15 topik bertahap + challenge)
│   ├── index.html        # Kerangka HTML (#root + region notifikasi #portal-root)
│   └── README.md         # Panduan kurikulum lengkap modul Fundamental
├── hooks/                # Workspace khusus pendalaman React Hooks & custom hooks
│   ├── public/           # Aset statis & ikon
│   ├── src/              # Pintu masuk playground Hooks
│   └── README.md         # Panduan workspace & peta belajar Hooks
├── LICENSE               # Lisensi MIT
└── README.md             # Dokumentasi utama repositori
```

---

## Teknologi yang Digunakan

| Lapisan | Teknologi |
| :--- | :--- |
| **Pustaka UI** | React `^19.3.1`, React DOM `^19.3.1` |
| **Bahasa** | TypeScript `~7.0.2` (mode bundler ketat) |
| **Build Tool** | Vite `^8.3.5` (`@vitejs/plugin-react`) |
| **Styling** | Tailwind CSS `^4.3.3` (`@tailwindcss/vite`), CSS Eksternal |
| **Ikon** | `react-icons` `^5.7.0` |
| **Linter** | ESLint `^10.13.0`, `typescript-eslint`, `eslint-plugin-react-hooks` |
| **Package Manager** | Bun (`bun.lock`) |

---

## Cara Menjalankan Proyek

### Prasyarat

- **[Bun](https://bun.sh/)** `>= 1.1` (direkomendasikan) atau **Node.js** `>= 20`

### Menjalankan Workspace

Pilih modul yang ingin dipelajari (`fundamental` atau `hooks`):

```bash
# 1. Masuk ke direktori modul
cd fundamental

# 2. Pasang seluruh dependensi
bun install

# 3. Jalankan server pengembangan Vite
bun run dev
```

### Daftar Perintah (`package.json`)

Setiap workspace memiliki skrip standar yang seragam:

| Perintah | Kegunaan |
| :--- | :--- |
| `bun run dev` | Menjalankan server pengembangan lokal Vite dengan HMR |
| `bun run build` | Memeriksa tipe TypeScript (`tsc -b`) lalu mem-build aset produksi |
| `bun run lint` | Memeriksa kualitas kode `.ts` dan `.tsx` dengan ESLint |
| `bun run preview` | Menjalankan pratinjau hasil build produksi secara lokal |

---

## Alur Pembelajaran

### 1. [`fundamental/`](./fundamental/README.md) — Dasar-Dasar React (Selesai)

1. **Komponen Dasar** — `src/basic`
2. **Sintaks JSX** — `src/jsx`
3. **Aturan JSX** — `src/jsx-rules`
4. **Komposisi Multi-Komponen** — `src/multiple-components`
5. **Konten Dinamis** — `src/dynamic-content`
6. **Render Daftar Data** — `src/list-of-data`
7. **Props** — `src/props`
8. **Destructuring Props** — `src/props-destructuring`
9. **Props Children** — `src/props-children`
10. **Conditional Rendering** — `src/conditional-rendering`
11. **Styling & Ikon** — `src/styles`
12. **Penanganan Event DOM** — `src/event`
13. **Manajemen State (`useState`)** — `src/state` (counter, array, objek, berbagi state, lazy initializer & challenge)
14. **React Portal** — `src/portal`
15. **Advanced Keys** — `src/advanced-keys`

> Lihat [`fundamental/README.md`](./fundamental/README.md) untuk rincian per file dan daftar challenge lengkap.

### 2. [`hooks/`](./hooks/README.md) — React Hooks (Tahap Berikutnya)

Workspace khusus untuk mempelajari `useEffect`, Context API & `useContext`, `useReducer`, `useRef`, pembuatan custom hooks, serta `useId`.

---

## Alur Kerja Pengembangan (Git Workflow)

- **Percabangan (Branching):** Gunakan branch berumur pendek dari `main` (`feature/<nama>`, `fix/<nama>`, `hotfix/<nama>`, `docs/<nama>`). Branch `main` selalu dijaga bersih dan siap rilis.
- **Format Commit:** Mengikuti standar [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`).
- **Pemeriksaan Kualitas:** Pastikan `bun run build` berjalan tanpa error pada workspace yang diubah sebelum membuka Pull Request.

---

## Lisensi

Didistribusikan di bawah [Lisensi MIT](./LICENSE).
