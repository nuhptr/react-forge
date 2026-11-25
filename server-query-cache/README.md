# Server Query Cache (`server-query-cache`)

Server-state caching dengan QueryClientProvider, useQuery, dan invalidasi cache.

Modul ini adalah bagian dari kurikulum [React Forge](../readme.md) dan mengikuti konvensi yang sama: Vite + React 19 + TypeScript strict + Tailwind CSS v4.

---

## Daftar Modul

| Folder | Topik | Pintu Masuk |
| :--- | :--- | :--- |
| `cache-basics` | Cache Basics | `src/cache-basics/index.tsx` |
| `query-client` | Query Client | `src/query-client/index.tsx` |

---

## Menjalankan

```bash
cd server-query-cache
bun install
bun run dev
```

`bun run build` menjalankan `tsc -b` lalu `vite build` dan merupakan gate pemeriksaan tipe yang resmi.

---

## Struktur Kode

```text
src/
├── App.tsx                  # compose saja
├── demos.ts                 # katalog modul + tipe Demo
├── section-list.tsx  # dropdown + kartu pemilih modul
├── globals.css              # hanya @import
├── styles/                  # base.css, layout.css (@layer + @apply)
└── <topik>/index.tsx        # demo/orkestrasi singkat
```

Pilih topik lewat dropdown atau kartu di halaman — tidak perlu menyunting `App.tsx`.

---

## Prinsip

- **SRP:** data dan konfigurasi dipisah dari presentasi (`data.ts`, `demos.ts`).
- **OCP:** varian/opsi baru ditambah lewat konfigurasi tanpa mengubah komponen.
- **ISP:** props didefinisikan seminimal mungkin per komponen.
- **DIP:** handler diinjeksikan lewat props, komponen tidak mengakses implementasi langsung.
- **Aksesibilitas:** HTML semantik, label/ARIA, dan `prefers-reduced-motion`.

---

## Referensi

Materi diadaptasi dari referensi kursus React.
