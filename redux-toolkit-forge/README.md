# Redux Toolkit Forge (`redux-toolkit-forge`)

Eksplorasi **Redux Toolkit** dengan React 19 + TypeScript + Vite + Tailwind CSS v4.

| Folder (`A–Z`) | Topik | Pintu Masuk | Fokus |
| :--- | :--- | :--- | :--- |
| `mern-ecommerce-store` | Keranjang belanja | `src/mern-ecommerce-store/index.tsx` | `createSlice`, `useSelector`, `useDispatch` |
| `mern-movies-app` | Film favorit | `src/mern-movies-app/index.tsx` | Slice favorit + selector turunan |
| `rtk-counter` | Counter | `src/rtk-counter/index.tsx` | Dasar `createSlice` + `PayloadAction` |
| `rtk-query-products` | RTK Query CRUD | `src/rtk-query-products/index.tsx` | `createApi`, query & mutation ke DummyJSON |

Backend Express/Mongoose dari sumber disimpan di `reference/` sebagai materi baca, tidak ikut di-build.

---

## Menjalankan

```bash
cd redux-toolkit-forge
bun install
bun run dev
```

`bun run build` menjalankan `tsc -b` lalu `vite build` — gate pemeriksaan tipe resmi.

---

## Struktur Kode

```text
src/
├── App.tsx                       # compose saja
├── demos.ts                      # katalog modul + tipe Demo
├── section-list.tsx  # dropdown + kartu pemilih modul
├── globals.css                   # hanya @import
├── styles/                       # base.css, layout.css (@layer + @apply)
├── mern-ecommerce-store/         # cart-slice.ts, store.ts, index.tsx
├── mern-movies-app/              # movies-slice.ts, store.ts, index.tsx
├── rtk-counter/                  # counter-slice.ts, store.ts, index.tsx
└── rtk-query-products/           # api.ts, store.ts, index.tsx

reference/                        # backend MERN (bukan di-build)
```

Pilih modul lewat dropdown atau kartu di halaman — tidak perlu menyunting `App.tsx`.

---

## Prinsip

- **SRP:** slice/store terpisah dari UI; API slice hanya mendefinisikan endpoint.
- **OCP:** reducer atau endpoint baru ditambah tanpa mengubah komponen yang ada.
- **ISP:** hook selector bertipe (`TypedUseSelectorHook`) per modul.
- **DIP:** komponen bergantung pada action creator dan hook, bukan instance store langsung.
- **Aksesibilitas:** HTML semantik, `aria-pressed`, dan label yang terhubung.

---

## Referensi

Materi diadaptasi dari referensi kursus React.
