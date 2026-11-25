# UI Storybook Catalog (`ui-storybook-catalog`)

Dokumentasi komponen interaktif dengan **Storybook 10** sungguhan: komponen React, file `*.stories.tsx`, konfigurasi `.storybook/`, dan Control panel.

Modul ini adalah bagian dari kurikulum [React Forge](../readme.md) dan mengikuti konvensi yang sama: Vite + React 19 + TypeScript strict + Tailwind CSS v4.

---

## Menjalankan

```bash
cd ui-storybook-catalog
bun install

# Storybook (port 6006)
bun run storybook

# Build statis Storybook -> storybook-static/
bun run build-storybook

# Aplikasi Vite + gate tipe
bun run build
```

StoryFish hasil build ada di `storybook-static/` (di-ignore git & Prettier).

---

## Daftar Story

| Topik                  | Story                                                   | File                                         |
| :--------------------- | :------------------------------------------------------ | :------------------------------------------- |
| Rendering Button       | Default                                                 | `stories/rendering-button.stories.tsx`       |
| Variations & Renaming  | Blue / Green / Red Button                               | `stories/variations.stories.tsx`             |
| Stories Within Stories | Default / LongPlaceholder (komposisi Button + MyInput)  | `stories/stories-within-stories.stories.tsx` |
| Args                   | Default / Disabled / Danger (`args` level meta & story) | `stories/args.stories.tsx`                   |
| ArgTypes               | Playground (Controls: text, select, boolean, color)     | `stories/arg-types.stories.tsx`              |
| Parameters             | Centered (layout, viewport, backgrounds)                | `stories/parameters.stories.tsx`             |
| Decorators             | WithMetaDecorator / WithLocalDecorator                  | `stories/decorators.stories.tsx`             |
| Storybook + TypeScript | Default / Disabled / Red (`Meta<ButtonProps>`)          | `stories/storybook-typescript.stories.tsx`   |
| Docs                   | Documentation (`parameters.docs.description`)           | `stories/docs.stories.tsx`                   |

Komponen yang dipakai story: `stories/components/button.tsx` dan `stories/components/my-input.tsx`.

Total **17 story** terdaftar di `storybook-static/index.json` (9 story lama + 8 story baru).

---

## Struktur Kode

```text
.storybook/
├── main.ts        # glob stories + framework @storybook/react-vite
└── preview.ts     # parameter global (layout, controls matchers)

stories/
├── components/    # Button, MyInput (bukan di src/components)
└── *.stories.tsx  # 9 file story di atas

src/
├── App.tsx        # playground Vite (pemilih topik)
├── demos.ts
├── section-list.tsx
├── globals.css
└── styles/        # base.css, layout.css
```

Story sengaja berada di luar `src/` supaya tidak ikut `tsc -b` aplikasi Vite; Storybook mengompilasinya sendiri.

---

## Prinsip

- **SRP:** komponen hanya merender UI; konfigurasi story ada di file `*.stories.tsx`.
- **OCP:** varian/argumen baru ditambah lewat `args`/`argTypes` tanpa mengubah komponen.
- **ISP:** props komponen seminimal mungkin (`ButtonProps`, `MyInputProps`).
- **Aksesibilitas:** story memakai komponen dengan elemen semantik dan status `disabled`.

---

## Referensi

Materi diadaptasi dari referensi kursus React.
