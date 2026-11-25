# Modern Hooks (`modern-react-hooks`)

Eksplorasi **React 19 Advanced Hooks** dengan TypeScript + Vite.

Materi kurikulum chapter 8:

| Folder (`A–Z`) | Topik | Pintu Masuk | Fokus Pembelajaran |
| :--- | :--- | :--- | :--- |
| `context-theme` | React 19 `use()` dengan Context | `src/context-theme/index.tsx` | Bandingkan `useContext` vs `use()` untuk tema gelap/terang |
| `data-fetching` | React 19 `use()` hook | `src/data-fetching/index.tsx` | Bandingkan `useEffect` vs `use()` untuk pengambilan data |
| `form-action` | React Actions (Server Action) | `src/form-action/index.tsx` | Form action tanpa event handler manual |
| `form-status` | `useFormStatus` | `src/form-status/index.tsx` | Status pending saat submit form |
| `react-action-state` | `useActionState` | `src/react-action-state/index.tsx` | State yang diupdate melalui form action |
| `tab-transition` | `useTransition` | `src/tab-transition/index.tsx` | Transisi tab yang non-blocking untuk konten berat |

---

## Mulai Cepat

```bash
cd modern-react-hooks
bun install
bun run dev
```

---

## Prinsip Desain

- **Single Responsibility**: logika pengambilan data, aksi form, dan state dipisahkan dari presentasi.
- **Open/Closed**: komponen menerima konfigurasi lewat props, mudah diperluas tanpa modificasi internal.
- **Interface Segregation**: setiap komponen hanya terima props yang diperlukannya.
- **Dependency Inversion**: handler dan aksi diinjeksi dari luar, tidak dikodekan kaku di dalam komponen.
- **Aksesibilitas**: HTML semantik, `aria-*`, label terprogram, dan fokus yang jelas.
