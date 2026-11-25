# Referensi React Auth (full-stack) — Yield React Auth

Proyek autentikasi lengkap dari chapter 21 sumber referensi kursus React: Express + Mongoose + JWT di backend, React + Redux Toolkit di frontend. Disalin utuh di `full-stack/` sebagai materi baca.

```
full-stack/
├── package.json        # root: express, mongoose, jsonwebtoken, bcryptjs, dll
├── .env.example        # template koneksi DB + JWT
├── backend/
│   ├── index.js
│   ├── config/db.js
│   ├── controllers/    # auth, user
│   ├── middlewares/    # authMiddleware (verifikasi JWT), checkId
│   ├── models/         # User (Mongoose)
│   └── routes/
└── frontend/           # React + RTK Query + react-toastify
```

---

## Koneksi MongoDB & JWT

`backend/config/db.js`:

```js
await mongoose.connect(process.env.MONGO_URI)
```

`middlewares/authMiddleware.js` & `utils/createToken.js` memakai `process.env.JWT_SECRET`.

Salin template lalu isi:

```bash
cd full-stack
cp .env.example .env
```

```dotenv
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/reactAuth
JWT_SECRET=ganti-dengan-rahasia-anda
```

- MongoDB lokal (`mongod` di 27017) atau Atlas (`mongodb+srv://...`).
- `JWT_SECRET` **wajib** — token gagal diverifikasi tanpa itu.
- `.env` tidak boleh di-commit (sudah masuk `.gitignore` sumber).

---

## Menjalankan

```bash
cd full-stack
npm install                 # atau bun install

# Jalankan backend + frontend sekaligus
npm run fullstack
```

Atau manual:

```bash
npm run backend             # nodemon backend/index.js
cd frontend && npm install && npm run dev
```

Default backend: `http://localhost:5000`. Frontend Vite biasanya `http://localhost:5173`.

---

## Catatan

- `node_modules/` tidak disertakan — pasang sendiri.
- Workspace utama `yield-react-auth/` tetap memakai Vite + demo form; folder ini murni referensi backend nyata.
- Tidak ada perubahan pada build workspace.
