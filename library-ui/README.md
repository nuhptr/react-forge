# React UI Libraries (`library-ui`)

Eksplorasi tiga pendekatan memakai pustaka UI di React 19 + TypeScript + Vite + Tailwind CSS v4. Setiap modul memakai **cara penggunaan khas library-nya**, bukan sekadar contoh teks.

Bagian dari kurikulum [React Forge](../readme.md).

---

## Modul

| Folder | Library | Cara pakai (yang dibuktikan di kode) |
| :--- | :--- | :--- |
| `daisy-ui` | DaisyUI 5 | Plugin Tailwind via `@plugin "daisyui"`; class semantik `btn`, `card`, `badge`, `input`, `toggle` — tanpa utility manual |
| `radix-themes` | `@radix-ui/themes` | `<Theme>` provider + `Flex`, `Text`, `Button`, `Card`, `Callout`, `TextField`; CSS `@radix-ui/themes/styles.css` |
| `shadcn-ui` | shadcn/ui (CLI) | `components.json` + alias `@/*`; komponen disalin CLI ke `src/components/ui/` via `shadcn add button card`; demo import `@/components/ui/button` & `@/components/ui/card` |

Pilih modul lewat dropdown/kartu — `src/App.tsx` tidak perlu disunting.

---

## Mulai Cepat

```bash
cd library-ui
bun install
bun run dev
```

`bun run build` = `tsc -b && vite build`.

---

## Catatan teknis

- DaisyUI 5 dengan Tailwind v4 mendeklarasikan plugin di CSS (`@plugin "daisyui"`), bukan `tailwind.config.js`.
- Radix Themes membungkus seluruh aplikasi dengan `<Theme>` di `App.tsx`.
- shadcn/ui **bukan dependency yang di-`npm install`**: komponen disalin oleh CLI ke `src/components/ui/` dan didaftarkan di `components.json`.
- Instalasi mengikuti dokumentasi Vite: Tailwind v4 → alias `@/*` (via `paths` di tsconfig + `resolve.alias` di Vite; TypeScript 7 sudah tidak mengenal `baseUrl`) → `bunx shadcn@latest init -d -y` → `bunx shadcn@latest add card -y`.
- `globals.css` tetap mempertahankan `@plugin "daisyui"`; CLI menambahkan `@import "shadcn/tailwind.css"` dan tema tanpa menimpa plugin DaisyUI.

---

## Referensi

Materi diadaptasi dari referensi kursus React.
