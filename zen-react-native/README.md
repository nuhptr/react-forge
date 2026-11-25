# Zen React Native (`zen-react-native`)

Modul **React Native sungguhan** (Expo SDK 54 + Expo Router 6 + React Native 0.81), bukan React web. Seluruh UI memakai primitif `View`, `Text`, `FlatList`, `TextInput`, `Pressable`, `StyleSheet`, dan `Button`.

Bagian dari kurikulum [React Forge](../readme.md).

---

## Menjalankan

```bash
cd zen-react-native
bun install

bun run start     # Expo dev server (QR untuk HP / emulator)
bun run android   # Android emulator
bun run ios       # iOS simulator
bun run web       # preview web via react-native-web

bun run typecheck # tsc --noEmit
bunx expo export --platform web  # build statis
```

Module ini **tidak memakai Vite** — berbeda dari 21 modul lain. Build memakai Metro/Expo.

---

## 17 Topik (sesuai sumber referensi)

| Topik | Rute Expo | Fokus |
| :--- | :--- | :--- |
| Components | `/components` | View, Text, komponen composable |
| JSX | `/jsx` | Markup deklaratif & ekspresi |
| Dynamic Content | `/dynamic-content` | Variabel, fungsi, ternary |
| Styles | `/styles` | `StyleSheet.create` + inline |
| FlatList | `/flat-list` | Daftar dari array objek |
| Props | `/props` | Aliran data induk → anak |
| Conditional Rendering | `/conditional-rendering` | Ternary & guard |
| State | `/state` | `useState`, `Pressable`, `Button` |
| Input | `/input` | `TextInput` terkontrol |
| useEffect | `/use-effect` | Timer + cleanup |
| useReducer | `/use-reducer` | Reducer + action union |
| Prop Drilling | `/prop-drilling` | Propsi lewat perantara |
| Context | `/context` | Context API |
| Custom Hook | `/custom-hook` | Hook kustom reusable |
| NativeWind | `/nativewind` | className Tailwind di RN |
| Expo Router | `/expo-router` | `Link` navigasi file-based |
| Zustand | `/zustand` | Store global tanpa Provider |

---

## Struktur

```text
app/
├── _layout.tsx        # Stack navigator + global.css
├── index.tsx          # beranda: 17 tautan topik
└── <topik>.tsx        # 17 rute Expo Router

src/
├── demos.ts           # katalog 17 topik
└── <topik>/index.tsx  # kode React Native asli

app.json               # konfigurasi Expo
babel.config.js        # babel-preset-expo + nativewind
tailwind.config.js     # preset nativewind
global.css             # @tailwind base/components/utilities
```

---

## Prinsip

SRP: logika (`useCounter`, reducer, store) dipisah dari komponen tampilan. OCP: komponen menerima props. ISP: interface props seminimal mungkin. DIP: state diakses lewat hook/context, bukan langsung.

## Referensi

Diadaptasi dari referensi kursus React.
