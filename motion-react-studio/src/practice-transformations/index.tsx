import { motion } from "framer-motion";

/**
 * Komponen latihan transformasi: box sederhana dengan transformasi.
 *
 * Single Responsibility: hanya merender satu box dengan animasi transformasi.
 */
const Box = () => (
  <motion.div
    className="practice-box"
    initial={{ scale: 1 }}
    animate={{ scale: 1.2 }}
    transition={{ duration: 0.5 }}
  />
);

/**
 * Komponen latihan transformasi: lingkaran memantul.
 */
const BouncingCircle = () => (
  <motion.div
    className="practice-circle"
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
  />
);

/**
 * Komponen latihan transformasi: ikon berputar.
 */
const SpinningIcon = () => (
  <motion.div
    className="practice-icon"
    animate={{ rotate: 360 }}
    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
  />
);

/**
 * Komponen latihan transformasi: persegi miring.
 */
const SkewRectangle = () => (
  <motion.div
    className="practice-rect"
    initial={{ skewX: 0 }}
    animate={{ skewX: 20 }}
    transition={{ duration: 0.5 }}
  />
);

/**
 * Komponen latihan transformasi: animasi kompleks gabungan.
 */
const ComplexAnimation = () => (
  <motion.div
    className="practice-complex"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  />
);

/**
 * Komponen latihan transformasi: kotak berurutan.
 */
const SequentialBoxes = () => (
  <motion.div
    className="practice-sequential"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  />
);

/**
 * Demo latihan transformasi: 6 komponen transformasi dasar.
 */
export default function PracticeTransformations() {
  return (
    <section
      className="practice-demo"
      aria-labelledby="practice-transformations-title"
    >
      <h3 id="practice-transformations-title">Latihan Transformations</h3>
      <div className="practice-grid">
        <Box />
        <BouncingCircle />
        <SpinningIcon />
        <SkewRectangle />
        <ComplexAnimation />
        <SequentialBoxes />
      </div>
      <p className="caption">
        Enam contoh transformasi dasar: skala, pantul, putar, miring, gabungan,
        dan berurutan.
      </p>
    </section>
  );
}
