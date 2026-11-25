# React Hooks (`hooks`)

Workspace Vite + React 19 + TypeScript yang didedikasikan untuk mempelajari built-in React Hooks serta perancangan custom hooks yang bersih dan dapat digunakan kembali.

---

## Mulai Cepat

```bash
cd hooks
bun install
bun run dev
```

---

## Peta Materi Pembelajaran

Setiap folder di dalam `src/` menggunakan penamaan natural tanpa awalan angka:

1. **Side Effects (`use-effect`)** — Pengambilan data (*data fetching*), sinkronisasi eksternal, dependency array, dan fungsi pembersih (*cleanup*).
2. **Context (`context` & `use-context`)** — Menghindari *prop drilling* dan membuat penyedia konteks (*context provider*) bertipe aman.
3. **State Kompleks (`use-reducer`)** — Transisi state terprediksi menggunakan pola *reducer* dan *discriminated union action*.
4. **Referensi Mutable (`use-ref`)** — Mengakses elemen DOM secara imperatif (fokus/scroll) serta menyimpan nilai tanpa memicu render ulang.
5. **Custom Hooks (`custom-hooks`)** — Mengekstrak logika ber-state agar dapat dipakai ulang (`useFetch`, `useLocalStorage`, `useToggle`).
6. **ID Unik (`use-id`)** — Pembuatan ID deterministik yang aman untuk menghubungkan atribut aksesibilitas elemen form.

---

## Daftar Perintah

| Perintah | Kegunaan |
| :--- | :--- |
| `bun run dev` | Menjalankan server pengembangan Vite |
| `bun run build` | Memeriksa tipe TypeScript (`tsc -b`) dan mem-build aset produksi |
| `bun run lint` | Menjalankan pemeriksaan ESLint pada seluruh file TypeScript/React |
| `bun run preview` | Menjalankan pratinjau hasil build produksi secara lokal |
