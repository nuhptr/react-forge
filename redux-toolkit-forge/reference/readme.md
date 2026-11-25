# Referensi MERN — Redux Toolkit Forge

Dua proyek full-stack (Express + Mongoose + React) dari sumber referensi kursus React. Disalin utuh sebagai **materi baca**, bukan di-build oleh workspace `redux-toolkit-forge`.

| Folder | Isi | Package |
| :--- | :--- | :--- |
| `mern-ecommerce/` | E-Commerce: product, category, order, user, upload | `package.json` (root + frontend) |
| `mern-movies/` | Movies App: genre, movie, user, comment | `package.json` (root + frontend) |

---

## Koneksi MongoDB

Kode `backend/config/db.js` memanggil:

```js
await mongoose.connect(process.env.MONGO_URI)
```

Jadi **wajib** menyiapkan `MONGO_URI` lewat file `.env`. Salin template:

```bash
cd mern-ecommerce          # atau mern-movies
cp .env.example .env
```

Isi `.env`:

```dotenv
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/reactStore
JWT_SECRET=ganti-dengan-rahasia-anda
```

- MongoDB lokal: `mongod` jalan di `27017`, atau pakai MongoDB Atlas (ganti URI dengan `mongodb+srv://...`).
- `JWT_SECRET` dipakai `utils/createToken.js` dan `middlewares/authMiddleware.js`.
- Tanpa `.env`, server gagal konek DB saat startup.

---

## Menjalankan

Tiap proyek punya `package.json` sendiri:

```bash
cd mern-ecommerce
npm install              # atau bun install

# Terminal 1 — backend
node backend/index.js

# Terminal 2 — frontend
cd frontend && npm install && npm run dev
```

Untuk `mern-movies`, pola sama. Cek `package.json` masing-masing untuk script tambahan (`concurrently`, dll).

---

## Catatan

- `node_modules/` tidak disertakan — pasang sendiri.
- File `example-env.env` dari sumber juga ada; `.env.example` versi bersih sudah saya siapkan.
- Ini bukan aplikasi workspace utama, jadi `bun run build` di `redux-toolkit-forge/` tidak menyentuh folder ini.
