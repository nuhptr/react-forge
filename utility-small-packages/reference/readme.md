# Referensi Small Packages — Utility Small Packages

Tiga proyek kecil dari materi kursus, disalin utuh sebagai referensi baca. Nama folder sudah disesuaikan ke kebab-case tanpa awalan angka, mengikuti konvensi repo.

| Folder | Isi | Cara jalan |
| :--- | :--- | :--- |
| `style-dictionary-tokens/` | `config.json`, `tokens/*.tokens.json`, `package.json` | `npm install` lalu `npm run build` (lihat scripts) |
| `clsx/` | `src/index.js`, `package.json` | demo penggunaan `clsx` |
| `cva/` | React + Vite + Tailwind + `class-variance-authority` | `npm install && npm run dev` |

---

## Alur token → CSS

`style-dictionary-tokens/tokens/*.tokens.json` adalah sumber warna/spacing/tipografi. `config.json` memberitahu Style Dictionary format output apa yang dibuat (CSS variables, dll). Jalankan build sesuai script di `package.json` untuk menghasilkan file token.

---

## Catatan

- `node_modules/` tidak disertakan.
- Workspace utama `utility-small-packages/` memakai versi ringkas ber-Vite; folder ini referensi mentah.
