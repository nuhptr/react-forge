# Referensi Build Your Own Component Library — Vault Component Library

Proyek pustaka komponen lengkap dari chapter 18 referensi kursus React. Disalin utuh di sini sebagai materi baca. Workspace utama `vault-component-library/` memakai versi ringkas (7 komponen) untuk latihan cepat.

```
reference/
├── package.json          # name: component-lib, peer react 19
├── rollup.config.js      # bundling CJS/ESM -> dist/
├── tailwind.config.js
├── vitest.config.ts
├── .storybook/
│   ├── main.ts           # stories ../src/**/*.stories.*
│   └── preview.ts
└── src/
    ├── components/       # Accordion, Button, Card, DatePicker, Input, Pagination, Select
    ├── stories/          # *.stories.tsx (7 file)
    ├── tests/            # *.test.tsx (7 file) + setup.ts
    ├── index.ts          # public export
    └── index.css
```

---

## Menjalankan

```bash
cd reference
npm install                 # atau bun install

npm run rollup              # build library -> dist/
npm run storybook           # Storybook di http://localhost:6006
npm run build-storybook     # build statis
npx vitest run              # menjalankan test
```

Script lengkap ada di `package.json`. `peerDependencies: react ^19` — pasang React di consuming app.

---

## Catatan

- `node_modules/` tidak disertakan — pasang sendiri.
- `package-lock.json` sumber tetap ada untuk referensi versi.
- Workspace `vault-component-library/` tidak membangun folder ini; ini murni contoh library publishing + Storybook + Vitest.
