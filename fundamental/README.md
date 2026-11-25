# React Fundamentals (`fundamental`)

Kumpulan materi praktik dan latihan koding (*challenge*) untuk menguasai konsep inti **React 19** bersama **TypeScript**, **Vite**, dan **Tailwind CSS v4**.

---

## Mulai Cepat

```bash
cd fundamental
bun install
bun run dev
```

Untuk mencoba materi atau challenge tertentu, buka [`src/App.tsx`](./src/App.tsx) lalu ubah komponen yang dirender:

```tsx
import TeleportedPortals from "./teleported-portals"
// import VerifiedChallenges from "./reactive-state/verified-challenges"
// import UniqueKeys from "./unique-keys"

const App = () => {
    return <TeleportedPortals />
}

export default App
```

---

## Urutan Materi & Kurikulum (A–Z)

Seluruh nama subfolder di dalam `src/` menggunakan istilah natural tanpa awalan angka sehingga urutan abjad (`A → Z`) secara otomatis mengikuti urutan pembelajaran asli:

| Folder (`A–Z`) | Topik Asli | File Materi | File Challenge | Konsep Utama yang Dipelajari |
| :--- | :--- | :--- | :--- | :--- |
| `atomic-components` | Basic Components | `src/atomic-components/index.tsx` | — | Functional component & penyusunan komponen anak (`GreetingMessage`) |
| `base-jsx` | JSX | `src/base-jsx/index.tsx` | `src/base-jsx/challenge.tsx` | Penulisan markup deklaratif di TypeScript & elemen HTML semantik |
| `core-jsx-rules` | JSX Rules | `src/core-jsx-rules/index.tsx` | `src/core-jsx-rules/challenge.tsx` | Satu elemen induk, self-closing tag, atribut `camelCase` (`htmlFor`, `className`) |
| `decomposed-components` | Multiple Components | `src/decomposed-components/index.tsx` | — | Dekomposisi halaman menjadi `<header>`, `<main>`, dan `<footer>` |
| `embedded-expressions` | Dynamic Content | `src/embedded-expressions/index.tsx` | `src/embedded-expressions/challenge.tsx` | Ekspresi JS `{}`, variabel, pemanggilan fungsi (`GreetingContent`, `ProductInfo`) |
| `formatted-lists` | List of Data | `src/formatted-lists/index.tsx` | `src/formatted-lists/challenge.tsx` | Iterasi array `.map()` & `key` unik yang stabil (`UserList`, `ProductList`) |
| `general-props` | Props | `src/general-props/index.tsx` | `src/general-props/challenge.tsx` | Aliran data satu arah bertipe dari induk ke anak (`Person`, `Product`) |
| `handy-destructuring` | Props Destructuring | `src/handy-destructuring/index.tsx` | `src/handy-destructuring/challenge.tsx` | Destructuring parameter `props` beserta nilai default (`Dealer`, `Car`) |
| `injected-children` | Props Children | `src/injected-children/index.tsx` | — | Proyeksi konten fleksibel menggunakan `ReactNode` (`Card`) |
| `logical-rendering` | Conditional Rendering | `src/logical-rendering/index.tsx` | `src/logical-rendering/challenge.tsx` | Operator ternary & guard clause (`Weather`, `UserStatus`, `Greeting`) |
| `modern-styles` | Styles & Icons | `src/modern-styles/index.tsx` | `src/modern-styles/challenge.tsx` | Objek `CSSProperties`, file CSS terpisah, dan `react-icons` (`StyledCard`, `ProfileCard`, `BeerIcons`) |
| `native-events` | Events | `src/native-events/index.tsx` | `src/native-events/challenge.tsx` | Penanganan `onClick`, `onCopy`, `onMouseEnter`, `onMouseLeave` (`EventPlayground`) |
| `reactive-state` | State (`useState`) | `src/reactive-state/index.tsx` | `src/reactive-state/verified-challenges/index.tsx` | State angka, pembaruan immutable array/objek, berbagi state, & lazy initializer |
| `teleported-portals` | Portals | `src/teleported-portals/index.tsx` | — | `createPortal`, komponen `<Portal>`, custom hook `useClipboardCopy`, & `ToastNotification` |
| `unique-keys` | Advanced Keys | `src/unique-keys/index.tsx` | — | Mereset state komponen & elemen DOM secara sengaja dengan mengubah `key` (`ThemeSwitcher`) |

---

## Rincian Submodul `reactive-state` (A–Z)

Di dalam `src/reactive-state/`, ketujuh subtopik juga berurutan secara abjad sesuai urutan belajar:

1. `basic-counter/` — Pembaruan state fungsional (`prevCount => prevCount + 1`) dengan batas minimum nol (`BasicCounter`).
2. `immutable-arrays/` — Penambahan, penghapusan (`filter`), dan pengubahan (`map`) array string secara *immutable* (`ImmutableArrays`).
3. `model-object/` — Pembaruan properti objek tunggal secara *immutable* menggunakan spread syntax (`ModelObject`).
4. `object-collections/` — Pembaruan terarah pada satu elemen objek di dalam koleksi berdasarkan kecocokan `id` (`ObjectCollections`).
5. `shared-state/` — Mengangkat state (*lifting state up*) ke komponen induk agar `PrimaryCounter` dan `SecondaryCounter` selalu sinkron (`SharedState`).
6. `state-initializers/` — Pola inisialisasi malas `useState(initializer)`: `LazyCounter`, `RandomNumberGenerator`, dan `PersistentNameForm` berbasis `localStorage` (`StateInitializers`).
7. `verified-challenges/` — Empat latihan praktik state: `Counter`, `Profile`, `ShoppingList`, dan `TodoList` (`VerifiedChallenges`).
