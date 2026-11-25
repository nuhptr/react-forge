# Testing React Grounds (`testing-react-grounds`)

Testing komponen React dengan query Testing Library dan peran aksesibilitas.

Modul ini adalah bagian dari kurikulum [React Forge](../README.md) dan mengikuti konvensi yang sama: Vite + React 19 + TypeScript strict + Tailwind CSS v4.

---

## Daftar Modul

| Folder | Topik | Pintu Masuk |
| :--- | :--- | :--- |
| `get-by-role` | Get By Role | `src/get-by-role/index.tsx` |
| `query-functions` | Query Functions | `src/query-functions/index.tsx` |
| `setup-testing` | Setup Testing | `src/setup-testing/index.tsx` |

---

## Menjalankan

```bash
cd testing-react-grounds
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
├── components/module-picker.tsx  # dropdown + kartu pemilih modul
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

Materi diadaptasi dari [THE-BIGGEST-REACT-COURSE-ON-THE-INTERNET](https://github.com/HuXn-WebDev/THE-BIGGEST-REACT-COURSE-ON-THE-INTERNET).
