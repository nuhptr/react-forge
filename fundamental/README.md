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
import PortalShowcase from "./portal"
// import StateChallenge from "./state/challenge"
// import AdvancedKeys from "./advanced-keys"

const App = () => {
    return <PortalShowcase />
}

export default App
```

---

## Urutan Materi & Kurikulum

Seluruh folder menggunakan nama deskriptif tanpa awalan angka, dan setiap nama file (`kebab-case.tsx`) selaras 1-banding-1 dengan nama komponen `PascalCase` yang diekspor:

| # | Topik | File Materi | File Challenge | Konsep Utama yang Dipelajari |
| :- | :--- | :--- | :--- | :--- |
| 1 | **Basic Components** | `src/basic/index.tsx` | — | Pembuatan functional component & penyusunan komponen anak (`GreetingMessage`) |
| 2 | **JSX** | `src/jsx/index.tsx` | `src/jsx/challenge.tsx` | Penulisan markup deklaratif di TypeScript & elemen HTML semantik |
| 3 | **JSX Rules** | `src/jsx-rules/index.tsx` | `src/jsx-rules/challenge.tsx` | Satu elemen induk, self-closing tag, atribut `camelCase` (`htmlFor`, `className`) |
| 4 | **Multiple Components** | `src/multiple-components/index.tsx` | — | Komposisi halaman dengan landmark `<header>`, `<main>`, dan `<footer>` |
| 5 | **Dynamic Content** | `src/dynamic-content/index.tsx` | `src/dynamic-content/challenge.tsx` | Ekspresi JS `{}`, variabel, pemanggilan fungsi (`GreetingContent`, `ProductInfo`) |
| 6 | **List of Data** | `src/list-of-data/index.tsx` | `src/list-of-data/challenge.tsx` | Iterasi array dengan `.map()` & penggunaan `key` unik yang stabil (`UserList`, `ProductList`) |
| 7 | **Props** | `src/props/index.tsx` | `src/props/challenge.tsx` | Aliran data satu arah bertipe dari induk ke anak (`Person`, `Product`) |
| 8 | **Props Destructuring** | `src/props-destructuring/index.tsx` | `src/props-destructuring/challenge.tsx` | Destructuring parameter `props` beserta nilai default (`Dealer`, `Car`) |
| 9 | **Props Children** | `src/props-children/index.tsx` | — | Proyeksi konten fleksibel menggunakan `ReactNode` (`Card`) |
| 10 | **Conditional Rendering** | `src/conditional-rendering/index.tsx` | `src/conditional-rendering/challenge.tsx` | Operator ternary & guard clause (`Weather`, `UserStatus`, `Greeting`) |
| 11 | **Styles & Icons** | `src/styles/index.tsx` (`inline-style.tsx`, `separated-styles.tsx`, `icons.tsx`) | `src/styles/challenge.tsx` | Objek `CSSProperties`, file CSS terpisah, dan kustomisasi `react-icons` (`StyledCard`, `ProfileCard`, `BeerIcons`) |
| 12 | **Events** | `src/event/index.tsx` | `src/event/challenge.tsx` | Penanganan `onClick`, `onCopy`, `onMouseEnter`, `onMouseLeave` (`EventPlayground`) |
| 13 | **State (`useState`)** | `src/state/*` | `src/state/challenge/index.tsx` | State angka, pembaruan immutable array/objek, berbagi state, & lazy initializer |
| 14 | **Portals** | `src/portal/index.tsx` | — | `createPortal`, komponen `<Portal>`, custom hook `useClipboardCopy`, & `ToastNotification` |
| 15 | **Advanced Keys** | `src/advanced-keys/index.tsx` | — | Mereset state komponen dan elemen DOM secara sengaja dengan mengubah `key` (`ThemeSwitcher`) |

---

## Rincian Submodul `state`

Di dalam `src/state/`, materi pengelolaan state dipecah ke dalam subtopik terfokus:

- `basic-counter/` — Pembaruan state fungsional (`prevCount => prevCount + 1`) dengan batas minimum nol (`BasicCounter`).
- `updating-arrays/` — Penambahan, penghapusan (`filter`), dan pengubahan (`map`) array string secara *immutable*.
- `updating-object/` — Pembaruan properti objek secara *immutable* menggunakan spread syntax (`{ ...prevMovie, rating: 5 }`).
- `updating-array-of-objects/` — Pembaruan terarah pada satu elemen objek di dalam koleksi berdasarkan kecocokan `id`.
- `sharing-state/` — Mengangkat state (*lifting state up*) ke komponen induk agar dua komponen anak (`PrimaryCounter`, `SecondaryCounter`) selalu sinkron.
- `passing-function-as-value/` — Pola inisialisasi malas `useState(initializer)`: `LazyCounter`, `RandomNumberGenerator`, dan `PersistentNameForm` berbasis `localStorage`.
- `challenge/` — Empat latihan praktik state: `Counter`, `Profile`, `ShoppingList`, dan `TodoList`.

---

## Rincian Arsitektur `portal`

Modul `src/portal/` dirancang mengikuti kaidah **SOLID** agar komponen overlay mudah dirawat dan digunakan kembali:

```text
src/portal/
├── components/
│   ├── clipboard-copy-form.tsx # Form input berlabel yang menghubungkan state teks ke aksi salin
│   ├── portal.tsx              # Komponen pembungkus createPortal yang menargetkan #portal-root
│   └── toast-notification.tsx  # Komponen toast presentational dengan dukungan jeda saat fokus
├── hooks/
│   └── use-clipboard-copy.ts   # Custom hook khusus Clipboard API & timer auto-dismiss
└── index.tsx                   # Halaman utama demonstrasi materi Portal (PortalShowcase)
```

1. **Kontainer Mount:** [`index.html`](./index.html) menyediakan `<div id="portal-root" role="region" aria-label="Notifications"></div>` berdampingan dengan `<div id="root"></div>`.
2. **Abstraksi Portal (`portal.tsx`):** Mencari elemen tujuan berdasarkan `id` dan me-mount `children` di luar pohon `#root` melalui `createPortal`.
3. **Isolasi Hook (`use-clipboard-copy.ts`):** Menyediakan `{ isCopied, errorMessage, copyToClipboard, dismissNotification, pauseAutoDismiss, resumeAutoDismiss }` lengkap dengan pembersihan timer saat komponen di-unmount.
4. **Umpan Balik Aksesibel (`toast-notification.tsx` & `clipboard-copy-form.tsx`):** Mengumumkan keberhasilan salin melalui `role="status"` sekaligus menampilkan teks `"Copied!"` pada tombol pengirim.

---

## Verifikasi Build

```bash
bun run build
```
