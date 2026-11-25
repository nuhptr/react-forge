# Referensi Monorepos — Workspace Monorepo Foundry

Dua contoh workspace monorepo dari materi kursus, disalin utuh sebagai referensi baca. Nama folder sudah kebab-case tanpa awalan angka.

| Folder | Isi |
| :--- | :--- |
| `monorepo-basics/` | `package.json` workspace + folder `packages/` (lihat isi di dalamnya) |
| `naming-packages/` | Contoh penamaan paket scoped (`@nama/pkg`) |

---

## Menjalankan

Setiap folder punya `package.json` sendiri:

```bash
cd reference/monorepo-basics
npm install
# jalankan script yang tersedia di package.json (mis. npm run dev)
```

Untuk `naming-packages/`, pola sama. Perhatikan `workspaces` di `package.json` root bila ada — itu yang mendefinisikan paket.

---

## Catatan

- `node_modules/` tidak disertakan.
- Workspace utama `workspace-monorepo-foundry/` tetap memakai pola Vite + `src/` (bukan monorepo sungguhan); ini murni referensi struktur.
