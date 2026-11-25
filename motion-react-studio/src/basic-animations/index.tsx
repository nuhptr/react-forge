import { motion } from "framer-motion";

/**
 * Konfigurasi animasi dasar.
 *
 * Single Responsibility: hanya mendefinisikan properti animasi awal dan target.
 */
const boxVariants = {
  initial: { x: 0, y: 0, opacity: 0 },
  animate: { x: 100, y: 100, opacity: 1 },
  transition: { duration: 0.6, ease: "easeInOut" },
} as const;

/**
 * Komponen animasi dasar menggunakan `motion.div`.
 *
 * Single Responsibility: hanya merender kotak yang dianimasikan;
 * konfigurasi animasi dipisahkan ke `boxVariants`.
 */
export default function BasicAnimations() {
  return (
    <section
      className="animation-demo"
      aria-labelledby="basic-animations-title"
    >
      <h3 id="basic-animations-title">Gerakan Dasar</h3>
      <motion.div
        className="animation-box"
        variants={boxVariants}
        initial="initial"
        animate="animate"
        transition={boxVariants.transition}
      />
      <p className="caption">
        Kotak Bergerak: bergerak dari (0, 0) ke (100, 100) dengan opacity
        memudar.
      </p>
    </section>
  );
}
