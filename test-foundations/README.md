# Test Foundations (`test-foundations`)

Dasar testing: sintaks test (describe/it/expect/AAA), basic tests, TDD, matchers, parameterized testing, positive/negative, boundary testing, dan testing asynchronous.

Modul ini adalah bagian dari kurikulum [React Forge](../readme.md) dan mengikuti konvensi yang sama: Vite + React 19 + TypeScript strict + Tailwind CSS v4.

---

## Daftar Modul

| Folder                      | Topik                 | Pintu Masuk                               |
| :-------------------------- | :-------------------- | :---------------------------------------- |
| `basic-tests`               | Basic Tests           | `src/basic-tests/index.tsx`               |
| `boundary-testing`          | Boundary Testing      | `src/boundary-testing/index.tsx`          |
| `matchers`                  | Matchers              | `src/matchers/index.tsx`                  |
| `parameterized-testing`     | Parameterized Testing | `src/parameterized-testing/index.tsx`     |
| `positive-negative-testing` | Positive & Negative   | `src/positive-negative-testing/index.tsx` |
| `tdd`                       | TDD                   | `src/tdd/index.tsx`                       |
| `testing-async`             | Testing Async         | `src/testing-async/index.tsx`             |
| `tests-syntax-intro`        | Tests Syntax Intro    | `src/tests-syntax-intro/index.tsx`        |

---

## Menjalankan

```bash
cd test-foundations
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
