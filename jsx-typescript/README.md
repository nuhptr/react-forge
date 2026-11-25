# React with TypeScript (`jsx-typescript`)

Workspace khusus pendalaman pola pengetikan statis **TypeScript** pada komponen, state, ref, event, Context API, dan reducer di **React 19**.

---

## Mulai Cepat

```bash
cd jsx-typescript
bun install
bun run dev
```

---

## Urutan Materi Berurutan Abjad (A–Z)

| Folder (`A–Z`) | Topik Asli | Pintu Masuk | Fokus Materi |
| :--- | :--- | :--- | :--- |
| `component-props-typing` | Component Props Typing | `src/component-props-typing/index.tsx` | Kontrak `interface`/`type` pada props, destructuring, dan `ReactNode` |
| `declared-fc-types` | Alternative Way (`FC`) | `src/declared-fc-types/index.tsx` | Pola pengetikan `FC<Props>` vs anotasi parameter fungsi langsung |
| `extensible-reusable-types` | Reusable Types | `src/extensible-reusable-types/index.tsx` | Perluasan tipe (`extends` / intersection) antara `UserInfo` dan `AdminInfo` |
| `generic-state-types` | `useState` Types | `src/generic-state-types/index.tsx` | Parameter tipe generik pada `useState<T>` untuk objek dan array |
| `interactive-refs-events` | `useRef`, Forms, Events | `src/interactive-refs-events/index.tsx` | Pengetikan `useRef<HTMLInputElement>`, `ChangeEvent`, `SubmitEvent`, & `MouseEvent` |
| `managed-context-types` | Context API | `src/managed-context-types/index.tsx` | `createContext<T \| undefined>(undefined)` dengan custom hook penjaga null |
| `reducer-union-types` | `useReducer` | `src/reducer-union-types/index.tsx` | Discriminated union action untuk transisi reducer yang *exhaustive* |
| `remote-effect-types` | `useEffect` | `src/remote-effect-types/index.tsx` | Pengetikan hasil fetch JSON (`DummyJSON` & `JSONPlaceholder`) beserta status muat/error |
