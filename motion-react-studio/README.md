# Motion Studio (`motion-react-studio`)

Eksplorasi **Framer Motion** dengan React 19 + TypeScript + Vite.

Materi kurikulum chapter 9:

| Folder (`A–Z`) | Topik | Pintu Masuk | Fokus Pembelajaran |
| :--- | :--- | :--- | :--- |
| `basic-animations` | Animasi dasar | `src/basic-animations/index.tsx` | `motion`, `animate`, `initial` |
| `gestures` | Gesture | `src/gestures/index.tsx` | `whileHover`, `whileTap`, `drag` |
| `keyframes` | Keyframes | `src/keyframes/index.tsx` | Animasi keyframes berulang |
| `practice-gestures` | Latihan Gesture | `src/practice-gestures/index.tsx` | Kartu geser, tarik, putar |
| `practice-keyframes` | Latihan Keyframes | `src/practice-keyframes/index.tsx` | Bola memantul, tombol berdenyut |
| `practice-stagger-animation` | Latihan Stagger | `src/practice-stagger-animation/index.tsx` | Daftar bertahap, galeri |
| `practice-transitions` | Latihan Transisi | `src/practice-transitions/index.tsx` | Fade, sidebar, modal, toast |
| `practice-transformations` | Latihan Transformasi | `src/practice-transformations/index.tsx` | Box, lingkaran, ikon, persegi |
| `practice-use-motion-value` | Latihan useMotionValue | `src/practice-use-motion-value/index.tsx` | Slider, skala terhubung |
| `practice-use-spring` | Latihan useSpring | `src/practice-use-spring/index.tsx` | Slider spring, rotasi |
| `practice-while-in-view` | Latihan whileInView | `src/practice-while-in-view/index.tsx` | Daftar stagger, kartu balik |
| `project-advance-animation-navigation` | Proyek Navigasi | `src/project-advance-animation-navigation/index.tsx` | Sidebar animasi lanjut |
| `project-carousel` | Proyek Carousel | `src/project-carousel/index.tsx` | Carousel gambar |
| `project-draggable-cards` | Proyek Kartu Seret | `src/project-draggable-cards/index.tsx` | Kartu dapat diseret |
| `project-horizontal-scroll` | Proyek Scroll Horizontal | `src/project-horizontal-scroll/index.tsx` | Carousel scroll horizontal |
| `project-loader` | Proyek Loader | `src/project-loader/index.tsx` | Animasi pemuatan |
| `project-progress-steps` | Proyek Langkah | `src/project-progress-steps/index.tsx` | Indikator progres langkah |
| `project-scroll-animation` | Proyek Animasi Scroll | `src/project-scroll-animation/index.tsx` | Elemen muncul saat scroll |
| `project-scroll-indicator` | Proyek Indikator Scroll | `src/project-scroll-indicator/index.tsx` | Bar progres scroll |
| `project-sticky-navbar` | Proyek Navbar Melekat | `src/project-sticky-navbar/index.tsx` | Navbar menempel saat scroll |
| `stagger-animation` | Animasi Stagger | `src/stagger-animation/index.tsx` | Daftar dan galeri bertahap |
| `transitions` | Transisi | `src/transitions/index.tsx` | Transisi antar elemen |
| `transformations` | Transformasi | `src/transformations/index.tsx` | Skala, rotasi, geser |
| `use-motion-value` | useMotionValue | `src/use-motion-value/index.tsx` | Nilai gerak yang dapat dikendalikan |
| `use-scroll` | useScroll | `src/use-scroll/index.tsx` | Progres scroll dan transformasi |
| `use-spring` | useSpring | `src/use-spring/index.tsx` | Animasi spring |
| `use-transform` | useTransform | `src/use-transform/index.tsx` | Transformasi nilai gerak |
| `while-in-view` | whileInView | `src/while-in-view/index.tsx` | Animasi saat terlihat |

---

## Mulai Cepat

```bash
cd motion-react-studio
bun install
bun run dev
```

---

## Prinsip Desain (SOLID + Modern Web)

- **Single Responsibility**: konfigurasi animasi (variants, transition) dipisahkan ke file konfigurasi; komponen hanya menangani presentasi.
- **Open/Closed**: komponen animasi menerima varian dan konfigurasi lewat props, mudah diperluas tanpa mengubah kode internal.
- **Interface Segregation**: setiap komponen terima props animasi yang fokus, tidak membebani konsumen dengan prop yang tidak diperlukan.
- **Dependency Inversi**: kontrol animasi dan varian diinjeksi dari luar, tidak dikodekan kaku di dalam komponen.
- **Aksesibilitas**: `aria-label`, `role`, preferensi gerak yang dikurangi (`prefers-reduced-motion`), dan fokus yang jelas.
