# Referensi React Design System (monorepo) — Xen Design System

Struktur monorepo asli dari chapter 20 referensi kursus React. Disalin utuh sebagai materi baca, bukan di-build oleh workspace `xen-design-system`.

```
reference/packages/
├── foundation/   # design token (Style Dictionary): colors, opacity, radius, shadow, spacing
│   ├── src/tokens/*.json
│   ├── style-dictionary.config.js
│   └── package.json
├── react/        # komponen React (Button) + Tailwind input.css
│   ├── src/Button.tsx
│   ├── tailwind.config.js
│   └── package.json
└── storybook/    # dokumentasi komponen
    ├── .storybook/{main.ts,preview.ts}
    ├── stories/Button.stories.tsx
    └── package.json
```

---

## Alur data token → komponen → story

1. `foundation/src/tokens/*.json` = sumber kebenaran warna/spacing/radius.
2. Style Dictionary (`foundation/style-dictionary.config.js`) mengubah JSON menjadi CSS/JS token.
3. `react/` mengonsumsi token lewat Tailwind (`tailwind.config.js` + `src/input.css`).
4. `storybook/` mendokumentasikan `Button` dari paket `react`.

---

## Menjalankan

Tiap paket punya `package.json` sendiri. Dari sumber memakai Yarn Berry (`.yarnrc.yml` ada di root proyek asli):

```bash
cd reference/packages/foundation && npm install && npm run build
cd ../react && npm install && npm run build
cd ../storybook && npm install && npm run storybook
```

Jika `npm run build` belum tersedia di suatu paket, jalankan perintah yang ada di `scripts` paket tersebut (lihat `package.json` masing-masing). Workspace utama `xen-design-system/` tidak menyentuh folder ini.

---

## Catatan

- `node_modules/` tidak disertakan.
- `yarn.lock` sumber tidak disalin; gunakan package manager yang kamu pilih.
- Ini referensi arsitektur monorepo, bukan aplikasi yang di-build di repo ini.
