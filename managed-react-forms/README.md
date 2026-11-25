# Managed Forms (`managed-react-forms`)

Eksplorasi pengelolaan form di ekosistem **React 19 + TypeScript + Vite** menggunakan **React Hook Form**.

---

## Mulai Cepat

```bash
cd managed-react-forms
bun install
bun run dev
```

---

## Urutan Materi Berurutan Abjad (A–Z)

| Folder (`A–Z`) | Topik | Pintu Masuk | Fokus Pembelajaran |
| :--- | :--- | :--- | :--- |
| `registration-form` | Registration Form | `src/registration-form/index.tsx` | Validasi banyak field, `register`, `handleSubmit`, pesan error per field |
| `simple-form` | Simple Form | `src/simple-form/index.tsx` | Dasar `register`, `handleSubmit`, `formState.errors`, `isSubmitting` |

---

## Struktur

- `src/shared` — komponen field reusable (`text-field`, `text-area-field`) yang membawa label, pesan error, dan atribut aksesibilitas.
- `src/<topik>` — modul latihan; setiap modul memisahkan aturan validasi (`validation.ts`) dari tampilan (`index.tsx`).
