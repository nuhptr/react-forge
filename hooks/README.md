# React Hooks (`hooks`)

Workspace **Vite + React 19 + TypeScript** berisi implementasi lengkap materi dan *challenge* **React Hooks** dengan arsitektur **SOLID**, tipe statis ketat, dan dokumentasi Bahasa Indonesia.

---

## Mulai Cepat

```bash
cd hooks
bun install
bun run dev
```

Pilih topik atau *challenge* langsung lewat dropdown/kartu di halaman — tidak perlu menyunting [`src/App.tsx`](./src/App.tsx). Daftar topik ada di [`src/demos.ts`](./src/demos.ts), UI pemilih di [`src/section-list.tsx`](./src/section-list.tsx).

---

## Urutan Materi & Kurikulum (A–Z)

Seluruh nama folder di dalam `src/` disusun menggunakan istilah teknis React yang natural tanpa awalan angka sehingga urutan abjad (`A → Z`) otomatis mengikuti urutan pembelajaran asli:

| Folder (`A–Z`) | Topik Asli | File Materi | File Challenge | Konsep Utama yang Dipelajari |
| :--- | :--- | :--- | :--- | :--- |
| `basic-state` | `useState` | `src/basic-state/index.tsx` | — | Dasar state angka & daftar immutable (`StateCounter`) |
| `effect-lifecycle` | `useEffect` | `src/effect-lifecycle/index.tsx` | `src/effect-lifecycle/challenge.tsx` | Dependency array, listener cleanup, fetch dengan `AbortController` (`MountLogger`, `DocumentTitleCounter`, `PostsPreview`) |
| `layered-prop-drilling` | Prop Drilling | `src/layered-prop-drilling/index.tsx` | — | Aliran props berantai (`OuterSection` → `MiddleSection` → `InnerGreeting`) |
| `managed-context` | Context & `useContext` | `src/managed-context/index.tsx` | `src/managed-context/challenge.tsx` | Typed Context Provider + fail-fast consumer hook (`ProfileProvider`, `UserProvider`) |
| `reducer-dispatch` | `useReducer` | `src/reducer-dispatch/index.tsx` | `src/reducer-dispatch/challenge.tsx` | Pure reducer dengan discriminated union action (`counterReducer`, `StepCounter`) |
| `reference-values` | `useRef` | `src/reference-values/index.tsx` | `src/reference-values/challenge.tsx` | Fokus DOM imperatif & penyimpanan ID interval lintas-render (`FocusInput`, `IntervalTimer`) |
| `reusable-hooks` | Custom Hooks | `src/reusable-hooks/index.tsx` | `src/reusable-hooks/challenge.tsx` | Ekstraksi logika ber-state (`useToggle`, `useFormInput`, generic `useFetch<T>`) |
| `unique-identifiers` | `useId` | `src/unique-identifiers/index.tsx` | — | ID deterministik bebas bentrok untuk multi-instans form aksesibel (`AccessibleFieldGroup`) |
