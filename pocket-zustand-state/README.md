# Pocket Zustand State (`pocket-zustand-state`)

Eksplorasi **Zustand** state management dengan React 19 + TypeScript + Vite.

Materi kurikulum chapter 10:

| Folder (`A–Z`) | Topik | Pintu Masuk | Fokus Pembelajaran |
| :--- | :--- | :--- | :--- |
| `expense-tracker` | Proyek Expense Tracker | `src/expense-tracker/index.tsx` | Manajemen state transaksi keuangan |
| `form-builder` | Proyek Form Builder | `src/form-builder/index.tsx` | State formulir dinamis |
| `live-coding` | Live Coding Zustand | `src/live-coding/index.tsx` | Dasar membuat store Zustand |
| `meals-project` | Proyek Meals | `src/meals-project/index.tsx` | State daftar makanan |
| `notes-app` | Proyek Notes App | `src/notes-app/index.tsx` | State catatan (CRUD) |
| `project-notes` | Proyek Notes (7) | `src/project-notes/index.tsx` | State catatan sederhana |
| `quiz-app` | Proyek Quiz App | `src/quiz-app/index.tsx` | State kuis dan jawaban |
| `recipe-app` | Proyek Recipe App | `src/recipe-app/index.tsx` | State resep masakan |
| `task-list-app` | Proyek Task List | `src/task-list-app/index.tsx` | State daftar tugas |
| `todo-list` | Proyek Todo List | `src/todo-list/index.tsx` | State todo (CRUD) |
| `watch-store` | Proyek Watch Store | `src/watch-store/index.tsx` | State toko jam (katalog + keranjang) |

---

## Mulai Cepat

```bash
cd pocket-zustand-state
bun install
bun run dev
```

---

## Prinsip Desain (SOLID + Modern Web)

- **Single Responsibility**: store Zustand hanya menangani state; komponen hanya menangani presentasi.
- **Open/Closed**: store dapat diperluas dengan action baru tanpa mengubah state yang ada.
- **Interface Segregation**: komponen hanya subscribe ke slice state yang diperlukannya.
- **Dependency Inversion**: store diinjeksi melalui hook kustom, tidak dipakai secara langsung di UI.
- **Aksesibilitas**: HTML semantik, `aria-*`, label yang jelas, dan fokus terprogram.
